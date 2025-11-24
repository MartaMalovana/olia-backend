const express = require("express");
const cors = require("cors");
const ordersRouter = require("./routes/api/orders");
const app = express();

app.listen(3001, () => console.log("app is running"));

const allowlist = ['http://www.matolli.com.ua', 'http://matolli.com.ua', 'https://matolli.com.ua'];

const corsOptionsDelegate = function (req, callback) {
    let corsOptions;
    if (allowlist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true, allowedHeaders: "Content-Type", preflightContinue: false }
    } else {
        corsOptions = { origin: false }
    };
    callback(null, corsOptions);
};

app.use(express.json());

app.use("/api/orders", cors(corsOptionsDelegate), ordersRouter);

app.use((req, res) => {
    res.status(404).json({
        message: "Not found, sorry"
    });
});

app.use((err, req, res, next) => {
    const { status = 500, message = "Server error" } = err;
    res.status(status).json({ message });
})

module.exports = app;
