function getPostData(postData, postId) {
    console.log("Post data: ", postData);
    var firstName = postData.fname;
    var lastName = postData.lname;
    var postText = postData.ptext;

    document.getElementsByName("fname")[0].value = firstName;
    document.getElementsByName("lname")[0].value = lastName;
    document.getElementsByName("ptext")[0].value = postText;
    document.getElementById("originalPostId").value = postId;
    document.getElementById("postForm").action = "/edit";

    window.scrollTo(0, 0);
}
