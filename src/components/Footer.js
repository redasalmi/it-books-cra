import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center footer mt-5">
      <div className="container p-2">
        <div className="row d-flex align-items-center">
          <div className="col-9">
            <p className="m-0 p-0">
              All of these books and information are brought to you by the
              <a
                href="https://api.itbook.store/"
                target="_blank"
                rel="noreferrer noopener"
                className="apiLink"
              >
                {" "}
                IT Bookstore API
              </a>
            </p>
          </div>
          <div className="col-3">
            <a
              href="https://github.com/redasalmi/it-books"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="github repository"
            >
              <span className="fab fa-github fa-3x text-white navTitle"></span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
