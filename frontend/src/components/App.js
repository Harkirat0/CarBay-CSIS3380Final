import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";

// App components
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import ContactUs from "./ContactUs";
import About from "./About";
import Shop from "./Shop";
import CarScreen from "./CarScreen";
import SignIn from "./SignIn";
import Dashboard from "./Dashboard";
import AddCar from "./NewCar";
import SearchComponent from "./Search";
import UpdateCar from "./EditCar";

function App() {
  const location = useLocation();

  return (
    <div className="container">
      {location.pathname === "/dashboard" ? null : <Header />}
      <Routes>
        <Route exact path="/" element={<Hero />} />
        {/* <Route path="/shop" component={} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/shop/:slug" element={<CarScreen />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/addCar" element={<AddCar />} />
        <Route path="/updateCar/:slug" element={<UpdateCar />} />
        <Route path="/searchis" element={<SearchComponent />} />
      </Routes>
      {location.pathname === "/dashboard" ? null : <Footer />}
    </div>
  );
}

export default App;
