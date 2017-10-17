# IamBham Lab - Reddit API

## Requirements

<!-- You need to have 5 files for this project to work.
list.html
list.js
single.html
single.js
styles.css -->

<!-- Both html files will link to your css sheet and their corresponding js file. -->

<!-- You will also need to install jquery via CDN. -->

<!-- Your list page must make an AJAX call to grab a subreddit's json. -->

You should loop through the posts and print out all of the necessary information for each post.

Each post's title will link to the single.html page where it will show the information for that one post.

### HINT!
You will need to pass the title as a parameter to your `a` tag's href attribute.


<!-- My Info -->
# Things I need to grab
    title
    url
    num_comments
    preview
        images[0/index of array of images].source.url(height/width/etc info available)
        thumbnail/thumbnail_height/thumbnail_width
    subreddit_name_prefixed(includes r/)/subreddit(just name of sub)
    Author(user who posted it)

# Query String - can be used to pass information from list page to single page
    www.blah.com/list.html ? title = hello & id = 1
        URL could be title of my list "list.html"