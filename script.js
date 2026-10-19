document.addEventListener('DOMContentLoaded', function() {
    console.log("File script.js berhasil dimuat!");
    
    const container = document.querySelector('.container');
    if (container) {
        const btn = document.createElement('button');
        btn.textContent = "Klik untuk test PR!";
        btn.style.marginTop = "20px";
        btn.style.padding = "10px 20px";
        btn.style.cursor = "pointer";
        
        btn.addEventListener('click', () => {
            alert("Mantap! Fitur dari Pull Request berhasil jalan. 🚀");
        });
        
        container.appendChild(btn);
    }
});