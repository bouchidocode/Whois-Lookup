document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById('searchButton');
    button.addEventListener('click', function() {
        const domain = document.getElementById('domainInput').value;
        if (domain) {
            window.location.href = `result.html?domain=${encodeURIComponent(domain)}`;
        } else {
            alert("Please enter a domain.");
        }
    });
});

// Separate logic for the result.html page would be added here if needed
