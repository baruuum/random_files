#!/usr/bin/env RScript

# required libraries
library("data.table")
stopifnot(
    requireNamespace("stringi"),
    requireNamespace("jsonlite")
)

## ------------------------------------------------------------------
## Helper functions
## ------------------------------------------------------------------

# word count
nwords = function(x) stringi::stri_count_regex(x, "\\S+")

# text truncation
truncate_text = function (txt_vec, thres, replace = "...")
{
    stopifnot(is.character(txt_vec), thres > 0)
    x = strsplit(txt_vec, "\\s+")
    trunc_txt = sapply(x, length) > thres
    if (sum(trunc_txt) == 0)
        return(txt_vec)
    x[!trunc_txt] = lapply(x[!trunc_txt], paste0, collapse = " ")
    x[trunc_txt] = lapply(x[trunc_txt], function(w) {
        paste0(c(w[1:thres], replace), collapse = " ")
    })
    return(unlist(x))
}

## ------------------------------------------------------------------
## Check text
## ------------------------------------------------------------------

# get data
rawdat = setDT(jsonlite::fromJSON("LengthTest.json.bck"))

# truncate post-length (bug fixed in current code to create sample)
dat = copy(rawdat)
dat[, post_message := truncate_text(post_message, 150)]

# count words
dat[, c("nw_p", "nw_a", "nw_b") := lapply(.SD, nwords), .SDcols = c("post_message", "commenter_a", "commenter_b")]
dat[, nw_total := rowSums(.SD), .SDcols = c("nw_p", "nw_a", "nw_b")]

sel_cols = names(rawdat)
sample = dat[
    # select data with total words > 100
    nw_total > 100, ..sel_cols
][
    # sample 5
    sample.int(.N, 5L, FALSE), 
]

# write
write(jsonlite::toJSON(sample, data.frame = "rows", pretty = TRUE), "sample5.json")

### END OF CODE ###