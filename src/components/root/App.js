import React from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "reactstrap";
import CharacterAdd from "../character/CharacterAdd";
import CharacterDetail from "../character/CharacterDetail";
import NotFound from "../common/NotFound";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div>
      <Container>
        <Navi />
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/add-character" element={<CharacterAdd />}></Route>
          <Route path="/detail/:id" element={<CharacterDetail />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
