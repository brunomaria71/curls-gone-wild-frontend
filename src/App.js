import { Layout } from "antd";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Menubar from "./components/MenuBar";
import ResultsPage from "./components/ResultsPage";
import ReviewForm from "./components/ReviewForm";
import ReviewPage from "./components/ReviewPage";
import { ResultsContextProvider } from "./context/ResultsContext";
import Home from "./scenes/Home";

const { Header, Content } = Layout;

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Header>
          <Menubar />
        </Header>
        <ResultsContextProvider>
          <Content>
            <Routes>
              <Route path="/reviews/add" element={<ReviewForm />} />
              <Route path="/reviews" element={<ReviewPage />} />
              <Route path="/results" element={<ResultsPage />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </Content>
        </ResultsContextProvider>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
