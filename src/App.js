import React from "react";
import { Route, Routes } from "react-router-dom";
import CharactersList from "./pages/Home";
import CharacterDetails from "./pages/CharacterDetails";
import Layout from "./components/layouts";
import Search from "./pages/Search";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<CharactersList />} />
          <Route path="/search" element={<Search />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/:id" element={<CharacterDetails />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
