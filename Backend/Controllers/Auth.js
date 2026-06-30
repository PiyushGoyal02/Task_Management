const AuthModel = require('../Models/AuthModel')
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
require('dotenv').config();

// Signin 
exports.Signin = async (req, res) => {
  try {

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(404).json(
        {
          success: false,
          message: 'All filed required.'
        }
      )
    }

    const userFind = await AuthModel.findOne({ email: email });

    if (!userFind) {
      return res.status(404).json(
        {
          success: false,
          message: 'User is not Available.'
        }
      )
    }

    const isPasswordCorrect = await bcrypt.compare(password, userFind.password);

    if (!isPasswordCorrect) {
      return res.status(401).json(
        {
          success: false,
          message: 'Password is un correct.'
        }
      )
    }

    // Updated JWT payload
    const JWTPayLoad = {
      email: userFind.email,
      id: userFind._id,
      // accountType: userFind.accountType
    };

    let token = JWT.sign(JWTPayLoad, process.env.JWT_SECRET, {
      expiresIn: "2h"
    });

    const CookieOptions = {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      httpOnly: true
    };

    // Log the user ID
    console.log(`User logged in: ${userFind._id}`);

    // Cookie pass and return necessary user info
    res.cookie("token", token, CookieOptions).status(200).json({
      success: true,
      message: "Login Successfully",
      token,
      userId: userFind._id,
      email: userFind.email,
      // accountType: userFind.accountType,
    });

  } catch (error) {
    console.log(error.message)
    return res.status(404).json(
      {
        success: false,
        message: 'We cannot find this User'
      }
    )
  }
}

exports.Signup = async (req, res) => {
  try {

    const { firstname, lastname, email, password, confirmpassword } = req.body;

    // Check All Fields
    if ( !firstname || !lastname || !email || !password || !confirmpassword ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields."
      });
    }

    // Check Password Match
    if (password !== confirmpassword) {
      return res.status(400).json({
        success: false,
        message: "Password and Confirm Password do not match."
      });
    }

    // Check Existing User
    const existingUser = await AuthModel.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists."
      });
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create New User
    const newUser = await AuthModel.create({
      firstname,
      lastname,
      email,
      password: hashedPassword
    });

    // Success Response
    return res.status(201).json({
      success: true,
      message: "User registered successfully.",
      data: newUser
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error."
    });
  }
};