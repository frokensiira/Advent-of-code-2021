let horizontal = 0;

let depth = 0;

let aim = 0;

directions.forEach((direction) => {
  let output = Number(direction.split(/[, ]+/).pop());

  if (direction.includes("forward")) {
    horizontal += output;
    depth += aim * output;
  }

  if (direction.includes("up")) {
    aim -= output;
  }

  if (direction.includes("down")) {
    aim += output;
  }
});

const finalPosition = horizontal * depth;
