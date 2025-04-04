// Problem 1
// function simulateAsyncTask() {
//   console.log("Task Started");
//   setTimeout(() => {
//     console.log("Task finished");
//   }, 2000);
// }

// simulateAsyncTask();

const delays = [1000, 2000, 3000];
function simulateMultipleTasks() {
  for (let i = 0; i < delays.length; i++) {
    let taskNumber = 0 + 1;

    setTimeout(() => {
      console.log(`Task ${taskNumber} finished`);
    }, delays[i]);
  }
}

simulateMultipleTasks();
