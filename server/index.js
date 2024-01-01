import express from 'express';
import mongoose from 'mongoose';
import { PORT, MONGODB_URI } from './config.js';
import { User } from './models/userModel.js';
import cors from 'cors';
import jwt from 'jsonwebtoken';
const app = express();

// middleware
app.use(cors());
app.use(express.json());


mongoose
    .connect(MONGODB_URI)
    .then(()=>{
        console.log("connected to Database");
        app.listen(PORT, ()=>{
            console.log(`App is listening on ${PORT}`)
        })
    })
    .catch((err)=>{
        console.log(err);
    })

// Route

app.post('/api/signup', async (req,res)=>{
    try {
        if(!req.body.name ||
           !req.body.email ||
           !req.body.password ||
           !req.body.phone ||
           !req.body.gender ||
           !req.body.city ||
           !req.body.state     
        ){
            return res.status(400).send({
                message: "Send all required fields"
            });
        }
        // res.json({status:'ok'});
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            phone: req.body.phone,
            gender: req.body.gender,
            city: req.body.city,
            state: req.body.state,
            hearAboutUs: req.body.hearAboutUs
        });
        return res.json({status:'ok'})
    } catch (error) {
        res.status(500).send({message:error.message});
    }
});

app.post('/api/signin', async(req, res)=>{
    try {
        const user  = await User.findOne({
            email : req.body.email,
            password : req.body.password   
        });
        if(user){

            const token = jwt.sign(
                {
                    email : user.email
                },
                'alpha@123'
                )
            return res.json({status:'ok', user:token})
        }else{
            return res.json({status: 'error', user:false})
        }
    } catch (error) {
        
    }
})

app.get('/api/data', async(req,res)=>{
    const token = req.headers['x-access-token'];
    try {
        const decoded = jwt.verify(token, 'alpha@123'); // it's async it throws error if somthing goes south
        const email = decoded.email
        const user = await User.findOne({email:email})
        console.log("get data ",user.data);
        return res.json({status:'ok', data: user.data})
    } catch (error) {
        return res.json({status: 'error', error:'invalid token'})
    }
})

app.post('/api/data', async(req,res)=>{
    const token = req.headers['x-access-token'];
    try {
        const decoded = jwt.verify(token, 'alpha@123'); // it's async it throws error if somthing goes south
        const email = decoded.email
        const user = await User.findOne({email});
        if(user){
            user.data.push(req.body.data);
            await user.save();
        }else{
            return res.json({status:'error', error:'User Not Found'})
        }
        return res.json({status:'ok'})
    } catch (error) {
        return res.json({status: 'error', error:'invalid token'})
    }
})


app.post('/api/user/update',async(req,res)=>{
    const token = req.headers['x-access-token'];
    try {
            const decoded = jwt.verify(token, 'alpha@123'); // it's async it throws error if somthing goes south
            const email = decoded.email
            const user = await User.findOne({email});
            const _id = user._id;
            const result = await User.findOneAndUpdate({_id:_id}, req.body, {new:true});
            console.log(result);
            return res.json({result});
            }
     catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
})