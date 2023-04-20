import { useParams } from "react-router-dom";
import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, car: action.payload, loading: false };
    case "FETCH_FAILED":
      return { ...state, loading: false, error: action.payload };
    case "DELETE_CAR":
      return { ...state, car: null };
    default:
      return state;
  }
};

function CarScreen() {
  const params = useParams();
  const { slug } = params;

  const [{ loading, error, car }, dispatch] = useReducer(reducer, {
    car: [],
    loading: true,
    error: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });

      try {
        const result = await axios.get(`/api/cars/slug/${slug}`);
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAILED", payload: err.message });
      }
    };
    fetchData();
  }, [slug]);
  const handleDelete = async () => {
    try {
      if (!car) {
        return console.log("Car object is null");
      }
      await axios.delete(`/api/cars/slug/${car.slug}`);
      dispatch({ type: "DELETE_CAR" });
      window.location.href = "/";
    } catch (err) {
      console.log(err);
    }
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }

    setIsLoading(false);
  }, []);

  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div className="font-rubik">
      <Helmet>
        <title>{car.make + " " + car.model + " " + car.year}</title>
      </Helmet>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="carousel carousel-center max-w-md max-h-96 bg-neutral rounded-box">
              <div className="carousel-item">
                <img
                  src={car.image1}
                  className="rounded-box"
                  alt={car.image1}
                />
              </div>
              <div className="carousel-item">
                <img
                  src={car.image2}
                  className="rounded-box"
                  alt={car.image2}
                />
              </div>
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-black tracking-widest">
                {car.make}
              </h2>
              <h1 className="text-black text-3xl title-font font-medium mb-1">
                {car.model + " " + car.year}
              </h1>

              <p className="leading-relaxed text-black mt-10 mb-10 list-none">
                <li>Vin: {car.vin}</li>
                <li>Kilometers: {car.kilometers}</li>
                <li>Condition: {car.condition}</li>
                <li>Fuel Type: {car.fuel_type}</li>
                <li>Color: {car.color}</li>
                <li>Location: {car.location}</li>
              </p>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-black font-rubik">
                  {"$" + car.price}
                </span>
                <button
                  className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded"
                  onClick={() => {
                    const subject = `I am interested in buying ${car.make} ${car.model} ${car.year}`;
                    const body = `Hello, I am interested in buying the following car: \n\nMake: ${car.make} \nModel: ${car.model} \nYear: ${car.year} \nVin: ${car.vin} \nKilometers: ${car.kilometers} \nCondition: ${car.condition} \nFuel Type: ${car.fuel_type} \nColor: ${car.color} \nLocation: ${car.location} \nPrice: ${car.price}`;
                    const mailtoLink = `mailto:amh2harkirat@gmail.com.com?subject=${encodeURIComponent(
                      subject
                    )}&body=${encodeURIComponent(body)}`;
                    window.location.href = mailtoLink;
                  }}
                >
                  {" "}
                  Buy Now
                </button>
                {isLoggedIn ? (
                  <button
                    className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded"
                    onClick={handleDelete}
                  >
                    Delete Car
                  </button>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CarScreen;
