const Router = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs")
const {check, validationResult} = require("express-validator");
const jwt = require("jsonwebtoken");
const config = require("config");
const router = new Router();
const authMiddleware = require('../middleware/auth.middleware')


router.post("/registration", 
    [
        check('email', "Uncorrect email").isEmail(),
        check('password', "Uncorrect password").isLength({min: 3, max: 12})
    ],
    async (req, res) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()) return res.status(400).json({massage: "Uncorrect request", errors});

        const {email, password} = req.body;

        const candidate = await User.findOne({email})

        if(candidate) return res.status(400).json({massage: `User with email ${email} already exist`});
        
        const hashPasswaord = await bcrypt.hash(password, 8); 
        const user = new User({email, password: hashPasswaord});
        await user.save();
        return res.json({massage: "User was created"});
    } catch (e) {
        console.log(e);
        res.send({massage: "Server error"})
    }
})

router.post("/login", async (req, res) => {
    try {
        const {email, password} = req.body;

        const user = await User.findOne({email})

        if(!user) return res.status(400).json({massage: "User not found"});

        const isPassValid = bcrypt.compareSync(password, user.password);
        if(!isPassValid) return res.status(400).json({massage: "Password uncorrect"});
        const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn: "1h"});
        return res.json({
            token, 
            user: {
                id: user.id,
                email: user.email,
                diskSpace: user.diskSpace,
                usedSpace: user.usedSpace,
                avatar: user.avatar
            }
        })    
    } catch (e) {
        console.log(e);
        res.send({massage: "Server error"})
    }
})

router.get("/auth", authMiddleware,
    async (req, res) => {
    try {
        const user = await User.findOne({_id: req.user.id})
        const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn: "1h"});
        return res.json({
            token,
            user: {
                id: user.id,
                email: user.email,
                diskSpace: user.diskSpace,
                usedSpace: user.usedSpace,
                avatar: user.avatar
            }
        })

    } catch (e) {
        console.log(e);
        res.send({massage: "Server error"})
    }
})

module.exports = router;