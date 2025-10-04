// Optional Chaning
const user = {
  profile: {
    1: "usama",
    2: "Ali",
  },
  contact: {
    email: "acd@xz4.com",
  },
};
console.log(user?.contact?.email); // acd@xz4.com

// Summary – Optional Chaining (?.)

// Optional chaining (?.) lets you safely access nested properties in an object without causing an error if something is missing.
// Instead of throwing Cannot read property ... of undefined, it returns undefined.
// You place ?. before the property that might not exist
