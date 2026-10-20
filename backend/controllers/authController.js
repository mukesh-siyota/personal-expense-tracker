import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt  from "bcryptjs";

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || "secret_key_123", {
    expiresIn: "30d",
  });
};

const authController = {
  async register(req, res) {
    const { name, email, password } = req.body;
    try {
      const userExists = await User.findOne({ email });
      if (userExists)
        return res.status(400).json({ message: "user already exists." });
      const user = await User.create({ name, email, password });
      return res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  async login(req, res) {
    const {email, password} = req.body
    const user = await User.findOne({email})
    try {
        if (user && (await bcrypt.compare(password, user.password))) {
return res.status(201).json({
    _id : user._id,
    name : user.name,
    email : user.email,
    token : generateToken(user._id),
    message : "Login Successful!"
})
        } else {
            return res.status(401).json({
                message : 'Invalid email or password'
            })
        }
    } catch (error) {
        return res.status(500).json({
            message : 'server error', error : error.message
        })
    }
  }
};

export default authController
