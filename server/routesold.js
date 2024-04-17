const express = require("express");

const router = express.Router();

// log cognito wrapper
const cognito = require("./cognito.js");

// Recive user signe up
router.post("/signup", async (req, res) => {
  const { body } = req;

  let { email, user, password } = body;
  try {
    let result = await cognito.signUp(user, email, password);

    let response = {
      username: result.user.name,
      id: result.userSub,
      success: true,
    };
    res.status(200).json({ result: response });
  } catch (error) {
    res.status(400).json({ error: err });
  }
});

module.exports = router;
