import React from "react";

export function SecondButton({ label }) {
  return (
    <div data-testid="button" className="button-container">
      Hi {label}
    </div>
  );
}
