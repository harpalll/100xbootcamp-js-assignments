// Problem Description – Rewrite Async/Await Using Promise Chaining

// You are given an asynchronous function written using async and await.
// Your task is to rewrite the same logic using only .then() and .catch() syntax, without changing its behavior.

// async function getUserPosts(userId) {
//   try {
//     const user = await fetchUser(userId);
//     return await fetchPosts(user.id);
//   } catch (e) {
//     console.error(e);
//   }
// }

// module.exports = getUserPosts;

const fetchUser = () => Promise.resolve({ id: 1 });
const fetchPosts = () => Promise.resolve(["post1", "post2"]);

async function getUserPosts(userId) {
  fetchUser(userId)
    .then((user) => {
      fetchPosts(user.id).then((post) => {
        console.log(post);
        return post;
      });
    })
    .catch((e) => {
      console.error("error");
    });
}

module.exports = getUserPosts;
