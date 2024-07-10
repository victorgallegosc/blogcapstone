import express from "express";
import bodyParser from "body-parser";

var port = 3000;
var app = express();
var posts = [];
var postsToShow = [];
var postToEdit = {}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs", {
    postsToShow: posts,
  });
});

app.post("/submit", (req, res, next) => {
  posts.push(req.body);
  postsToShow = posts;
  console.log(posts);
  res.render("index.ejs", {
    postsToShow: posts,
  });
  next();
});

app.put("/edit", (req, res, next) => {
    posts[postToEdit].put(req.body);
    postsToShow = posts;
    console.log(posts);
    res.render("index.ejs", {
        postsToShow: posts,
    })
    resetPostFormData();
    next();
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});

function resetPostFormData() {
    document.getElementsByName("fname").setAttribute('value') = '';
    document.getElementsByName("lname").setAttribute('value') = '';
    document.getElementsByName("ptext").setAttribute('value') = '';
    document.getElementById("postForm").setAttribute('action') = '/post'
}