var _a;
// listing elements
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    //type assertion
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var postalAddElement = document.getElementById('postalAdd');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var skillsElement = document.getElementById('skills');
    var experienceElement = document.getElementById('experience');
    if (nameElement && emailElement && postalAddElement && phoneElement && educationElement && skillsElement && experienceElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var address = postalAddElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var skills = skillsElement.value;
        var experience = experienceElement.value;
        //create resume output
        var resumeOutput = "\n    <h2>Resume</h2>\n    <p><strong>Name:</strong> ".concat(name_1, "</p>\n    <p><strong>Email:</strong> ").concat(email, "</p>\n    <p><strong>Postal Address:</strong> ").concat(address, "</p>\n    <p><strong>Phone Number:</strong> ").concat(phone, "</p>\n\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n\n    <h3>Work Experience</h3>\n    <p>").concat(experience, "</p>\n\n ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('the resume output element are missing');
        }
    }
    else {
        console.error('one or more output element are missing');
    }
});
