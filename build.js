const fs = require("fs");
const {weekDays} = require("./index");

fs.writeFileSync(__dirname + "/i18n-week-days/index.json", JSON.stringify(weekDays, null, 2))


