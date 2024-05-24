// Function to load header and footer
function loadHTML() {
    fetch('shared/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        });

    fetch('shared/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        });
}

// Call the loadHTML function when the window loads
window.onload = loadHTML;
