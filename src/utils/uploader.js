const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const fileFilter = function (req, file, cb) {
   if (file.mimetype === "image/jpeg" || file.mimetype === "image/png" || file.mimetype === "image/jpg" ) {
            cb(null, true);
        } else {
            cb("Invalid type file", false);
        }
}


const upload = multer({ storage, fileFilter}).single('image');

module.exports = upload
