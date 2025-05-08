const EventEmitter = require("events");
class School extends EventEmitter {
  startPeriod() {
    console.log("Period started!");
    setTimeout(() => {
      this.emit("bellring", {
        message: "Bell rang!",
        period: "Bell rang!",
      });
    }, 2000);
  }
}

module.exports = School;
