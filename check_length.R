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



## ------------------------------------------------------------------
## Check text
## ------------------------------------------------------------------


sessionInfo()

### END OF CODE ###