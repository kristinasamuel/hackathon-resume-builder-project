var _a;
(_a = document
    .getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    var nameElement = document.getElementById("name");
    var fatherNameElement = document.getElementById("fatherName");
    var DateOfBirthElement = document.getElementById("dateOFbirth");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var addressElement = document.getElementById("address");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    if (nameElement &&
        fatherNameElement &&
        DateOfBirthElement &&
        emailElement &&
        phoneElement &&
        addressElement &&
        educationElement &&
        experienceElement &&
        skillsElement) {
        var name_1 = nameElement.value;
        var fathername = fatherNameElement.value;
        var dateofbirth = DateOfBirthElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var address = addressElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        //output
        var resumeOutput = "\n<h2> resume </h2>\n<p> Name : ".concat(name_1, " <p>\n<p> FatherName : ").concat(fathername, " <p>\n<p> Date of birth : ").concat(dateofbirth, " <p>\n<p> email : ").concat(email, " <p>\n<p> phone : ").concat(phone, " <p>\n<p> address : ").concat(address, " <p>\n<h3> education</h3>\n<p> ").concat(education, " <p>\n<h3> experience</h3>\n<p> ").concat(experience, " <p>\n<h3> skills</h3>\n<p> ").concat(skills, " <p>\n");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.log("the resume output is missing");
        }
    }
    else {
        console.log("one or more outputelement are missing");
    }
});
