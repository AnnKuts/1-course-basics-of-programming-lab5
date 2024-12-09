"use strict";

const seq = (f) => (g) => {
  if (typeof g === "number") return f(g);
  return seq((x) => f(g(x)));
} //am I gonna use such things irl?
module.exports = { seq };
