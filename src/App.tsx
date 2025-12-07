import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Upload from "./pages/Upload";
import About from "./pages/About";
import Default from "./pages/Default";
import { PostsProvider } from "./context/PostsContext";

const App = () => {
  return (
    <PostsProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Default />} />
            <Route path="/home" element={<Home />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </PostsProvider>
  );
};

export default App;
