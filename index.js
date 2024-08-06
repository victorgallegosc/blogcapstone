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

app.post("/edit", (req, res, next) => {
  const originalPostId = req.body.originalPostId;
  if (originalPostId) {
    posts.splice(originalPostId, 1);
  }
  posts.push(req.body);
  postsToShow = posts;
  console.log(posts);
  res.render("index.ejs", {
    postsToShow: posts,
  });
  next();
});


app.post("/delete", (req, res, next) => {
  const postId = parseInt(req.body.id, 10);
    if (postId >= 0 && postId < postsToShow.length) {
        posts.splice(postId, 1);
    }
    postsToShow = posts;
    res.redirect('/');
    next()
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});

function resetPostFormData() {
    document.getElementsByName("fname").setAttribute('value') = '';
    document.getElementsByName("lname").setAttribute('value') = '';
    document.getElementsByName("ptext").setAttribute('value') = '';
    document.getElementById("postForm").setAttribute('action') = '/post'
}