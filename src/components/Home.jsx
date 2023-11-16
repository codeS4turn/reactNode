import React from "react";
import { backendUrl } from "./constant";

function Home() {
  return (
    <div className="form-check mt-3">
      <label className="form-check-label">
        <br />
        <input
          className="form-check-input"
          type="checkbox"
          name="remember"
        />{" "}
        Remember me
      </label>
    </div>
  );
}

export default Home;
