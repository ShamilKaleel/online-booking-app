const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const bcryptSalt = bcrypt.genSaltSync(10);
require("dotenv").config();

const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userDoc = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    res.json(userDoc).status(200);
  } catch (e) {
    res.status(422).json(e);
  }
};

// const login = async (req, res) => {
//   const { email, password } = req.body;
//   if (!email || !password) {
//     res.status(422).json("email or password missing");
//   }
//   try {
//     const userDoc = await User.findOne({ email });

//     if (!userDoc) {
//       res.status(422).json({ message: "Enter the correct email" });
//     }

//     const passOk = bcrypt.compareSync(password, userDoc.password);

//     if (!passOk) {
//       res.status(422).json("Enter the correct password");
//     }

//     const token = jwt.sign(
//       { email: userDoc.email, id: userDoc._id },
//       process.env.JWT_SECRET,
//       { expiresIn: "24h" }
//     );

//     res.cookie("token", token).json(userDoc).status(200);
//     //res.status(200).json(userDoc);
//   } catch (e) {
//     res.status(422).json(e.message);
//   }
// };

const login = async (req, res) => {
  const { email, password } = req.body;
  const userDoc = await User.findOne({ email });
  if (userDoc) {
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      jwt.sign(
        {
          email: userDoc.email,
          id: userDoc._id,
        },
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json(userDoc);
        }
      );
    } else {
      res.status(422).json("pass not ok");
    }
  } else {
    res.status(422).json("not found");
  }
};

// const profile = (req, res) => {
//   const { token } = req.cookies;
//   if (token) {
//     jwt.verify(token, process.env.JWT_SECRET, {}, async (err, userData) => {
//       if (err) throw err;
//       const { name, email, _id } = await User.findById(userData.id);
//       res.json({ name, email, _id }).status(200);
//     });
//   } else {
//     res.json(null).status(401);
//   }
// };

const profile = async (req, res) => {
  const userId = req.userId;
  try {
    const { name, email, _id } = await User.findById(userId);
    res.json({ name, email, _id }).status(200);
  } catch (e) {
    res.json(null).status(401);
  }
};

const logout = (req, res) => {
  res.clearCookie("token").json(true).status(200);
};
module.exports = { register, login, profile, logout };
