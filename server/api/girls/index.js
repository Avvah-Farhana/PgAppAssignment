'use strict';

var express = require ('express');
var controller = require ('./girlsDetails.controller');

var router = express.Router();

router.post ('/', controller.saveGirlsDetails);
router.get ('/list',controller.ListOfGirls);
// router.get ('/data/:id',controller.CompanyView);
// router.delete('/delete/:id',controller.deleteCompany);
// router.put ('/update/:id',controller.UpdateCompanyDetails);


module.exports = router;