"use strict";

const array = () => {
  const a = []; 
  const obj = (i) => a[i];
  obj.push = (value) => a.push(value);
  obj.pop = () => a.pop(); 
  return obj;
};
module.exports = { array };
