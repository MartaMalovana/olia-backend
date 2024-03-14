const express = require("express");
const ctrl = require("../../controllers/orders");
const validateBody = require("../../middlewares/validateBody");
const schemas = require("../../schemas/orders");

const router = express.Router();
router.post("/", validateBody(schemas.addSchema), ctrl.addNewOrder);

module.exports = router;