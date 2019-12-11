// Initialize and add map
function initMap() {
    const loc = { lat: 42.361145, lng: -71.057083 };
    const map = new google.maps.Map(document.querySelector('.map'),
    {
        zoom: 14,
        center: loc
    });

    const marker = new google.maps.Marker({ position: loc, map: map});
}

// Sticky menu opacity on scroll
window.addEventListener('scroll', function() {
    if (this.window.scrollY > 150) {
        this.document.querySelector('#navbar').style.opacity = 0.85;
    } else {
        this.document.querySelector('#navbar').style.opacity = 1;
    }
});

//Smoth Scrolling
$('#navbar a, .btn').on('click', function(event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top -65
            },
            800
        );
    }
});