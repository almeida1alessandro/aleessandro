document.addEventListener('DOMContentLoaded', () => {
    const imagens = document.querySelectorAll('.imagens img');
    imagens.forEach(img => {
        img.addEventListener('click', () => {
            alert('Imagem clicada: ' + img.alt);
        });
    });
});
