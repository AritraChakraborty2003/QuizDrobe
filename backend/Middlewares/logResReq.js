import fs from "fs";
function logResReq(filename) {
  return (req, res, next) => {
    const log = `${req.ip}.${Date.now()}: ${req.url} \n`;
    fs.appendFile(filename, log, (err, data) => {
      console.log("Log file updated...");
      next();
    });
  };
}
export { logResReq };
