const express = require("express");
const ctrl = require("../../controllers/orders");
const validateBody = require("../../middlewares/validateBody");
const schemas = require("../../schemas/orders");

const router = express.Router();
router.get("/", (req, res, next) => {
    res.status(200).json({
        message: "app is ok"
    })
})
router.post("/", validateBody(schemas.addSchema), ctrl.addNewOrder);

module.exports = router;