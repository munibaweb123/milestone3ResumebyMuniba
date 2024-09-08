// listing elements
document.getElementById('resumeForm')?.addEventListener('submit',function(event){
    event.preventDefault();

    //type assertion
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const postalAddElement = document.getElementById('postalAdd') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;

    if(nameElement && emailElement && postalAddElement && phoneElement && educationElement && skillsElement && experienceElement){
        const name = nameElement.value;
        const email = emailElement.value;
        const address = postalAddElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const skills= skillsElement.value;
        const experience = experienceElement.value;

    

    //create resume output
    const resumeOutput = `
    <h2>Resume</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Postal Address:</strong> ${address}</p>
    <p><strong>Phone Number:</strong> ${phone}</p>

    <h3>Education</h3>
    <p>${education}</p>

    <h3>Skills</h3>
    <p>${skills}</p>

    <h3>Work Experience</h3>
    <p>${experience}</p>

 `;

 const resumeOutputElement = document.getElementById('resumeOutput') as HTMLDivElement;
 if(resumeOutputElement){
    resumeOutputElement.innerHTML = resumeOutput
 }

    else{
        console.error('the resume output element are missing')
    }
}else{
    console.error('one or more output element are missing')

}
    }
)