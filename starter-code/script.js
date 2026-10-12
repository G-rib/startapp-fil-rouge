const monTitre = document.querySelector('h1');

monTitre.addEventListener('click', function() {
    
    monTitre.style.transform = 'scale(1.1)';
    setTimeout(() => {
        monTitre.style.transform = 'scale(1)';
    }, 100);

    console.log("Le titre a été cliqué !");
});