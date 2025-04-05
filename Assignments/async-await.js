// Problem 1
// function fetchUser() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("User data"), 1000);
//   });
// }

// function fetchPosts() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("User data 2"), 2000);
//   });
// }
// async function fetchAllData() {
//   const [user, posts] = await Promise.all([fetchUser(), fetchPosts()]);
//   console.log(user);
//   console.log(posts);
// }

// fetchAllData();

// Problem 2 solved
// function fetchSuccess() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("resolved successfully the data");
//     }, 1000);
//   }).then((data) => {
//     console.log(data);
//   });
// }

// fetchSuccess();
// function fetchFailure() {
//   return new Promise((_, reject) =>
//     setTimeout(() => reject("Error occurred"), 1000)
//   ).catch((error) => {
//     console.log("One or more promises failed:", error);
//   });
// }

// fetchFailure();
