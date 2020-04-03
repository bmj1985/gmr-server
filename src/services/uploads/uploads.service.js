// Initializes the `uploads` service on path `/uploads`
const { Uploads } = require("./uploads.class")
const hooks = require("./uploads.hooks")
const AWS = require("aws-sdk")
const BlobService = require("feathers-blob")
const multer = require("multer")
const multerS3 = require("multer-s3")
const { format } = require("date-fns")

module.exports = function(app) {
  const paginate = app.get("paginate")
  const { secretAccessKey, accessKeyId, bucketRegion, bucketName } = app.get(
    "s3"
  )
  const options = {
    paginate,
  }

  const s3 = new AWS.S3({
    apiVersion: "2012-10-17",
    region: bucketRegion,
    credentials: {
      accessKeyId: accessKeyId,
      secretAccessKey: secretAccessKey,
    },
  })

  const upload = multer({
    storage: multerS3({
      s3,
      bucket: bucketName,
      key: (request, file, next) => {
        const fileExtension = file.originalname.split(".").pop()
        const fileNameText = file.originalname.split(".").shift()
        console.log(fileExtension)
        next(
          null,
          `product-images/${fileNameText}_${format(
            Date.now(),
            "yyyy_MM_dd_hh_mm_ss"
          )}.${fileExtension}`
        )
      },
    }),
  })

  // Initialize our service with any options it requires
  app.use(
    "/uploads",
    upload.single("file"),
    (req, res, next) => {
      req.feathers.file = req.file
      res.json({ data: req.file.location })
      next()
    },
    BlobService({ Model: upload })
  )

  const blobService = app.service("uploads")

  blobService.hooks(hooks)

  // blobService
  //   .create(upload)
  //   .then(function(result) {
  //     console.log("Stored blob with id", result.id)
  //   })
  //   .catch(err => {
  //     console.error(err)
  //   })
}
