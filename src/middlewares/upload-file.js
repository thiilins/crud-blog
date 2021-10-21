const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_upload_${path.extname(file.originalname)}`);
  },
});
const uploadFile = multer({ storage });

//uploadFile.array("img")
module.exports = uploadFile;
