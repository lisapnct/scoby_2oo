const express = require("express");
const router = express.Router();
const Item = require("../models/Item");

router.get("/", (req, res, next) => {
  Item.find()
    .then((dbRes) => {
      res.status(200).json(dbRes);
    })
    .catch((dbErr) => {
      console.log(dbErr);
      res.status(500).json(dbErr);
    });
});

router.post("/", (req, res, next) => {
  console.log(req.body);
  Item.create(req.body)
    .then((itemDoc) => {
      console.log(itemDoc);
      res.status(201).json(itemDoc);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

router.get("/:id", (req, res, next) => {
  Item.findById(req.params.id)
    .then((dbRes) => {
      res.status(200).json(dbRes);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.patch("/:id", (req, res, next) => {
  const updateItem = req.body;
  Item.findByIdAndUpdate(req.params.id, updateItem, {
    new: true,
  })
    .then((itemDoc) => res.status(200).json(itemDoc))
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res, next) => {
  Item.findByIdAndRemove(req.params.id)
    .then((deletedDoc) => {
      res.sendStatus(204);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
