import React from "react";

export const Footer = () => {
  return (
    <div>
      website footer
      <section className="copyright__block">
        <p className="copyright__text">
          Copyright&copy; 2022{" "}
          <a
            href="#"
            className="personal-site__link"
            title="Michael P. Wright"
            target="_blank"
            rel="noreferrer"
          >Michael P. Wright 
          </a>
        </p>{" "}
      </section>{" "}
    </div>
  );
};
