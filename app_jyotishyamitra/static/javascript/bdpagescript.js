document.addEventListener('DOMContentLoaded', (event) => {
    // Get elements from the DOM
    let enterbtn = document.getElementById('tabEnterPlace');
    let selectbtn = document.getElementById('tabSelectPlace');
    let submitbtn = document.getElementById('btnSubmitData');
    let resetbtn = document.getElementById('btnResetForm');
    let exportbtn = document.getElementById('btnExportData');
    let btnHome = document.getElementById('homeopt');
    const btnImportBD = document.getElementById('btnImportBD');
    let btnContactUs = document.getElementById('contactusopt');

    const fileInput = document.createElement('input');

    // Set up the file input element
    fileInput.type = 'file';
    fileInput.accept = '.json';
    fileInput.style.display = 'none'; // Hide the file input

    // Append the file input to the body (required to trigger file selection)
    document.body.appendChild(fileInput);

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

    // Switch between 'Enter Place' and 'Select Place' sections
    enterbtn.addEventListener("click", () => {
        document.getElementById('sec_EnterPlace').style.display = 'flex';
        document.getElementById('sec_SelectPlace').style.display = 'none';
    });

    selectbtn.addEventListener("click", () => {
        document.getElementById('sec_EnterPlace').style.display = 'none';
        document.getElementById('sec_SelectPlace').style.display = 'flex';
    });

    // Handle the 'Submit Data' button click
    submitbtn.addEventListener('click', () => {
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let gender = document.getElementById('gender').value;
        let dob = document.getElementById('dob').value;
        let tob = document.getElementById('tob').value;
        let PlaceName = document.getElementById('PlaceName').value;
        let lat = document.getElementById('lat').value;
        let lon = document.getElementById('lon').value;
        let tz = document.getElementById('tz').value;

        if (!name || !email || !gender || !dob || !tob || !PlaceName || !lat || !lon || !tz) {
            alert('Please fill out all fields.');
            return;
        }
        // Add further form submission logic here
        console.log('Form Submitted');
    });

    // Handle the 'Reset Form' button click
    resetbtn.addEventListener('click', () => {
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('gender').value = "";
        document.getElementById('dob').value = "";
        document.getElementById('tob').value = "";
        document.getElementById('PlaceName').value = "";
        document.getElementById('lat').value = "";
        document.getElementById('lon').value = "";
        document.getElementById('tz').value = "";
        document.getElementById('country').value = "";
        document.getElementById('state').value = "";
        document.getElementById('city').value = "";
    });

    // Handle the 'Export Data' button click
    exportbtn.addEventListener('click', () => {
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let gender = document.getElementById('gender').value;
        let dob = new Date(document.getElementById('dob').value);
        let tob = document.getElementById('tob').value;
        let PlaceName = document.getElementById('PlaceName').value;
        let lat = document.getElementById('lat').value;
        let lon = document.getElementById('lon').value;
        let tz = document.getElementById('tz').value;
        

        if (!name || !email || !gender || !dob || !tob || !PlaceName || !lat || !lon || !tz) {
            alert('Please fill out all fields before exporting.');
            return
        };

        // Extract time components from the time of birth
        let tobHour = tob.split(":")[0];
        let tobMin = tob.split(":")[1];

        
        // Construct the JSON data
        let jsonData = {
            name: name,
            email:email,
            gender: gender,
            DOB: {
                year: dob.getFullYear(),
                month: dob.getMonth() + 1, // Months are zero-indexed
                day: dob.getDate()
            },
            TOB: {
                hour: tobHour,
                min: tobMin
            },
            POB: {
                name: PlaceName,
                lat: lat,
                lon: lon,
                timezone: tz
            }
        };

        // Convert JSON data to a string and create a Blob
        let jsonStr = JSON.stringify(jsonData, null, 2); // Pretty-print with 2 spaces indentation
        let blob = new Blob([jsonStr], { type: 'application/json' });
        let url = URL.createObjectURL(blob);

        // Create a link element to download the file
        let link = document.createElement("a");
        link.href = url;
        link.download = "birthdata.json";
        link.click();

        // Clean up the URL object
        URL.revokeObjectURL(url);

    });

    //Handle Import Button functionality
    if (btnImportBD) {
        btnImportBD.addEventListener('click', (event) => {
            fileInput.click(); // Trigger file input click
        });
    }

    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file && file.type === 'application/json') {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const data = JSON.parse(e.target.result);
                    //document.getElementById('name').value = data.name
                    populateFormFields(data);
                    //alert(data.name);
                } catch (error) {
                    alert('Error parsing JSON file.');
                }
            };
            reader.readAsText(file);

        } else {
            alert('Please select a valid JSON file.');
        }
    });

    function populateFormFields(data) {
        document.getElementById('name').value = data.name || '';
        document.getElementById('email').value = data.email || '';
        document.getElementById('gender').value = data.gender || '';
        document.getElementById('dob').value = data.DOB ? `${data.DOB.year}-${String(data.DOB.month).padStart(2, '0')}-${String(data.DOB.day).padStart(2, '0')}` : '';
        //document.getElementById('tob').value = data.TOB ? `${String(data.TOB.hour).padStart(2, '0')}:${String(data.TOB.min).padStart(2, '0')}:${String(data.TOB.sec).padStart(2, '0')}` : '';
        document.getElementById('tob').value = data.TOB ? `${String(data.TOB.hour).padStart(2, '0')}:${String(data.TOB.min).padStart(2, '0')}` : '';
        document.getElementById('PlaceName').value = data.POB.name || '';
        document.getElementById('lat').value = data.POB.lat || '';
        document.getElementById('lon').value = data.POB.lon || '';
        document.getElementById('tz').value = data.POB.timezone || '';
    }

    
});
