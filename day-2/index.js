/* Part One */

let horizontal = 0;

let depth = 0;

directions.forEach((direction) => {
  let output = Number(direction.split(/[, ]+/).pop());

  if (direction.includes("forward")) {
    horizontal += output;
  }

  if (direction.includes("up")) {
    depth -= output;
  }

  if (direction.includes("down")) {
    depth += output;
  }
});

const finalPosition = horizontal * depth;
