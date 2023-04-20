import React, { useState } from "react";
import axios from "axios";

const AddCar = () => {
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
  const [slug,setSlug]=useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const car = {
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
        slug,
        image1,
        image2,
      };
      
      const res = await axios.post("/api/cars/add", car);
      setMessage(res.data);
      setMake("");
      setModel("");
      setYear("");
      setKilometers("");
      setPrice("");
      setCondition("");
      setFuelType("");
      setColor("");
      setLocation("");
      setVin("");
      setSlug("");
      setImage1("");
      setImage2("");
      window.location.href = '/';
    } catch (err) {
      setMessage(err.response.data);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "make":
        setMake(value);
        break;
      case "model":
        setModel(value);
        break;
      case "year":
        setYear(value);
        break;
      case "kilometers":
        setKilometers(value);
        break;
      case "price":
        setPrice(value);
        break;
      case "condition":
        setCondition(value);
        break;
      case "fuel_type":
        setFuelType(value);
        break;
      case "color":
        setColor(value);
        break;
      case "location":
        setLocation(value);
        break;
      case "image1":
        setImage1(value);
        break;
      case "image2":
        setImage2(value);
        break;
      case "VIN":
        setVin(value);
        break;
      case "slug":
        setSlug(value);
        break;
      default:
        break;
    }
  };
  
  return (
    <div className="container mt-5">
      <h2>Add a new car</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Make:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter make"
            name="make"
            value={make}
            onChange={handleChange}
            required
          />
        </div>
  
        <div className="form-group">
          <label>Model:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter model"
            name="model"
            value={model}
            onChange={handleChange}
            required
          />
        </div>
  
        <div className="form-group">
          <label>Year:</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter year"
            name="year"
            value={year}
            onChange={handleChange}
            required
          />
        </div>
  
        <div className="form-group">
          <label>Kilometers:</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter kilometers"
            name="kilometers"
            value={kilometers}
            onChange={handleChange}
            required
          />
        </div>
  
        <div className="form-group">
          <label>Price:</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter price"
            name="price"
            value={price}
            onChange={handleChange}
            required
          />
        </div>
  
        <div className="form-group">
          <label>Condition:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter condition"
            name="condition"
            value={condition}
            onChange={handleChange}
            required
          />
        </div>
  
        <div className="form-group">
          <label>Fuel Type:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter fuel type"
            name="fuel_type"
            value={fuelType}
            onChange={handleChange}
            required
          />
        </div>
  
        <div className="form-group">
          <label>Color:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter color"
            name="color"
            value={color}
            onChange={handleChange}
            required
          />
        </div>
  
        <div className="form-group">
          <label>Location:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter location"
            name="location"
            value={location}
            onChange={handleChange}
            required
          />
        </div>
  
        <div className="form-group">
          <label>Image 1:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter image 1"
            name="image1"
            value={image1}
            onChange={handleChange}
            required
          />
        </div>
  
        <div className="form-group">
          <label>Image 2:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter image 2"
            name="image2"
            value={image2}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>VIN:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter VIN"
            name="VIN"
            value={vin}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Slug:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Slug"
            name="slug"
            value={slug}
            onChange={handleChange}
            required
          />
        </div>
        <div className="btn btn-primary">
                <input type="submit" value="Create Car" className="submit" />
        </div>
        </form>
        </div>
  );
}
export default AddCar;