import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/index";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./pages/Error";
import About from "./pages/About";
import Logement from "./pages/Logements";
import "./index.scss";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <>
          <Header />
          <Home />
          <Footer />
        </>
      ),
    },
    {
      path: "/logement/:id",
      element: (
        <>
          <Header />
          <Logement />
          <Footer />
        </>
      ),
    },
    {
      path: "/*",
      element: (
        <>
          <Header />
          <Error />
          <Footer />
        </>
      ),
    },
    {
      path: "/About",
      element: (
        <>
          <Header />
          <About />
          <Footer />
        </>
      ),
    },
  ],
  {
    future: {
      v7_startTransition: true, // Activation du flag pour React.startTransition
      v7_relativeSplatPath: true, // Activation du flag pour les chemins relatifs dans les routes Splat
    },
  }
);

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/logement/:id" element={<Logement />} />
//         <Route path="*" element={<Error />} />
//         <Route path="/About" element={<About />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<RouterProvider router={router} />);
// export default App;
