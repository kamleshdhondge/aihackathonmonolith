

import express from "express";
import multer from 'multer';
import fs from 'fs/promises';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/') // Set the destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname) // Use the original file name for the uploaded file
  }
});




router.route("/upload").post(upload.single('file'), async (req, res, next) => {
  const file = req.file; // Access the uploaded file details from the req object
  if (!file) {
    const error = new Error('Please upload a file');
    error.status = 400;
    return next(error);
  }
  // Save the uploaded file to the server
  fs.renameSync(file.path, 'uploads/' + file.originalname);
  res.send({message: "success"}); // Return the uploaded file details in the response

  });


export default router;
