const Catagory = require("../models/catagory.model");

const createCatagory = async (req, res) => {
  if (req.body) {
    const catagory = new Catagory(req.body);
    await catagory
      .save()
      .then((data) => {
        res.status(200).send({ data: data });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }
};

const getAllCatagory = async (req, res) => {
  await Catagory.find({})
    .populate("rooms", "code amount wing pax")
    .then((data) => {
      res.status(200).send({ data: data });
    })
    .catch((error) => {
      res.status(500).send({ error: error.message });
    });
};

const getRoomsForCatagory = async (req, res) => {
  if (req.params && req.params.id) {
    await Catagory.findById(req.params.id)
      .populate("rooms", "code amount wing pax")
      .then((data) => {
        res.status(200).send({ rooms: data.rooms });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }
};

const deleteCatagory = async (req, res) => {
  if (req.params && req.params.id) {
    await Catagory.findByIdAndDelete(req.params.id)
      .then((data) => {
        res.status(200).send({ rooms: data.rooms });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }
};

module.exports = {
  createCatagory,
  getAllCatagory,
  getRoomsForCatagory,
  deleteCatagory,
};
