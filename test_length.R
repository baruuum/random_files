#!/usr/bin/env RScript

threshold = as.integer(commandArgs(trailingOnly = TRUE)[[1]])

# required libraries
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

# generate lipsum and truncate
lipsum = function(np, sp, thres) {

    rtext = stringi::stri_rand_lipsum(np)[sample.int(np, sp, replace = F)]
    truncate_text(paste0(rtext, collapse = " "), thres)

}

## ------------------------------------------------------------------
## Parameters
## ------------------------------------------------------------------

# seed
set.seed(42)

# number of comments to generate
n_comments = 50

# number of total lipsum paragraphs to generate
np = 20
# number of lipsum paragraphs to sample
sp = 5



## ------------------------------------------------------------------
## Generate text
## ------------------------------------------------------------------

res = sapply(seq_len(n_comments), function(v) {
    c(
        comment_id = as.character(sample.int(1e5, 1)),
        commenter_b = lipsum(np, sp, threshold),
        commenter_a = lipsum(np, sp, threshold),
        post_message = lipsum(np, sp, threshold)
    )
}) |> 
    t()|> 
    as.data.frame()

write(jsonlite::toJSON(res, dataframe = "rows", pretty = TRUE), "LengthTest.json")

# session info
sessionInfo()

### END OF CODE ###