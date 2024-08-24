let currentDiv = "D1"

const planetPosition_northSquareClassic = [
    // Tan Bhav Planets positions
    [
        { x: "45", y: "27" },   // First Planet
        { x: "55", y: "22" },   // Second Planet
        { x: "53", y: "34" },   // Third Planet
        { x: "48", y: "14" },   // Fourth Planet
        { x: "42", y: "37" },   // Fifth Planet
        { x: "39", y: "20" },   // Sixth Planet
        { x: "33", y: "28" },   // Seventh Planet
        { x: "62", y: "29" }    // Eighth Planet
    ]
    ,
    // Dhan Bhav Planets positions
    [
        { x: "20.5", y: "12" },   // First planet
        { x: "29", y: "7" },      // Second planet
        { x: "14.5", y: "6" },    // Third planet
        { x: "27.5", y: "13" },   // Fourth planet
        { x: "15", y: "14" },     // Fifth planet
        { x: "7", y: "5.5" },     // Sixth planet
        { x: "37", y: "5.5" },    // Seventh planet
        { x: "23", y: "7" }       // Eighth planet
    ],
    // Anuj Bhav Planets positions
    [
        { x: "9", y: "26" },   // First Planet
        { x: "2", y: "33" },   // Second Planet
        { x: "2", y: "18" },   // Third Planet
        { x: "1.5", y: "26" }, // Fourth Planet
        { x: "11", y: "20" },  // Fifth Planet
        { x: "1.8", y: "12" }, // Sixth Planet
        { x: "2", y: "40.5" }, // Seventh Planet
        { x: "10.5", y: "32" } // Eighth Planet
    ],
    // Maata Bhav Planets positions
    [
        { x: "20", y: "50" },   // First Planet
        { x: "30", y: "45" },   // Second Planet
        { x: "28", y: "57" },   // Third Planet
        { x: "23", y: "37" },   // Fourth Planet
        { x: "17", y: "60" },   // Fifth Planet
        { x: "14", y: "43" },   // Sixth Planet
        { x: "8", y: "51" },    // Seventh Planet
        { x: "23", y: "68" }    // Eighth Planet
    ],
    // Santan Bhav Planets positions
    [
        { x: "9", y: "76" },   // First Planet
        { x: "2", y: "83" },   // Second Planet
        { x: "2", y: "68" },   // Third Planet
        { x: "1.5", y: "76" }, // Fourth Planet
        { x: "11", y: "70" },  // Fifth Planet
        { x: "1.8", y: "62" }, // Sixth Planet
        { x: "2", y: "90.5" }, // Seventh Planet
        { x: "10.5", y: "82" } // Eighth Planet
    ],
    // Rog Bhav Planets positions
    [
        { x: "23", y: "90" },   // First Planet
        { x: "13", y: "95" },   // Second Planet
        { x: "28", y: "96" },   // Third Planet
        { x: "15", y: "88" },   // Fourth Planet
        { x: "6", y: "98" },    // Fifth Planet
        { x: "38", y: "98" },   // Sixth Planet
        { x: "22", y: "98" },   // Seventh Planet
        { x: "30", y: "89" }    // Eighth Planet
    ],
    // Dampathya Bhav Planets positions
    [
        { x: "45", y: "77" },   // First Planet
        { x: "55", y: "82" },   // Second Planet
        { x: "53", y: "70" },   // Third Planet
        { x: "48", y: "90" },   // Fourth Planet
        { x: "42", y: "67" },   // Fifth Planet
        { x: "39", y: "84" },   // Sixth Planet
        { x: "33", y: "76" },   // Seventh Planet
        { x: "62", y: "75" }    // Eighth Planet
    ],
    // Aayu Bhav Planets positions
    [
        { x: "73", y: "90" },   // First Planet
        { x: "63", y: "95" },   // Second Planet
        { x: "78", y: "96" },   // Third Planet
        { x: "65", y: "88" },   // Fourth Planet
        { x: "56", y: "98" },   // Fifth Planet
        { x: "88", y: "98" },   // Sixth Planet
        { x: "72", y: "98" },   // Seventh Planet
        { x: "80", y: "89" }    // Eighth Planet
    ],
    // Bhagya Bhav Planets positions
    [
        { x: "86", y: "78" },   // First Planet
        { x: "92", y: "83" },   // Second Planet
        { x: "93", y: "69" },   // Third Planet
        { x: "84", y: "70" },   // Fourth Planet
        { x: "94", y: "91" },   // Fifth Planet
        { x: "93", y: "61" },   // Sixth Planet
        { x: "94", y: "76" },   // Seventh Planet
        { x: "86", y: "85" }    // Eighth Planet
    ],
    // Karma Bhav Planets positions
    [
        { x: "74", y: "50" },   // First Planet
        { x: "64", y: "45" },   // Second Planet
        { x: "66", y: "57" },   // Third Planet
        { x: "71", y: "37" },   // Fourth Planet
        { x: "77", y: "60" },   // Fifth Planet
        { x: "80", y: "43" },   // Sixth Planet
        { x: "86", y: "51" },   // Seventh Planet
        { x: "71", y: "68" }    // Eighth Planet
    ],
    // Laab Bhav Planets positions
    [
        { x: "86", y: "29" },   // First Planet
        { x: "92", y: "34" },   // Second Planet
        { x: "93", y: "20" },   // Third Planet
        { x: "84", y: "21" },   // Fourth Planet
        { x: "94", y: "42" },   // Fifth Planet
        { x: "93", y: "12" },   // Sixth Planet
        { x: "94", y: "27" },   // Seventh Planet
        { x: "86", y: "36" }    // Eighth Planet
    ],
    // Karch Bhav Planets positions
    [
        { x: "70.5", y: "12" },   // First planet
        { x: "79", y: "7" },      // Second planet
        { x: "64.5", y: "6" },    // Third planet
        { x: "77.5", y: "13" },   // Fourth planet
        { x: "65", y: "14" },     // Fifth planet
        { x: "57", y: "5.5" },    // Sixth planet
        { x: "87", y: "5.5" },    // Seventh planet
        { x: "73", y: "7" }       // Eighth planet
    ]
    
];

const signs = [
    "Aries", "Taurus", "Gemini", "Cancer",
    "Leo", "Virgo", "Libra", "Scorpio",
    "Saggitarius", "Capricorn", "Aquarius", "Pisces"
];

// Function to get the index of a sign (1-based index)
        function getIndexOfSign(sign) {
            // Find the index in the array (0-based index)
            const index = signs.indexOf(sign);

            // Return the 1-based index or -1 if the sign is not found
            return index !== -1 ? index + 1 : -1;
        }

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

// Function to get the coordinates of a planet based on house number
function getPlanetCoordinates(planetName, planets, asc_signnum, firsthouse_signnum) {
    // Fetch the planet data
    const planet = planets[planetName];
    
    if (!planet) {
      return `Planet ${planetName} not found.`;
    }
    
    //Lets compute whats the housenumber of planet when the first house sign is changed to firsthouse_signnum
    let houseNum = planet["house-num"];
    //////////////////////////////////////////////////////////////////////////////////////
    if(asc_signnum < firsthouse_signnum){
        asc_signnum = asc_signnum + 12;
    }
    asc4mfirsthouse = asc_signnum + 1 - firsthouse_signnum;

    newhouseNum = (asc4mfirsthouse + houseNum) % 13;
    if (newhouseNum === 0)
    {
        newhouseNum = 12
    }
    /////////////////////////////////////////////////////////////////////////////////////////
    newhouseNum = asc_signnum - firsthouse_signnum + houseNum
    newhouseNum = (newhouseNum + 12) % 12
    if (newhouseNum === 0)
    {
        newhouseNum = 12
    }


    console.log(`The planet ${planetName} is in base house ${houseNum}  but with respect to sign ${firsthouse_signnum} it is in house - ${newhouseNum}`)
     

    if (newhouseNum < 1 || newhouseNum > planetPosition_northSquareClassic.length) {
      console.log(`House number ${newhouseNum} is out of range.`);
      return `House number ${newhouseNum} is out of range.`;
    }
  
    // Get the coordinates for the given house number
    const coordinates = planetPosition_northSquareClassic[newhouseNum - 1];
  
    if (planetName in planets) {
      // Get the number of planets in the same house
      const planetsInHouse = Object.values(planets).filter(p => p["house-num"] === houseNum);
  
      // Determine which coordinate to return
      const planetIndex = planetsInHouse.indexOf(planet);
      
      if (planetIndex >= 0 && planetIndex < coordinates.length) {
        //console.log(`the return coordinate value for ${planetName} is ${coordinates[planetIndex].x}`)
        return coordinates[planetIndex];
      } else {
        return `Coordinates for planet ${planetName} in house ${newhouseNum} are not available.`;
      }
    }
  }

  /**
 * Animates an SVG text element to a new position.
 * @param {string} textId - The ID of the SVG text element to animate.
 * @param {number} newXPercent - The new x position as a percentage of the SVG width.
 * @param {number} newYPercent - The new y position as a percentage of the SVG height.
 * @param {string} duration - The duration of the animation (e.g., '1s').
 */
function animateTextPosition(textId, newXPercent, newYPercent, duration) {
    const svg = document.getElementById('northIndianChart'); // Ensure your SVG has an ID
    const textElement = document.getElementById(textId);

    if (!svg || !textElement) {
        console.error('SVG or text element not found.');
        return;
    }

    // Function to convert percentage to pixel value
    function percentageToPixels(percent, total) {
        return (percent / 100) * total;
    }

    // Get SVG dimensions
    const svgWidth = svg.viewBox.baseVal.width || svg.clientWidth;
    const svgHeight = svg.viewBox.baseVal.height || svg.clientHeight;

    // Calculate new positions based on percentages
    const newX = percentageToPixels(newXPercent, svgWidth);
    const newY = percentageToPixels(newYPercent, svgHeight);

    // Remove any existing animations
    textElement.querySelectorAll('animate').forEach(animate => animate.remove());

    // Create new animate elements for x and y attributes
    const animateX = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
    animateX.setAttribute('attributeName', 'x');
    animateX.setAttribute('from', textElement.getAttribute('x'));
    animateX.setAttribute('to', newX);
    animateX.setAttribute('dur', duration); // Duration of animation
    animateX.setAttribute('fill', 'freeze'); // Retain end state

    const animateY = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
    animateY.setAttribute('attributeName', 'y');
    animateY.setAttribute('from', textElement.getAttribute('y'));
    animateY.setAttribute('to', newY);
    animateY.setAttribute('dur', duration); // Duration of animation
    animateY.setAttribute('fill', 'freeze'); // Retain end state

    // Append animations to text element
    textElement.appendChild(animateX);
    textElement.appendChild(animateY);

    // Trigger the animations
    animateX.beginElement();
    animateY.beginElement();
}


  // Function to Get coordinates for all planets of the division
  function UpdatePlanetCoordinates(division, firsthousesignnum){
    myplanets = ad[division].planets;
    ascendantsign = ad[division].ascendant.sign;
    asc_sign_num = getIndexOfSign(ascendantsign);
    updateTextNumbers(firsthousesignnum);    //Update the ascendant sign in the chart
    updateDropdownByIndex(firsthousesignnum-1);  //Update the ascendant sign in dropdown

    array = ["Sun","Moon","Mars","Mercury","Jupiter","Venus","Saturn","Rahu","Ketu"]
    array.forEach(element => {
        let planetelement = document.getElementById(element);
        let newpos = getPlanetCoordinates(element, myplanets, asc_sign_num, firsthousesignnum);
        let sts_retro = myplanets[element].retro    //Get retrograde status of the planet

        if (sts_retro === true){
            planetelement.setAttribute('text-decoration','underline');
        }
        else{
            planetelement.setAttribute('text-decoration','none');
        }
        

        // Animate text movement
        animateTextPosition(element, newpos.x, newpos.y, '2s');;

        planetelement.setAttribute('x',newpos.x);
        planetelement.setAttribute('y',newpos.y);
    });
    
    
  }

  function updateDropdownByIndex(index) {
    var dropdown = document.getElementById('firsthousesign');
    
    if (index >= 0 && index < dropdown.options.length) {
        dropdown.selectedIndex = index;
    } else {
        console.warn("Index out of range.");
    }
}

  // Function to apply logic to all elements with class 'divisionButton'
  function applyLogicToButtons() {
    // Select all elements with the class 'divisionButton'
    var buttons = document.querySelectorAll('.divisionButton');
    
    // Iterate over each button
    buttons.forEach(function(button) {
        // Apply logic, e.g., add a click event listener
        button.addEventListener('click', function() {
            // Example logic: Change background color on click
            currentDiv = button.innerHTML
            asc_signnum = getIndexOfSign(ad[currentDiv].ascendant.sign)
            UpdatePlanetCoordinates(currentDiv, asc_signnum);
        });
    });

    document.getElementById('firsthousesign').addEventListener('change', function() {
        var selectedValue = this.value;
        //console.log("Selected First House Sign: " + selectedValue);
        UpdatePlanetCoordinates(currentDiv, parseInt(selectedValue));
        // You can perform any other action you want here, like updating a display or making an API call.
    });
}


 

document.addEventListener('DOMContentLoaded', () => {
    applyLogicToButtons();
    
});