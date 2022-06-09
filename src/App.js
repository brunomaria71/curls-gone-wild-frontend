import { Layout } from "antd";
import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HairCards from "./components/HairCards";
import Hero from "./components/Hero";
import Home from "./components/Home";
import Menubar from "./components/MenuBar";
import ReviewPage from "./components/ReviewPage";

const { Header, Content } = Layout;

export const UserContext = createContext(null);

function App() {
  const [user, setUser] = useState();
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Layout className="layout">
          <Header>
            <Menubar />
          </Header>
          <Content>
            <Routes>
              <Route path="/reviews/add" element={<ReviewPage />} />
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
        </Layout>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
