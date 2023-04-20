import express from "express";
import Car from "../models/carModel.js";

const carRouter = express.Router();

carRouter.get("/", async (req, res) => {
  const cars = await Car.find();
  res.send({ cars });
});

carRouter.get("/slug/:slug", async (req, res) => {
  const car = await Car.findOne({ slug: req.params.slug });
  if (car) {
    res.send(car);
  } else {
    res.send(404).send({ message: "Car Not Found" });
  }
});

carRouter.get("/:id", async (req, res) => {
  const car = await Car.findById(req.params.slug);
  if (car) {
    res.send(car);
  } else {
    res.sendStatus(404).send({ message: "Car Not Found" });
  }
});

carRouter.get("/search/:key", async (req, res) => {
  let result = await Car.find({
    $or: [
      {
        model: { $regex: req.params.key },
      },
      {
        make: { $regex: req.params.key },
      },
    ],
  });
  res.send(result);
});

carRouter.post("/add", async (req, res) => {
  try {
    const car = await Car.create(req.body);
    res.json("Car added!");
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

carRouter.put("/slug/:slug", async (req, res) => {
  try {
    const car = await Car.findOneAndUpdate(
      { slug: req.params.slug },
      req.body,
      {
        new: true,
      }
    );
    if (car) {
      res.json("Car updated");
    } else {
      res.status(404).json({ message: "Car not found" });
    }
  } catch (err) {
    res.status(400).json({ message: "Error: " + err });
  }
});

carRouter.delete("/slug/:slug", async (req, res) => {
  const car = await Car.findOneAndDelete({ slug: req.params.slug });
  try {
    res.json("Car deleted!");
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});
export default carRouter;
