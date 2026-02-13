// Problem Description – Custom Implementation of Promise.all

// You are required to implement your own version of Promise.all without using the built-in method.
// The function should accept an array of values that may include Promises or plain constants.
// It must resolve with an array of results in the same order once all inputs resolve, or reject immediately if any input rejects.
function promiseAll(promises) {
  let results = [];
  let resolvedCount = 0;

  return new Promise((res, rej) => {
    if (!Array.isArray(promises)) {
      rej(new TypeError("not an array"));
    }

    if (promises.length === 0) {
      res(results);
      return;
    }

    promises.forEach((promise, idx) => {
      Promise.resolve(promise)
        .then((d) => {
          results[idx] = d;
          resolvedCount++;

          if (resolvedCount === promises.length) {
            res(results);
          }
        })
        .catch((e) => {
          rej(e);
        });
    });
  });
}

const main = async (params) => {
  const p1 = new Promise((res) => setTimeout(() => res(1), 100));
  const p2 = new Promise((res) => setTimeout(() => res(2), 50));
  //   const p2 = Promise.reject("error");

  const p3 = new Promise((res) => setTimeout(() => res(3), 10));

  const result = await promiseAll([p1, p2, p3]);
  console.log(result);
};

main();

module.exports = promiseAll;
