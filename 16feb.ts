// Promise Example

function delay(ms: number): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Delayed for ${ms} milliseconds`);
      }, ms);
    });
  }
  
  delay(2000)
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

    // Chaining Promises Example

function step1(): Promise<string> {
    return new Promise((resolve) => {
      resolve('Step 1 completed');
    });
  }
  
  function step2(message: string): Promise<string> {
    return new Promise((resolve) => {
      resolve(`${message}, then Step 2 completed`);
    });
  }
  
  function step3(message: string): Promise<string> {
    return new Promise((resolve) => {
      resolve(`${message}, then Step 3 completed`);
    });
  }
  
  step1()
    .then((result) => step2(result))
    .then((result) => step3(result))
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

    // Async/Await Example

function delay(ms: number): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Delayed for ${ms} milliseconds`);
      }, ms);
    });
  }
  
  async function runAsyncCode(): Promise<void> {
    try {
      const result1 = await delay(2000);
      console.log(result1);
  
      const result2 = await delay(1000);
      console.log(result2);
    } catch (error) {
      console.error(error);
    }
  }
  
  runAsyncCode();
  