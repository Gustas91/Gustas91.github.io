function validateRange(input) {
    const value = parseInt(input.value, 10);
    if (value > 10) {
        input.value = 10; 
    } else if (value < 1) {
        input.value = 1;
    }
}

function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/; 
    return emailPattern.test(email);
}

function validatePhone(phone) {
    const phonePattern = /^[0-9]{10,15}$/; 
    return phonePattern.test(phone);
}

function validateAddress(address) {
    return address.trim().length >= 5; 
}

function submitForm() {
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    
    if (!validateEmail(email)) {
        alert('Please enter a valid Gmail address.');
        return;
    }

    if (!validatePhone(phone)) {
        alert('Please enter a valid telephone number (10-15 digits).');
        return;
    }

    if (!validateAddress(address)) {
        alert('Please enter a valid address (at least 5 characters).');
        return;
    }

    
    const formData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        address: address,
        responses: [
            parseInt(document.getElementById('q1').value, 10),
            parseInt(document.getElementById('q2').value, 10),
            parseInt(document.getElementById('q3').value, 10),
            parseInt(document.getElementById('q4').value, 10),
            parseInt(document.getElementById('q5').value, 10)
        ]
    };

    
    const average = (formData.responses.reduce((sum, num) => sum + num, 0) / formData.responses.length).toFixed(2);

    let averageColor;
    if (average <= 4) {
        averageColor = 'red'; 
    } else if (average <= 7) {
        averageColor = 'orange'; 
    } else {
        averageColor = 'green'; 
    }

    
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = ''; 

    const fields = [
        { name: 'First Name', value: formData.firstName },
        { name: 'Last Name', value: formData.lastName },
        { name: 'Gmail Address', value: formData.email },
        { name: 'Telephone Number', value: formData.phone },
        { name: 'Address', value: formData.address },
        { name: 'Question 1', value: formData.responses[0] },
        { name: 'Question 2', value: formData.responses[1] },
        { name: 'Question 3', value: formData.responses[2] },
        { name: 'Question 4', value: formData.responses[3] },
        { name: 'Question 5', value: formData.responses[4] }
    ];

    
    fields.forEach(field => {
        const row = document.createElement('div');
        row.classList.add('result-row');
        row.innerHTML = `<span class="field-name">${field.name}:</span> ${field.value}`;
        resultsContainer.appendChild(row);
    });

    
    const averageContainer = document.getElementById('averageContainer');
    averageContainer.innerHTML = `<div class="average-row" style="color: ${averageColor};">${formData.firstName} ${formData.lastName} (${formData.email}): Average = ${average}</div>`;


    
    alert('Form Submitted Successfully!');
}