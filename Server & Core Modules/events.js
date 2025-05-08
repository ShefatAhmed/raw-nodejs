const School = require("./school");
const school = new School();
school.on("bellring", ({ message, period }) => {
  console.log(`The ${message} is ringing for ${period}`);
});
school.startPeriod();
