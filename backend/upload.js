import multer from 'multer';

const fileFilter = (req, file, cb) => {
    req.originalname = file.originalname;
    if( file.originalname.match(/\.(jpg|png|JPG|PNG|jpeg|JPEG|gif|GIF|WEBP)$/))
        cb(null,true)
    else 
        cb(new Error('invalid file type'))   
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'picture/')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})
export const image = multer({
    storage,
    fileFilter
});


