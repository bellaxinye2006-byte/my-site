// ...existing code...
const header = document.getElementById("site-header");

if (header) {
    header.innerHTML = `
        <nav class="topbar">
            <div class="brand">BIUH</div>

            <div class="nav-links">
                <a href="index.html">Home</a>
                <a href="contact.html">Contact</a>
                <a href="project.html">Projects</a>
                <a href="quotes.html">Quotes</a>
            </div>

            <a class="nav-button" href="contact.html">Contact</a>
        </nav>
    `;
}