function updateTextNumbers(startNumber) {
    // Get all text elements with the class 'sign_number'
    const textElements = document.querySelectorAll('.sign_number');
    
    // Ensure startNumber is within the valid range [1, 12]
    if (startNumber < 1 || startNumber > 12) {
      console.error('Start number must be between 1 and 12');
      return;
    }
  
    // Loop through each text element and update the number
    textElements.forEach((textElement, index) => {
      // Calculate the new number
      const newNumber = (startNumber + index - 1) % 12 + 1;
      
      // Update the text content
      textElement.textContent = newNumber;
    });
  }
  
  // Example usage
  window.onload = () => {
    const btnHome = document.getElementById('homeopt');
    const btnContactUs = document.getElementById('contactusopt');
    
    updateTextNumbers(1); 

    if (btnHome) {
        btnHome.addEventListener('click', function() {
            window.location.href = '/';
        });
    }

    if (btnContactUs) {
        btnContactUs.addEventListener('click', function() {
            window.location.href = '/contactus/';
        });
    }
  };
  
  