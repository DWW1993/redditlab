let titleContainer = document.getElementById("titleContainer")


document.addEventListener("DOMContentLoaded", function() {
    //Get post data
    $.ajax({url: "https://www.reddit.com/r/VeganFoodPorn.json", success: function (result){
        //filter down to children(the actual posts)
        let posts = result.data.children;
        console.log(posts);
        //Loop through posts to collect data(maybe push title/thumbnail/)
        for (p = 0; p < posts.length; p++) {
            let postData = posts[p].data
            let postTitle = postData.title
            let OP = postData.author;
            let commentsNum = postData.num_comments;
            let upvotes = postData.ups;
            let image = postData.url;
            let postContainers = document.createElement("div");
            
            appendTitle(postContainers, postTitle, postData);
            addInfo(postContainers, OP, commentsNum, upvotes);
            drawImages(postContainers, image);
        }

        function appendTitle(postContainersPass, postTitlePass, postData) {
            let anchor = document.createElement("a")
            anchor.href = `single.html?url=${postData.permalink}`;
            let h2 = document.createElement("h2")
            postContainersPass.className = "postContainers";
            h2.innerText = postTitlePass;
            titleContainer.appendChild(postContainersPass)
            postContainersPass.appendChild(anchor);
            anchor.appendChild(h2);
        };

        function addInfo(postContainersPass, user, comments, upvotes) {
            let userP = document.createElement("p");
            let commentsP = document.createElement("p");
            let upvotesP = document.createElement("p");
            userP.innerText = `OP: ${user}`;
            commentsP.innerText = `Comments: ${comments}`;
            upvotesP.innerText = `Upvotes: ${upvotes}`;
            postContainersPass.appendChild(userP)
            postContainersPass.appendChild(commentsP)
            postContainersPass.appendChild(upvotesP)
        }

        function drawImages(postContainersPass, postImages) {
            let imageTag = document.createElement("img");
            imageTag.src = postImages;
            postContainersPass.appendChild(imageTag);
        }
    }});
});