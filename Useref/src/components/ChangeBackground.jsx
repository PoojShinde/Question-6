import React, { useRef } from 'react';

function ChangeBackground() {
  const divRef = useRef(null); // Create a ref to access the DOM element

  // Function to change the background color
  const changeBackgroundColor = () => {
    // Access the DOM element and change its background color
    divRef.current.style.backgroundColor = 'lightblue';
  };

  return (
    <div>
      {/* Div element that interacts with useRef */}
      <div 
        ref={divRef} 
        onClick={changeBackgroundColor} // Change background color when clicked
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: 'lightgray',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer'
        }}
      >
        Click Me to Change Color
      </div>
    </div>
  );
}

export default ChangeBackground;
