import React from "react";
import Profile from "./Profile";
import ErrorBoundary from "./ErrorBoundary";

function Home() {
  return (
    <div>
      <div className="container mt-5">
        <div className="row p-2" style={{ justifyContent: "space-around" }}>
          <ErrorBoundary>
          <Profile path="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv4UK-VacVrppny4aGjzhWStSrcsP_6A1UdFvRLCMg&s" />
          </ErrorBoundary>

          <ErrorBoundary>
          <Profile path="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv4UK-VacVrppny4aGjzhWStSrcsP_6A1UdFvRLCMg&s" />
          </ErrorBoundary>

          <ErrorBoundary>
          <Profile path="" />
          </ErrorBoundary>
          
        </div>
      </div>
    </div>
  );
}

export default Home;
