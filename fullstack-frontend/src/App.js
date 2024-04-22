import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "./layout/Navbar";
import { Home } from "./pages/Home";
import { Display } from "./pages/Display";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import EditUser from "./pages/EditUser";
import { DisasterPage } from "./pages/DisasterPage";
import { FireMap } from "./components/FireMap";
import { useState, useEffect } from "react";
import { Loader } from "./components/Loader";
import { SevereStorms } from "./components/SevereStorms";
import { Volcanoes } from "./components/Volcanoes";
import { SeaLakeIce } from "./components/SeaLakeIce";
import { Footer } from "./layout/Footer";
import { UpdateDisaster } from "./pages/UpdateDisaster";
import { AllDisaster } from "./pages/AllDisaster";
import { DisasterAdmin } from "./pages/DisasterAdmin ";
import EditDisaster from "./pages/EditDisaster";

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events");
      const { events } = await res.json(); // Corrected the method invocation

      setEventData(events);
      setLoading(false);
    };

    fetchEvents();
    console.log(eventData);
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/display" element={<Display />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route exact path="/disasterPage" element={<DisasterPage />} />
          <Route
            exact
            path="/fireMap"
            element={!loading ? <FireMap eventData={eventData} /> : <Loader />}
          />
          <Route
            exact
            path="/severeStorms"
            element={
              !loading ? <SevereStorms eventData={eventData} /> : <Loader />
            }
          />
          <Route
            exact
            path="/volcanoes"
            element={
              !loading ? <Volcanoes eventData={eventData} /> : <Loader />
            }
          />
          <Route
            exact
            path="/seaLakeIce"
            element={
              !loading ? <SeaLakeIce eventData={eventData} /> : <Loader />
            }
          />
          <Route exact path="/updateDisaster" element={<UpdateDisaster />} />
          <Route exact path="/allDisaster" element={<AllDisaster />} />
          <Route exact path="/disasterAdmin" element={<DisasterAdmin />} />
          <Route exact path="/editDisaster/:id" element={<EditDisaster />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
