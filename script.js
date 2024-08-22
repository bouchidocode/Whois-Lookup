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

// On `result.html`, fetch data based on the domain input
function fetchDomainData(domain) {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; // Caution: for development only
    const apiUrl = `${proxyUrl}https://api.domaintools.com/v1/domaintools.com/whois/${domain}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('apiResponse').textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('apiResponse').textContent = 'Error fetching data: ' + error;
        });
}
