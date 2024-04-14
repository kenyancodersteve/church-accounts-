

const express = require('express');
const router = express.Router();

const{

    //functions
    sign,
    login,
    logout
    
}= require('../control/fireauth');


const app = express();

// Middleware
app.use(express.json());


router.post('/sign', sign);
router.post('/login', login);
router.post('/logout', logout);


module.exports=router
