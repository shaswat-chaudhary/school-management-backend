const multer = require("multer");

const storage = multer.diskStorage({
    destination: "schoolImages",
    filename: (req, file, cd) => {
        cd(null, Date.now() + file.originalname);
    }
});

module.exports = multer({storage})