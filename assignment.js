// Problem 1
// function simulateAsyncTask() {
//   console.log("Task Started");
//   setTimeout(() => {
//     console.log("Task finished");
//   }, 2000);
// }

// simulateAsyncTask();

//Problem 3
// const delays = [1000, 2000, 3000];
// function simulateMultipleTasks() {
//   for (let i = 0; i < delays.length; i++) {
//     let taskNumber = i + 1;

//     new Promise((resolve) => {
//       setTimeout(() => {
//         resolve();
//       }, delays[i]);
//     }).then(() => {
//       console.log(`Task ${taskNumber} finished`);
//     });
//   }
// }

// simulateMultipleTasks();
