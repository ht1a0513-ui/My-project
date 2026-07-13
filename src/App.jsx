import "./App.css";

import Navbar from "./assets/Components/Navbar";
import Sidebar from "./assets/Components/Sidebar/Sidebar";
import Footer from "./assets/Components/Footer/Footer";

import Dashboard from "./assets/Pages/Dashboard/Dashboard";

// These pages are not present in the current project structure.
// import Events from "./assets/Pages/Events/Events";
// import Register from "./assets/Pages/Register/Register";
// import Participants from "./assets/Pages/Participants/Participants";
// import Reports from "./assets/Pages/Reports/Reports";

function App() {
  return (
    <div className="app">
      <Navbar />

      <div className="main-container">
        <Sidebar />

        <div className="content">
          <Dashboard />

          {/* Uncomment one page at a time while developing */}

          {/* <Events /> */}
          {/* <Register /> */}
          {/* <Participants /> */}
          {/* <Reports /> */}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
