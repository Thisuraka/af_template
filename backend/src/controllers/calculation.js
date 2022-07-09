process.on("message", (msg) => {
  "use strict";
  const array = msg.num.split(",");
  process.send({ value: calculation(array), event: msg.event });
});

//process data and calculate total amount
function calculation(array) {
  let totalAmount = 0;
  if (array.length > 0) {
    array.map((room) => {
      totalAmount += parseFloat(room);
    });
  }
  return totalAmount;
}
