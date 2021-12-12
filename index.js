let largerMeasurement = 0;

depths.forEach((depth, index) => {
  if (depth - depths[index - 1] > 0) {
    largerMeasurement++;
  }
});
