import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigationbar } from "./Components/Navigationbar";
import { CreateAgent } from "./Screens/CreateAgent";
import { AgentList } from "./Screens/AgentList";
import Home from "./Components/Home";
import { Dharamshala } from "./Screens/Dharamshala";
import Footer from "./Components/Footer";
import { Hotel } from "./Screens/Hotel";
import { HomeStay } from "./Screens/HomeStay";
import ScrollButton from "./Components/ScrollButton";
import BestTiming from "./Screens/BestTiming";
import ChardhamTemple from "./Screens/ChardhamTemple";
import AboutChardham from "./Screens/AboutChardham";
import TempleTiming from "./Screens/TempleTiming";
import Hospitals from "./Screens/Hospitals";
import Booking from "./Screens/Booking";
// import Tours from "./Screens/Tours";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navigationbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createagent" element={<CreateAgent />} />
          <Route path="/agent-list" element={<AgentList />} />
          <Route path="/dharamshala" element={<Dharamshala />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/homestay" element={<HomeStay />} />
          <Route path="/best-timing" element={<BestTiming />} />
          <Route path="/temples" element={<ChardhamTemple />} />
          <Route path="/about" element={<AboutChardham />} />
          <Route path="/temple-timing" element={<TempleTiming />} />
          <Route path="/hospital" element={<Hospitals />} />
          {/* <Route path="/tours" element={<Tours />} /> */}
          <Route path="/booking" element={<Booking />} />
        </Routes>
        <Footer />
        <ScrollButton />
      </BrowserRouter>
    </>
  );
}

export default App;
