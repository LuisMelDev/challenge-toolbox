const {Router} = require("express")
const fileController = require("../controllers/files")

const router = Router();


router.get("/data", fileController.getData);
router.get("/list", fileController.getList);

module.exports = router