import React, { useState } from 'react';
import images from './images';
import './style.css';
export default function App() {
  const [selectedImg, setSelectedImg] = useState(images[0]);
  return (
    <div className="App">
      <div className="container">
        <img src={selectedImg} alt="Selected" className="selected" />
        <div className="imgContainer">
          {images.map((img, index) => (
            <img
              style={{ border: selectedImg === img ? '4px solid purple' : '' }}
              key={index}
              src={img}
              alt="dog"
              onClick={() => setSelectedImg(img)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
