const { Router } = require("express");

const { get,create,deleteReq,update } = require("../controllers/Controller");
const router = Router();

router.get("/get", get);
router.post("/save", create);
router.post("/delete", deleteReq);
router.post("/update", update);

module.exports = router;