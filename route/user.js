

const express = require('express');
const router = express.Router();

const{
    //functions
   user
       
}= require('../control/user');


router.get('/vieww', user);

module.exports=router
