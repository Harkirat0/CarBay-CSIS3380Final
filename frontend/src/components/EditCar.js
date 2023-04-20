import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UpdateCar = ({}) => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [kilometers, setKilometers] = useState("");
  const [price, setPrice] = useState("");
  const [condition, setCondition] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [color, setColor] = useState("");
  const [location, setLocation] = useState("");
  const [vin, setVin] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [message, setMessage] = useState("");

  const params = useParams();
  const { slug } = params;

  useEffect(() => {
    axios
      .get(`/api/cars/slug/${slug}`)
      .then((res) => {
        const car = res.data;
        setMake(car.make);
        setModel(car.model);
        setYear(car.year);
        setKilometers(car.kilometers);
        setPrice(car.price);
        setCondition(car.condition);
        setFuelType(car.fuel_type);
        setColor(car.color);
        setLocation(car.location);
        setVin(car.vin);
        setImage1(car.image1);
        setImage2(car.image2);
      })
      .catch((err) => console.log(err));
  }, [slug]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedCar = {
      make,
      model,
      year,
      kilometers,
      price,
      condition,
      fuel_type: fuelType,
      color,
      location,
      vin,
      image1,
      image2,
    };
    axios
      .put(`/api/cars/slug/${slug}`, updatedCar)
      .then((res) => {
        setMessage(res.data.message);
        window.location.href = "/";
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mt-5">
      <h1>Update Car</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="make">Make: </label>
          <input
            type="text"
            name="make"
            className="form-control"
            value={make}
            onChange={(e) => setMake(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="model">Model: </label>
          <input
            type="text"
            name="model"
            className="form-control"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="year">Year: </label>
          <input
            type="text"
            name="year"
            className="form-control"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="kilometers">Kilometers: </label>
          <input
            type="text"
            name="kilometers"
            className="form-control"
            value={kilometers}
            onChange={(e) => setKilometers(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price: </label>
          <input
            type="text"
            name="price"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="condition">Condition: </label>
          <input
            type="text"
            name="condition"
            className="form-control"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="fuelType">Fuel Type: </label>
          <input
            type="text"
            name="fuelType"
            className="form-control"
            value={fuelType}
            onChange={(e) => setFuelType(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="color">Color: </label>
          <input
            type="text"
            name="color"
            className="form-control"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location: </label>
          <input
            type="text"
            name="location"
            className="form-control"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="btn btn-primary">
          <button type="submit">Update Car</button>
        </div>
      </form>
    </div>
  );
};
export default UpdateCar;
