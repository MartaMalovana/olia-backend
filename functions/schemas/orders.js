const Joi = require("joi");

const addSchema = Joi.object({
    name: Joi.string().required(),
    lastName: Joi.string().required(),
    phone: Joi.string().required(),
    post: Joi.string().required(),
    city: Joi.string().required(),
    warehouse: Joi.string().required(),
    comment: Joi.string(),
    connect: Joi.array().items(Joi.string()),
    basket: Joi.array().items(Joi.object({
        collection: Joi.string().required(),
        productName: Joi.string().required(),
        size: Joi.string().required(),
        price: Joi.string().required(),
        amount: Joi.number().required()
    })).required(),
    totalPrice: Joi.number().required(),
})

module.exports = {
    addSchema,
}
