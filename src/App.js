import React from "react";
import Header from "./components/Header";
import FeedPage from "./pages/FeedPage";
import DetailPage from "./pages/DetailPage";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route exact path="/">
          <FeedPage />
        </Route>
        <Route exact path="/post/:id">
          <DetailPage />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
