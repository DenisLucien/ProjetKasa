import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/index";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./pages/Error";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Error" element={<Error />} />
      </Routes>
      <Footer/>
    </Router>
  );
  
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
export default App;
