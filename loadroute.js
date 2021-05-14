const router = require("express").Router()
const datamodel = require("./datamodel")

 router.post("/",async(req,res)=> {
     const{url,channel,desc,song,likes,shares,messages}= req.body;


     try {
         tiktok = new datamodel({
            url,
            channel,
            desc,
            song,
            likes,
            shares,
            messages

         })
         const  newtiktok = await tiktok.save();
         res.json(newtiktok);
         
     } catch (error) {

        console.log(error);
        res.status(400).json({
            message:"error happend"
        })
         
     }
 })


 router.get('/',async(req,res)=> {
    try {
       const post = await datamodel.find({});
       res.json(post)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:"error happened"
        })
        
    }
 })
 module.exports = router;