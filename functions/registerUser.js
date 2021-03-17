const User = require("../models/User");
const nodemailer = require("nodemailer");

module.exports = async (req, res) => {
  try {
    let newUser = new User(req.body);
    const savedUser = await newUser.save();
    if (savedUser) {
      await mailer(
        `${savedUser.email}`,
        "Registration Successful",
        `Heyy ${savedUser.name}, Welcome to StackFusion`
      );
    }
    res.status(200).json(savedUser);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server error");
  }
};

function mailer(recepient, subject, body) {
  var smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "akash20nith@gmail.com",
      pass: process.env.GMAILPW,
    },
  });

  var mailOptions = {
    to: recepient,
    from: "dummy@gmail.com",
    subject: subject,
    text: body,
  };
  return smtpTransport.sendMail(mailOptions, function (err) {
    if (err) {
      console.log(err);
    }
  });
}
