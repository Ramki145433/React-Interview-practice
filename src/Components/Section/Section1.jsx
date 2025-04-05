import React, { useState } from 'react';
import './section1.css';

const Section1 = () => {
  const values = Array.from({ length: 20 }, (_, i) => `section${i + 1}`);
  const [show, setShow] = useState(false);

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div>
      {/* Header Section */}
      <div className="header">
        {values.slice(0, 5).map((val, index) => (
          <h2 key={index} onClick={() => handleScroll(val)} style={{ cursor: 'pointer' }}>
            {val}
          </h2>
        ))}
        <h3 onClick={() => setShow(!show)} style={{ cursor: 'pointer' }}>More :</h3>
      </div>
      {/* <hr /> */}

      {/* Modal for More Sections */}
      {show && (
        <div className="modal">
          {values.slice(5).map((item, index) => (
            <h2 key={index} onClick={() => { handleScroll(item); setShow(false); }} style={{ cursor: 'pointer' }}>
              {item}
            </h2>
          ))}
        </div>
      )}

      {/* Sections Content */}
      {values.map((item, index) => (
        <div id={item} className={`section ${index === 0 ? "first-section" : ""}`} key={index} onClick={() => setShow(false)}>
          <h1>{item}</h1>
        </div>
      ))}
    </div>
  );
};

export default Section1;
