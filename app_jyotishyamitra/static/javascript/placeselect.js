

// Populate dropdown with values
function populateDropdown(id, values) {
    const dropdown = document.getElementById(id + '-dropdown');
    dropdown.innerHTML = '';
    values.forEach(value => {
        const div = document.createElement('div');
        div.textContent = value;
        div.onclick = () => selectValue(id, value);
        dropdown.appendChild(div);
    });
}

// Handle value selection and update the related dropdowns
function selectValue(id, value) {
    document.getElementById(id).value = value;
    document.getElementById(id + '-dropdown').style.display = 'none';

    if (id === 'country') {
        const country = data.find(country => country.name === value);
        populateDropdown('state', country.states.map(state => state.name));
        document.getElementById('state').value = '';
        document.getElementById('city').value = '';
        document.getElementById('state').disabled = false;
        document.getElementById('city').disabled = true;
        document.getElementById('state-dropdown').style.display = 'none';
        document.getElementById('city-dropdown').style.display = 'none';

        // Display country timezone information
        let timezone = country.timezones[0].gmtOffsetName;
        var tzarr = timezone.split('UTC')[1];
        var tzhour = tzarr.split(':')[0];
        var tzmin = tzarr.split(":")[1];
        switch(tzmin) {
            case "00":
              tzvalue = tzhour + ".00" 
              break;
            case "15":
              tzvalue = tzhour + ".25"
              break;
            case "30":
                tzvalue = tzhour + ".50"
                break;
            case "45":
                tzvalue = tzhour + ".75"
                break;
            default:
              tzvalue = tzhour + ".00"
          }

        document.getElementById("tz").value = tzvalue;

    } else if (id === 'state') {
        const country = data.find(country => country.name === document.getElementById('country').value);
        const state = country.states.find(state => state.name === value);
        populateDropdown('city', state.cities.map(city => city.name));
        document.getElementById('city').value = '';
        document.getElementById('city').disabled = false;
        document.getElementById('city-dropdown').style.display = 'none';
    } else if (id === 'city') {
        const country = data.find(country => country.name === document.getElementById('country').value);
        const state = country.states.find(state => state.name === document.getElementById('state').value);
        const city = state.cities.find(city => city.name === value);

        // Display city latitude and longitude
        document.getElementById("PlaceName").value = city.name;
        document.getElementById("lat").value = city.latitude;
        document.getElementById("lon").value = city.longitude;
    }
}

// Filter dropdown values based on user input
function filterDropdown(id) {
    const input = document.getElementById(id);
    const filter = input.value.toLowerCase();
    const dropdown = document.getElementById(id + '-dropdown');
    const divs = dropdown.getElementsByTagName('div');
    let count = 0;

    Array.from(divs).forEach(div => {
        if (filter && div.textContent.toLowerCase().includes(filter)) {
            div.style.display = '';
            count++;
        } else {
            div.style.display = 'none';
        }
    });

    dropdown.style.display = filter && count > 0 ? 'block' : 'none';
}


document.addEventListener('DOMContentLoaded', () => {
    fetchData();
});


document.getElementById('country').addEventListener('input', function() {
    filterDropdown('country');
    document.getElementById('state').disabled = this.value === '';
    document.getElementById('city').disabled = true;
});

document.getElementById('state').addEventListener('input', function() {
    filterDropdown('state');
    document.getElementById('city').disabled = this.value === '';
});

document.getElementById('city').addEventListener('input', function() {
    filterDropdown('city');
});



