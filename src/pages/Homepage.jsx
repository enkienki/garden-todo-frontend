import React from "react";
import NavBar from "../components/Navbar";

export default function Homepage() {
  return (
    <div className="bg-dark vh-100">
      <header className="jumbotron jumbotron-fluid bg-gradient-secondary text-light shadow">
        <div className="container">
          <h1 className="display-4">La Mer Egée</h1>
        </div>
      </header>
      <div className="container">
        <NavBar />
      </div>
    </div>
  );
}
