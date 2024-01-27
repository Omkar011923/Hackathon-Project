import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About"
import "./index.css"
import Layout from "./Layout";
import Meditation from "./Pages/Meditation/Meditation";
import CallAssist from "./Pages/CallAssist/CallAssist";
function App() {
  return (
    <div className="App">
     <Router>
      <Layout>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Overview" element={<About/>} />
            {/* <Route path="/Chat" element={<ChatProfe/>} /> */}
            <Route path="/Meditation" element={<Meditation/>} />
            <Route path="/CallSupport" element={<CallAssist/>} />
            <Route path="/about" element={<About/>} />
          </Routes>
          </Layout>
        </Router>

    </div>

  );
}

export default App;
