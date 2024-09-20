document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Capture form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const contactMethod = document.getElementById('contactMethod').value;
    const termsAccepted = document.getElementById('terms').checked;

    // Validate data
    let feedback = '';
    if (!name || !email || !contactMethod || !termsAccepted) {
        feedback = 'All fields are required.';
    } else if (!validateEmail(email)) {
        feedback = 'Please enter a valid email address.';
    } else {
        feedback = 'Form submitted successfully!';
        displaySummary(name, email, contactMethod);
    }

    // Display feedback
    document.getElementById('formFeedback').textContent = feedback;
});

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Display summary of form data
function displaySummary(name, email, contactMethod) {
    const summaryDiv = document.getElementById('formSummary');
    summaryDiv.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Preferred Contact Method:</strong> ${contactMethod}</p>
    `;
}

// Real-time feedback
document.getElementById('email').addEventListener('input', function() {
    const email = this.value;
    if (!validateEmail(email)) {
        document.getElementById('formFeedback').textContent = 'Invalid email format.';
    } else {
        document.getElementById('formFeedback').textContent = '';
    }
});
