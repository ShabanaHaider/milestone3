// get links from html file
var form = document.getElementById('fillable-resume');
var resumeoutlookelement = document.getElementById('resume-outlook');
// look submission of form
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var work = document.getElementById('exp').value;
    var skills = document.getElementById('skill').value;
    // generate the resume content dynamically
    var resumeHTML = "\n<h1><b>Resume<b><h1>\n<h3>Personal Information</h3>\n<p><b>Name:<b>".concat(name, "</p>\n<p>Email:").concat(email, "</p>\n<p><b>Phone:<b>").concat(phone, "</p>\n\n<h3>Education</h3><p>").concat(education, "</p>\n\n<h3>Work Experience</h3><p>").concat(work, "</p>\n\n<h3>Skills</h3><p>").concat(skills, "</p>\n\n");
    // Display the generated resume
    if (resumeoutlookelement) {
        resumeoutlookelement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
