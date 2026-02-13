// Problem Description – Custom Implementation of Promise.race

// You are required to implement your own version of Promise.race without using the built-in method.
// The function should accept an iterable of values that may include Promises or plain values.
// It must settle as soon as the first input settles, resolving or rejecting accordingly.
// Using Promise.resolve ensures non-promise values are handled correctly.
function promiseRace(promises) {
  return new Promise((res, rej) => {
    if (promises.length === 0) {
      return promises;
    }
    promises.forEach((promise) => {
      Promise.resolve(promise)
        .then((data) => res(data))
        .catch((err) => rej(err));
    });
  });
}

module.exports = promiseRace;
