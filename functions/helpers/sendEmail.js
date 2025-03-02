require('dotenv').config();

const { BREVO_APIKEY } = process.env;

const sendEmail = (subject, text) => {
  const SibApiV3Sdk = require('@getbrevo/brevo');

  let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

  let apiKey = apiInstance.authentications['apiKey'];
  apiKey.apiKey = BREVO_APIKEY;

  let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

  sendSmtpEmail.subject = "НОВЕ ЗАМОВЛЕННЯ";
  sendSmtpEmail.htmlContent = text;
  sendSmtpEmail.sender = { "name": "Matolli Website", "email": "marta.malovana@gmail.com" };
  sendSmtpEmail.to = [{ "email": "matolli_oil@outlook.com", "name": "Matolli admin" }];
  sendSmtpEmail.headers = { "Order": "1" };

  apiInstance.sendTransacEmail(sendSmtpEmail).then(function (data) {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));

  }, function (error) {
    console.error(error);
  });

};

module.exports = sendEmail;
