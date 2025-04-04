function simulateAsyncTask() {
  console.log("Task Started");
  setTimeout(() => {
    console.log("Task finished");
  }, 2000);
}

simulateAsyncTask();
