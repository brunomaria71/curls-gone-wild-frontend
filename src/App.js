import { Layout } from "antd";
import "antd/dist/antd.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import HairCards from "./components/HairCards";
import Menu from "./components/Menu";
import ResultsPage from "./components/ResultsPage";
import ReviewForm from "./components/ReviewForm";
import ReviewPage from "./components/ReviewPage";
import { ResultsContextProvider } from "./context/ResultsContext";
import { UserChoiceContextProvider } from "./context/UserChoiceContext";
import Home from "./scenes/Home";
const { Content } = Layout;

function App() {
  return (
    <BrowserRouter>
      <UserChoiceContextProvider>
        <Menu />
        <ResultsContextProvider>
          <Content>
            <Routes>
              <Route path="/reviews/add" element={<ReviewForm />} />
              <Route path="/haircards" element={<HairCards />} />
              <Route path="/reviews" element={<ReviewPage />} />
              <Route path="/results" element={<ResultsPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </Content>
        </ResultsContextProvider>
        <Footer />
      </UserChoiceContextProvider>
    </BrowserRouter>
  );
}

export default App;
