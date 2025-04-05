function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("User data"), 1000);
  }).then((message) => {
    console.log(message);
  });
}
console.log(fetchUser());

function fetchPosts() {}
