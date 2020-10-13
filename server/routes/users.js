const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.patch("/me", (req, res, next) => {
  const updateUser = req.body;
  Item.findByIdAndUpdate(req.params.id, updateUser, {
    new: true,
  })
    .then((userDoc) => res.status(200).json(userDoc))
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
