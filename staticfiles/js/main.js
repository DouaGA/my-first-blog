document.addEventListener('DOMContentLoaded', function() {
    // Initialise la carte seulement si l'élément existe
    if (document.getElementById('mapid')) {
        var map = L.map('mapid').setView([48.8566, 2.3522], 13);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
    }
});