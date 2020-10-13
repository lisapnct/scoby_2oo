const express = require("express");
const { update } = require("../models/User");
const router = express.Router();
const User = require("../models/User");

router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.patch("/me/:id", (req, res, next) => {
  console.log(req.body);
  console.log(req.params.id);
  const updateValue = req.body.userPhone;
  console.log(updateValue);
  User.findByIdAndUpdate(
    req.params.id,
    { phone: updateValue },
    { new: true }
  )
    .then((userDoc) => res.status(200).json(userDoc))
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
