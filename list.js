let titleContainer = document.getElementById("titleContainer")


document.addEventListener("DOMContentLoaded", function() {
    //Get post data
    $.ajax({url: "https://www.reddit.com/r/MonsterHunter/.json", success: function (result){
        //filter down to children(the actual posts)
        let posts = result.data.children;
        console.log(posts);
        //Loop through posts to collect data(maybe push title/thumbnail/)
        for (p = 0; p < posts.length; p++) {
            let postData = posts[p].data
            let postTitle = postData.title
            let OP = postData.author;
            let commentsNum = postData.num_comments;
            let upvotes = postData.ups
            let postContainers = document.createElement("div");
            
            appendTitle(postContainers, postTitle);
            addInfo(postContainers, OP, commentsNum, upvotes);

        }

        function appendTitle(postContainersPass, postTitlePass) {
            let anchor = document.createElement("a")
                let h2 = document.createElement("h2")
            postContainersPass.className = "postContainers";
            h2.innerText = postTitlePass;
            anchor.href = "";
            titleContainer.appendChild(postContainersPass)
            postContainersPass.appendChild(anchor);
            anchor.appendChild(h2);
            // console.log(postTitlePass)
        };

        function addInfo(postContainersPass, user, comments, upvotes) {
            let userP = document.createElement("p");
            let commentsP = document.createElement("p");
            let upvotesP = document.createElement("p");
            userP.innerText = `OP: ${user}`;
            commentsP.innerText = `Comments;${comments}`;
            upvotesP.innerText = `Upvotes: ${upvotes}`;
            postContainersPass.appendChild(userP)
            postContainersPass.appendChild(commentsP)
            postContainersPass.appendChild(upvotesP)
        }
    }});
});

//Things I need to grab
    //title
    //url
    //num_comments
    //preview
        //images[0/index of array of images].source.url(height/width/etc info available)
        //thumbnail/thumbnail_height/thumbnail_width
    //subreddit_name_prefixed(includes r/)/subreddit(just name of sub)
    //Author(user who posted it)

//Query String - can be used to pass information from list page to single page
    //www.blah.com/list.html ? title = hello & id = 1
        //URL could be title of my list "list.html"