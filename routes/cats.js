const express = require('express');
var router = express.Router();

router.get('/', (req,res) =>{
res.send('Give me all the cats')
})

router.get('/:id', (req,res) =>{
    res.send('Give me one the cats')
    })
    
router.post('/', (req,res) =>{
    res.send('Create me one the cats')
    })
    router.patch('/:id/edit', (req,res) =>{
        res.send('Update for me a cat')
        })
    
        router.delete('/:id', (req,res) =>{
            res.send('Delete me a cat')
            })
        
module.exports= router;