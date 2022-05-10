console.log('dashboard')
var existingBlogs = document.querySelector("#existingblogs")
var createNew = document.querySelector("#createNew")
var newPost = document.querySelector("#newpost")
var newBlog = document.querySelector('#newBlog')

function hideCreateNew() {
    createNew.setAttribute("hidden", "true")
}

hideCreateNew();

newPost.addEventListener("submit",event=>{
    event.preventDefault()
    console.log('click')
    existingBlogs.hidden=true;
    newPost.hidden =true;
    createNew.hidden =false;
});

newBlog.addEventListener("submit", event => {
    event.preventDefault()
    console.log('you clicked me')
    const blogObj = {
        title:document.querySelector("#title").value,
        content:document.querySelector("#content").value,
    }
    fetch("/api/blogs",{
        method:"POST",
        body:JSON.stringify(blogObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.reload()
        } else {
            alert("trumpet sound")
        }
    })
})