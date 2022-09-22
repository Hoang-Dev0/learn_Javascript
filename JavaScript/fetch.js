// API (url) : application programing interface ( có thể hiểu như một cổng giao viết được backend viết ra để front end có thể giao tiếp với database và s.t phía backend)

// Backend -> API (URL) -> fetch -> JSON -> JSON.parse() -> Javascript types -> render ra giao diện với HTML

var postAPI = 'https://jsonplaceholder.typicode.com/posts';

fetch(postAPI)
    .then(function(respond){ // respond lúc này chính là JSON
        return respond.json(); // parse -> Javascript , respond.json() sẽ return lại một promise
    }) 
    .then(function(posts){
        var htmls = posts.map(function(post){
            return `<li>
            <h3>${post.title}</h3>
            <p>${post.body}</p>
          </li>`
        })
        var html = htmls.join('')
        document.getElementById('post-block').innerHTML = html;
    })
    .catch(function(err){
        console.log(err)
    })
