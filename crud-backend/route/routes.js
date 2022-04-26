const express =require('express')
const router = express.Router()

const Item = require('../model/shoppingItem')

router.get('/item',(req,res)=>{
    Item.find((err,items)=>{
        if(err){
            res.json(err)
        }
        else{
            res.json(items)
        }
    })
})

router.post('/item',(req,res)=>{
    let newShoppingItem = new Item({
        itemName : req.body.itemName,
        itemQuantity : req.body.itemQuantity,
        itemBought : req.body.itemBought
    })
    newShoppingItem.save((err,item)=>{
        if(err){
            res.json(err)
        }
        else{
            res.json('Item has been added successfully')
        }
    })
})
router.put('/item/:id',(req,res)=>{
    Item.findOneAndUpdate({_id : req.params.id},
    {$set : 
        {
        itemName : req.body.itemName,
        itemQuantity : req.body.itemQuantity,
        itemBought : req.body.itemBought
        }
    },(err,result)=>{
        if(err){
            res.json(err)
        }
        else{
            res.json(result)
        }
    })
})
router.delete('/item/:id',(req,res)=>{
    Item.remove({_id: req.params.id},(err,result)=>{
        if(err){
            res.json(err)
        }else{
            res.json(result)
        }
    })
})

module.exports = router