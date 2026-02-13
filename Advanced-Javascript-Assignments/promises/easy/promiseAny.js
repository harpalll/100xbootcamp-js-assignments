// Problem Description – promiseAny(promises)

// You are required to implement a function named promiseAny that accepts an array of Promises.
// The function should return a new Promise that resolves immediately when any one of the input promises resolves successfully.
// If all the promises reject, the returned Promise should reject with an error.
function promiseAny(promises) {
  let errCount = 0;
  return new Promise((res, rej) => {
    if (!Array.isArray(promises) || promises.length === 0) {
      rej(new Error("Empty iterable"));
    }
    promises.forEach((promise) => {
      Promise.resolve(promise)
        .then((d) => {
          res(d);
        })
        .catch((e) => {
          console.log(`errCount ${errCount} len: ${promises.length}`);
          errCount++;
          if (errCount === promises.length) {
            console.log("reached max");
            rej(new Error("All promises were rejected"));
            return;
          }
        });
    });
  });
}

const main = async () => {
  const p1 = Promise.reject("err1");
  const p2 = new Promise((res) => setTimeout(() => res("ok"), 50));
  const p3 = new Promise((res) => setTimeout(() => res("late"), 100));

  const result = await promiseAny([p1, p2, p3]);
  console.log(result);
};
main();

module.exports = promiseAny;
