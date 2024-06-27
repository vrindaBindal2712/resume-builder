document.getElementById('resumeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    // Validate phone number (10 digits)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        alert('Phone number must be exactly 10 digits.');
        return;
    }

    // Validate email (must contain @ and a domain)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    generateResume();
});

function addEducation() {
    const container = document.getElementById('educationContainer');
    const entry = document.createElement('div');
    entry.classList.add('entry');
    entry.innerHTML = `
        <textarea name="education" class="education"></textarea>
        <button type="button" class="delete-btn" onclick="deleteEntry(this)">Delete</button>
    `;
    container.appendChild(entry);
}

function addExperience() {
    const container = document.getElementById('experienceContainer');
    const entry = document.createElement('div');
    entry.classList.add('entry');
    entry.innerHTML = `
        <textarea name="experience" class="experience"></textarea>
        <button type="button" class="delete-btn" onclick="deleteEntry(this)">Delete</button>
    `;
    container.appendChild(entry);
}

function addSkills() {
    const container = document.getElementById('skillsContainer');
    const entry = document.createElement('div');
    entry.classList.add('entry');
    entry.innerHTML = `
        <textarea name="skills" class="skills"></textarea>
        <button type="button" class="delete-btn" onclick="deleteEntry(this)">Delete</button>
    `;
    container.appendChild(entry);
}

function deleteEntry(button) {
    const entry = button.parentElement;
    entry.remove();
}

function generateResume() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const educationElements = document.querySelectorAll('.education');
    const experienceElements = document.querySelectorAll('.experience');
    const skillsElements = document.querySelectorAll('.skills');

    let educationContent = '';
    educationElements.forEach(element => {
        educationContent += `<p>${element.value}</p>`;
    });

    let experienceContent = '';
    experienceElements.forEach(element => {
        experienceContent += `<p>${element.value}</p>`;
    });

    let skillsContent = '';
    skillsElements.forEach(element => {
        skillsContent += `<p>${element.value}</p>`;
    });

    const resumeContent = `
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                h1 { text-align: center; }
                h2 { border-bottom: 1px solid #ccc; padding-bottom: 5px; }
                .section { margin-bottom: 20px; }
            </style>
        </head>
        <body>
            <h1>${name}</h1>
            <div class="section">
                <h2>Contact Information</h2>
                <p>Email: ${email}</p>
                <p>Phone: ${phone}</p>
                <p>Address: ${address}</p>
            </div>
            <div class="section">
                <h2>Education</h2>
                ${educationContent}
            </div>
            <div class="section">
                <h2>Experience</h2>
                ${experienceContent}
            </div>
            <div class="section">
                <h2>Skills</h2>
                ${skillsContent}
            </div>
        </body>
        </html>
    `;

    const previewFrame = document.getElementById('resumePreview');
    previewFrame.srcdoc = resumeContent;
}

function downloadResume() {
    const previewFrame = document.getElementById('resumePreview');
    const resumeContent = previewFrame.srcdoc;

    const blob = new Blob([resumeContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resume.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
