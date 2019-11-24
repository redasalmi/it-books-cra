import React, { useState } from "react";
import NavBar from "./NavBar";
import Books from "./Books";

function Main() {
  const [bookSearch, setBookSearch] = useState("");
  const [showBookSearch, setShowBookSearch] = useState(false);

  return (
    <div className="content">
      <NavBar
        bookSearch={bookSearch}
        setBookSearch={setBookSearch}
        setShowBookSearch={setShowBookSearch}
      />
      <Books
        bookSearch={bookSearch}
        setShowBookSearch={setShowBookSearch}
        showBookSearch={showBookSearch}
      />
    </div>
  );
}

export default Main;
