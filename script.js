function toggleMode() {
    const html = document.documentElement; // Seleciona o elemento raiz (html)
    html.classList.toggle('dark-mode'); // Alterna a classe 'dark-mode' no elemento raiz

    const icon = document.getElementById('icon');
    
    // Alternar ícone
    if (html.classList.contains('dark-mode')) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
}
