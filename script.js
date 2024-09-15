const pattern = [
    "Small", "Small", "Big", "Big", "Big", "Small", "Small", "Big", 
    "Big", "Big", "Big", "Big", "Small", "Small", "Big", "Small", 
    "Small", "Big", "Big", "Small", "Small"
];

function setAppName() {
    const appName = document.getElementById('app-input').value.toLowerCase();
    const appTitle = document.getElementById('prediction-title');
    const appNameDisplay = document.getElementById('app-name');
    
    // Set app title dynamically based on user input
    if (appName !== '') {
        appTitle.textContent = appName + ' Hack';
    } else {
        alert('Please enter a valid app name.');
        return;
    }

    appNameDisplay.style.display = 'none';
    document.getElementById('app-input').style.display = 'none';
    document.getElementById('app-submit').style.display = 'none';
    document.getElementById('prediction-container').style.display = 'block';
}

function predict() {
    const periodNumber = parseInt(document.getElementById('period-input').value);
    if (isNaN(periodNumber) || periodNumber < 0 || periodNumber > 999) {
        alert('Please enter a valid number between 000 and 999.');
        return;
    }

    // Clear the previous prediction result
    const resultDiv = document.getElementById('prediction-result');
    resultDiv.style.display = 'none';
    resultDiv.textContent = '';

    // Show loading
    document.getElementById('loading').style.display = 'block';

    setTimeout(() => {
        // Hide loading
        document.getElementById('loading').style.display = 'none';

        // Calculate prediction
        const index = periodNumber % 21;
        const result = pattern[index];

        // Display new prediction
        resultDiv.textContent = result;
        resultDiv.style.display = 'block';

        if (result === "Big") {
            resultDiv.classList.remove('green');
            resultDiv.classList.add('red');
        } else {
            resultDiv.classList.remove('red');
            resultDiv.classList.add('green');
        }
    }, 2000);
}
