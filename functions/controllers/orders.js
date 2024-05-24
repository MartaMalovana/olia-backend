const sendEmail = require("../helpers/sendEmail");
const textEmailNewOrder = require("../helpers/textEmailNewOrder");

const addNewOrder = async (req, res, next) => {
    try {
        const data = textEmailNewOrder(req.body);
        await sendEmail("Нове замовлення", data);
        res.status(201).json({
            body: JSON.stringify(req.body)
        })
    } catch (error) {
        console.log(error);
        next(error);
    };
};

module.exports = {
    addNewOrder
};