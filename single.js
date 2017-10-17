var url = location.search.substring(1).split('=')[1];
let titleContainer = document.getElementById("titleContainer")

$.ajax({url: "https://www.reddit.com" + url + ".json", success: function (result){
    var pageData = result[0].data.children[0].data;
    var pageTitle = pageData.title;
    var pageUrl = pageData.url;
    let OP = pageData.author;
    let commentsNum = pageData.num_comments;
    let upvotes = pageData.ups;

    let anchor = document.createElement("a");
    let h2 = document.createElement("h2");
    h2.innerText = pageTitle;
    document.body.appendChild(h2);
    let userP = document.createElement("p");
    let commentsP = document.createElement("p");
    let upvotesP = document.createElement("p");
    userP.innerText = `OP: ${OP}`;
    commentsP.innerText = `Comments: ${commentsNum}`;
    upvotesP.innerText = `Upvotes: ${upvotes}`;
    document.body.appendChild(userP)
    document.body.appendChild(commentsP)
    document.body.appendChild(upvotesP)
    let imageTag = document.createElement("img");
    imageTag.src = pageUrl;
    document.body.appendChild(imageTag);
}});
