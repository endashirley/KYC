document.getElementById('screening-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const country = document.getElementById('country').value;
    
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = 'Screening in progress...';
    
    try {
        const watchlistResponse = await fetch(`https://api.example.com/aml_watchlist?name=${name}`);
        const watchlistData = await watchlistResponse.json();
        
        const countryRiskResponse = await fetch(`https://api.example.com/country_risk?country=${country}`);
        const countryRiskData = await countryRiskResponse.json();
        
        resultsDiv.innerHTML = `
            <h2>Screening Results</h2>
            <h3>Watchlist</h3>
            <pre>${JSON.stringify(watchlistData, null, 2)}</pre>
            <h3>Country Risk</h3>
            <pre>${JSON.stringify(countryRiskData, null, 2)}</pre>
        `;
    } catch (error) {
        resultsDiv.innerHTML = 'An error occurred while screening. Please try again.';
        console.error('Error:', error);
    }
});