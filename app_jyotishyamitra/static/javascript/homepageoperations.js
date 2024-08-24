document.addEventListener('DOMContentLoaded', function() {
    const btnInputBD = document.getElementById('btnInputBD');
    const btnHome = document.getElementById('homeopt');
    const btnContactUs = document.getElementById('contactusopt');
    
    
    
    if (btnInputBD) {
        btnInputBD.addEventListener('click', function() {
            window.location.href = '/birthdata/';
        });
    }

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
    
});