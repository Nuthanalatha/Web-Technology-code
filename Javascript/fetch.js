let url = "https://jsonplaceholder.typicode.com/posts";

//fetch()
//fetch returns a promise
//fetch method takes url as a first argument
//second arguments will be http methods

const fetchPosts = () => {
  fetch(url)
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      let postData = "";
      data.map((post) => {
        postData += `${post.title}`;
      });
      postData += "";
      const divElement = document.getElementById("users");
      divElement.innerText = postData;
    })
    .catch((err) => {
      console.log(err);
    });
};
fetchPosts();
