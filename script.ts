// get links from html file
const form=document.getElementById('fillable-resume')as HTMLFormElement;
const resumeoutlookelement=document.getElementById('resume-outlook')as HTMLDivElement;

// look submission of form
form.addEventListener('submit',(event:Event)=> {
event.preventDefault(); 


// collect input values

const name=(document.getElementById('name') as HTMLInputElement).value
const email=(document.getElementById('email') as HTMLInputElement).value
const phone=(document.getElementById('phone') as HTMLInputElement).value
const education=(document.getElementById('education') as HTMLInputElement).value
const work=(document.getElementById('exp') as HTMLInputElement).value
const skills=(document.getElementById('skill') as HTMLInputElement).value


// generate the resume content dynamically

const resumeHTML =`
<h1><b>Resume<b><h1>
<h3>Personal Information</h3>
<p><b>Name:<b>${name}</p>
<p>Email:${email}</p>
<p><b>Phone:<b>${phone}</p>

<h3>Education</h3><p>${education}</p>

<h3>Work Experience</h3><p>${work}</p>

<h3>Skills</h3><p>${skills}</p>

`;

// Display the generated resume
if (resumeoutlookelement){
    resumeoutlookelement.innerHTML = resumeHTML;
} 

else {
    console.error('The resume display element is missing.');
}



});


