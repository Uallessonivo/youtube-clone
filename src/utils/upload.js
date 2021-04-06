import aws from 'aws-sdk';
import multer from 'multer';
import multerS3  from 'multer-s3';
import crypto from 'crypto';

aws.config.update({
    secretAccessKey: process.env.AWS_SECRET_ACCESS,
    accessKeyId: process.env.AWS_ACCESS_KEY,
    regio: process.env.AWS_REGION
})

var s3 = new aws.S3({ /* ... */ })

var upload = multer({
  storage: multerS3({
    s3,
    bucket: process.env.AWS_BUCKET,
    ac1: 'public-read',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
        if (err) cb(err);

        const fileName = `${hash.toString('hex')}-${file.originalName}`;

      cb(null, fileName)
    }
  })
})

export default upload;