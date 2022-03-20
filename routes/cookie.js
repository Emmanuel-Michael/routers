const express = require('express');
var router = express.Router();
const cookieParser = require('cookie-parser');
const { request } = require('express');
//cookie secret
router.use(cookieParser('emmanuel'));// the string is our cookie signature
// Setting and esending cookie 

router.get('/setname', (req, res) =>{
res.cookie('name', 'Emmanuel Michael') // cookie sent
//signing our cookies 
res.cookie('printer', 'Ramsey Owino', {httpOnly: true, maxAge: 1000* 60 * 60 * 24 * 7,})
res.send('I sent you a cookie')
})

//cookie storage
router.get('/greet', (req, res) => {
    const {name = 'Emmanuel'} = req.cookies;
    // console.log(request.cookies)
    res.send(`My name is ${name}`)
});

router.get('/signed',(req, res)=>{
    res.cookie('fruit', 'Watermelon', {signed: true})
    res.cookie('game', 'soccer', {signed: true})
    console.log(req.cookies)
    res.send(req.cookies)
});
//Cookie revision
router.get('/verify', (req, res) => {
    console.log(req.cookies)
    console.log(req.signedCookies)
    res.send(req.signedCookies)
});



module.exports = router;