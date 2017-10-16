$.get('https://www.reddit.com/r/funny.json')
.then(function(success) {
    var posts = configureResponse(success);

    posts.forEach(function(post) {
        var container = document.createElement('div');
        var heading = document.createElement('h2');
        var a = document.createElement('a');
        var image = document.createElement('img');

        heading.innerText = post.title;
        image.setAttribute('src', formatSrc(post));
        a.setAttribute('href', 'single.html?url=' + post.permalink);
        a.appendChild(heading);
        container.appendChild(a);
        container.appendChild(image);
        document.body.appendChild(container);
    });
});

function configureResponse(data) {
    var children = data.data.children;

    return children.map(function(child, i) {
        var post = {};
        post.thumbnail = child.data.thumbnail;
        post.title = child.data.title;
        post.url = child.data.url;
        post.permalink = child.data.permalink;

        return post;
    });
}

function formatSrc(post) {
    if (/\.(gif|.gifv|jpg|jpeg|tiff|png)$/i.test(post.url)) {
        if (post.url.indexOf('.gifv') != -1) {
            return post.url.replace('.gifv', '.gif');
        }

        return post.url;
    }

    return post.thumbnail;
}
