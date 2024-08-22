function fetchDomainData(domain) {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; // Use with caution!
    const apiUrl = `https://api.domaintools.com/v1/domaintools.com/whois/${domain}`;

    fetch(proxyUrl + apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
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
