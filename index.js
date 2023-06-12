const dateaftedays = require("date-fns/addDays");

const futuredaysfunc = (days) => {
  const d = dateaftedays(new Date(2020, 07, 22), days);

  return `${d.getDate()}-${d.getMonth()}-${d.getFullYear()}`;
};
module.exports = futuredaysfunc;
