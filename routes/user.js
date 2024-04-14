const express = require('express');
const router = express.Router();
const { body , validationResult } = require('express-validator');
const { saveUser } = require('../db_operations');

//API endpoint to save the USerds Credentials
router.post('/save',[
    body('username','The UserName Should Not be Greater Than 15 words').isLength({max:15}),
    body('email','Please Enter A Valid Email ID').isEmail(),
    body('password','The Password should be greater than 10 characters').isString().isLength({max:20,min:10}),
],async (req, res) => {
const errors = validationResult(req);
if(!errors.isEmpty())
    return res.status(400).json({error:errors})
const { email , username ,password ,uniqueID} = req.body;
try {
    await saveUser(email , username , password , uniqueID);
    console.log("Data is saved");
    res.json({ message: 'User data saved successfully.'});
} catch (error) {
    res.status(500).json({ message: error });
}
});

module.exports = router;
