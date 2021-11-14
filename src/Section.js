import React from "react";

export default function Section({ icon, title, children }) {
  return (
    <div className="mb-5">
      {title ? (
        <h2 className="mb-3">
          <i className={icon} /> {title}
        </h2>
      ) : null}
      {children}
    </div>
  );
}
