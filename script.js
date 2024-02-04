document.getElementById('no').addEventListener('mouseover', function() {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    this.style.position = 'absolute';
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
});

document.getElementById('yes').addEventListener('click', function() {
    window.location.href = 'page_de_succes.html'; // Redirige vers une nouvelle page
});
