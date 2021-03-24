const firstName = (firstName)=>{
  return firstName.toUpperCase();
};
const lastName = (lastName)=>{
  return lastName.toLowerCase();
};

console.log(firstName("mAid"));
console.log(lastName("SiVaC"));

exports.firstName = firstName;
exports.lastName = lastName;

// console.log(module.exports);
