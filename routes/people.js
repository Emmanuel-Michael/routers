const express = require('express')
const router = express.Router();

router.use((req, res, next) =>{
    if(req.query.isAdmin){
        next()
        }
    res.send('You are not admin')
    })

router.get('/',(req, res) =>{
    res.send('All people')
})

router.get('/:',(req, res) =>{
    res.send('One person')
})



router.post('/:id/edit',(req, res) =>{
    res.send('Create me one pesron')
})
router.delete('/:id',(req, res) =>{
    res.send('Update me one person')
})







module.exports = router