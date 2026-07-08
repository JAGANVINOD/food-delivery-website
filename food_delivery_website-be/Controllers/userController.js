import userModel from "../Models/userModel.js";
import jwt from "jsonwebtoken"
import bycrpt from "bcrypt"
import validator from "validator"

//login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: "User doesn't exist" })
        }
        const isMatch = await bycrpt.compare(password, user.password);
        if (!isMatch) {
            return res.json({ success: false, message: "Invalid Credentials" })
        }
        const token = createToken(user._id);
        res.json({ success: true, token , name: user.name  })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })

    }

}

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

//register user
const registerUser = async (req, res) => {
    const { name, password, email } = req.body;

    try {
        //checking is user already exist
        const exists = await userModel.findOne({ email })
        if (exists) {
            return res.json({ success: false, message: "User Already Exist" })
        }

        //validating email format & strong password
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" })
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" })
        }

        //hashing user password
        const salt = await bycrpt.genSalt(10)
        const hashedPassword = await bycrpt.hash(password, salt);

        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword
        })
        const user = await newUser.save();
        const token = createToken(user._id)
        res.json({ success: true, token });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })

    }
}

export { loginUser, registerUser }