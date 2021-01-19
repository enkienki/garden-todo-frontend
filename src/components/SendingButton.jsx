import React from "react";

export default function SendingButton() {
  return (
    <div className="container mt-3">
      <div className="row justify-content-end">
        <div className="btn btn-sm bg-gradient-danger text-light m-1 disabled">
          Annuler
        </div>
        <div className="btn btn-sm bg-gradient-success text-light m-1 pl-4 pr-4">
          <span
            className="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
        </div>
      </div>
    </div>
  );
}
