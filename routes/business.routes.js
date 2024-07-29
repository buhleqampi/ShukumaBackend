const business = require('../controllers/business.controller.js');
const router = require('express').Router();


router.post('/message', business.create);

router.get('/message', business.findAll);

router.get('/message/:id', business.findOne);

router.put('/message/:id', business.update);

router.delete('/message/:id', business.delete);

router.post('/message/get-slots', business.getSlots);

router.post('/message/file', business.uploadFile);

router.post('/get-slot', business.getSlot);

router.post('/card', business.createCard);

router.post('/self/otp/validate', business.validateOtp);

router.post('/self/register', business.register);

router.post('/self/deregister', business.deregister);

router.get('/businesses', business.findAll);

module.exports = router;


