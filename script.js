function fetchDomainData(domain) {
    const apiUrl = `https://<your-serverless-function-url>/whois/${domain}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayData(data.response);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('apiResponse').textContent = 'Error fetching data: ' + error;
        });
}

function displayData(data) {
    // Your existing code to display the data goes here
    document.getElementById('apiResponse').textContent = JSON.stringify(data, null, 2);
}
