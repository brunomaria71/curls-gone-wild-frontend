import { Layout } from "antd";
// import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HairCards from "./components/HairCards";
import Hero from "./components/Hero";
import Home from "./components/Home";
import Menubar from "./components/MenuBar";
import Products from "./components/Products";
import ResultsPage from "./components/ResultsPage";
import ReviewForm from "./components/ReviewForm";
import ReviewPage from "./components/ReviewPage";

const { Header, Content } = Layout;

function App() {
  return (
    <BrowserRouter>
      {/* <UserContext.Provider value={{ user, setUser }}> */}
      <Layout>
        <Header>
          <Menubar />
        </Header>
        <Content>
          <Routes>
            <Route path="/reviews/add" element={<ReviewForm />} />
            <Route path="/reviews" element={<ReviewPage />} />
            <Route path="/products" element={<Products />} />
            <Route
              path="/home"
              element={
                <>
                  {" "}
                  <Hero /> <Home /> <HairCards />
                </>
              }
            />
          </Routes>
        </Content>
        <ResultsPage />
      </Layout>
      {/* </UserContext.Provider> */}
    </BrowserRouter>
  );
}

export default App;
