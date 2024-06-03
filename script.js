function generateTable() {
    // Get rid of previous error messages
    const errorContainer = document.getElementById('errorContainer');
    errorContainer.innerHTML = '';

    // Get the input values
    const startRow = parseInt(document.getElementById('startRow').value);
    const endRow = parseInt(document.getElementById('endRow').value);
    const startCol = parseInt(document.getElementById('startCol').value);
    const endCol = parseInt(document.getElementById('endCol').value);

    let errorMessages = [];
    if (isNaN(startRow) || isNaN(endRow) || isNaN(startCol) || isNaN(endCol)) {
        errorMessages.push('Please enter valid numbers.');
    }
    if (startRow > endRow) {
        errorMessages.push('Start Row must be less than or equal to End Row.');
    }
    if (startCol > endCol) {
        errorMessages.push('Start Column must be less than or equal to End Column.');
    }
    if (startRow < -50 || endRow > 50 || startCol < -50 || endCol > 50) {
        errorMessages.push('Please enter numbers between -50 and 50.');
    }

    // Display error messages
    if (errorMessages.length > 0) {
        errorMessages.forEach(message => {
            const errorElement = document.createElement('p');
            errorElement.textContent = message;
            errorElement.style.color = 'red';
            errorContainer.appendChild(errorElement);
        });
        return;
    }

    // Generate the table
    let table = '<table><thead><tr><th class="fixed-header"></th>';
    for (let col = startCol; col <= endCol; col++) {
        table += `<th class="fixed-header">${col}</th>`;
    }
    table += '</tr></thead><tbody>';
    for (let row = startRow; row <= endRow; row++) {
        table += `<tr><th class="fixed-header">${row}</th>`;
        for (let col = startCol; col <= endCol; col++) {
            table += `<td>${row * col}</td>`;
        }
        table += '</tr>';
    }
    table += '</tbody></table>';

    // Show the table
    document.getElementById('tableContainer').innerHTML = table;
}