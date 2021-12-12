/* Part One */
let largerMeasurement = 0;

const calcLargerMeasurement = (array) => {
  array.forEach((item, index) => {
    if (item - array[index - 1] > 0) {
      largerMeasurement++;
    }
  });
};

calcLargerMeasurement(depths);

/* Part Two */
let largerThreeMeasurement = 0;

const threeMeasurementArray = [];

depths.forEach((depth, index) => {
  const itemLength = 3;

  let sum = 0;

  for (i = index; i < itemLength + index; i++) {
    sum += depths[i];
  }
  threeMeasurementArray.push(sum);
});

calcLargerMeasurement(threeMeasurementArray);
