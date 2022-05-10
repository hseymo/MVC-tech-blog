document.querySelector("#update").addEventListener("click",event=>{
    event.preventDefault();
    const blogId = document.querySelector("#hiddenBlogId").value;
    const editBlog = {
        title:document.querySelector("#editedTitle").value,
        content:document.querySelector("#editedContent").value,
    }
    console.log(blogId);
    console.log(editBlog);
    fetch((`/api/blogs/${blogId}`),{
        method:"PUT",
        body:JSON.stringify(editBlog),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            console.log("blog updated")
            location.reload()
        } else {
            alert("please try again")
        }
    })
})

document.querySelector("#update").addEventListener("click",event=>{
    event.preventDefault();
    const blogId = document.querySelector("#hiddenBlogId").value;
    const editBlog = {
        title:document.querySelector("#editedTitle").value,
        content:document.querySelector("#editedContent").value,
    }
    console.log(blogId);
    console.log(editBlog);
    fetch((`/api/blogs/${blogId}`),{
        method:"POST",
        body:JSON.stringify(editBlog),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            console.log("blog updated")
            location.reload()
        } else {
            alert("please try again")
        }
    })
})