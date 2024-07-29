const express = require('express');
const router = express.Router();
const TextMessage = require('./models/TextMessage'); // Adjust the path as needed

router.post('/v1/business/message', async (req, res) => {
  try {
    const { type, text } = req.body;

    const newTextMessage = new TextMessage({
      type,
      text
    });

    const savedMessage = await newTextMessage.save();
    res.status(201).json(savedMessage);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;












// const https = require('https');

// const API_KEY = process.env.API_KEY;
// const API_SECRET = process.env.API_SECRET;

// const forwardRequest = (path, method, req, res) => {
//   const data = JSON.stringify(req.body);

//   const options = {
//     hostname: 'localhost',
//     port: 3000,
//     path,
//     method,
//     headers: {
//       'Authorization': `Bearer ${API_KEY}`,
//       'x-api-secret': API_SECRET,
//       'Content-Type': 'application/json',
//       'Content-Length': data.length
//     }
//   };

//   const apiReq = https.request(options, (apiRes) => {
//     let responseData = '';

//     apiRes.on('data', (chunk) => {
//       responseData += chunk;
//     });

//     apiRes.on('end', () => {
//       res.status(apiRes.statusCode).json(JSON.parse(responseData));
//     });
//   });

//   apiReq.on('error', (error) => {
//     res.status(500).json({ error: 'Internal Server Error' });
//   });

//   apiReq.write(data);
//   apiReq.end();
// };

// exports.create = (req, res) => {
//   forwardRequest('/v1/business/message', 'POST', req, res);
// };

// exports.findAll = (req, res) => {
//   forwardRequest('/v1/businesses', 'GET', req, res);
// };

// exports.findOne = (req, res) => {
//   forwardRequest(`/v1/business/message/${req.params.id}`, 'GET', req, res);
// };

// exports.update = (req, res) => {
//   forwardRequest(`/v1/business/message/${req.params.id}`, 'PUT', req, res);
// };

// exports.delete = (req, res) => {
//   forwardRequest(`/v1/business/message/${req.params.id}`, 'DELETE', req, res);
// };

// exports.getSlots = (req, res) => {
//   forwardRequest('/v1/business/message/get-slots', 'POST', req, res);
// };

// exports.uploadFile = (req, res) => {
//   forwardRequest('/v1/business/message/file', 'POST', req, res);
// };

// exports.getSlot = (req, res) => {
//   forwardRequest('/v1/business/get-slot', 'POST', req, res);
// };

// exports.createCard = (req, res) => {
//   forwardRequest('/v1/business/card', 'POST', req, res);
// };

// exports.validateOtp = (req, res) => {
//   forwardRequest('/v1/business/self/otp/validate', 'POST', req, res);
// };

// exports.register = (req, res) => {
//   forwardRequest('/v1/business/self/register', 'POST', req, res);
// };

// exports.deregister = (req, res) => {
//   forwardRequest('/v1/business/self/deregister', 'POST', req, res);
// };
