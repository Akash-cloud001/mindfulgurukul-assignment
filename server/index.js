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
app.get('/', (req, res)=>{
    console.log(req);
    res.status(201).send("welcome to backend");
})
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
        return res.status(201);
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