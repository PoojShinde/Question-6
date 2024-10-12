import React, { useRef, useState } from 'react';

function UncontrolledInput() {
  const inputRef = useRef(null); // Create a ref for the input field
  const [value, setValue] = useState(''); // State to hold the input value for display

  // Function to handle real-time value retrieval
  const handleInputChange = () => {
    const inputValue = inputRef.current.value; // Access the current input value
    setValue(inputValue); // Update the state with the current value
  };

  return (
    <div>
      <h2>Uncontrolled Input Example</h2>
      {/* Uncontrolled input field with useRef */}
      <input 
        type="text" 
        ref={inputRef} 
        onChange={handleInputChange} // Trigger real-time value retrieval on input change
        placeholder="Type something here..." 
      />
      {/* Display the real-time input value in red */}
      <p style={{ color: 'red' }}>Current Value: {value}</p>
    </div>
  );
}

export default UncontrolledInput;
