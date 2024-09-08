//  resume output by suing typescript
document
  .getElementById('resumeForm')
  ?.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameElement = document.getElementById("name") as HTMLInputElement;
    const fatherNameElement = document.getElementById(
      "fatherName"
    ) as HTMLInputElement;
    const DateOfBirthElement = document.getElementById(
      "dateOFbirth"
    ) as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const addressElement = document.getElementById(
      "address"
    ) as HTMLInputElement;
    const educationElement = document.getElementById(
      "education"
    ) as HTMLInputElement;
    const experienceElement = document.getElementById(
      "experience"
    ) as HTMLInputElement;
    const skillsElement = document.getElementById("skills") as HTMLInputElement;

    if (
      nameElement &&
      fatherNameElement &&
      DateOfBirthElement &&
      emailElement &&
      phoneElement &&
      addressElement &&
      educationElement &&
      experienceElement &&
      skillsElement
    ) {
      const name = nameElement.value;
      const fathername = fatherNameElement.value;
      const dateofbirth = DateOfBirthElement.value;
      const email = emailElement.value;
      const phone = phoneElement.value;
      const address = addressElement.value;
      const education = educationElement.value;
      const experience = experienceElement.value;
      const skills = skillsElement.value;
      
// final output show when resume generate
      const resumeOutput = `
<h2> resume </h2>
<p> Name : ${name} <p>
<p> FatherName : ${fathername} <p>
<p> Date of birth : ${dateofbirth} <p>
<p> email : ${email} <p>
<p> phone : ${phone} <p>
<p> address : ${address} <p>
<h3> education</h3>
<p> ${education} <p>
<h3> experience</h3>
<p> ${experience} <p>
<h3> skills</h3>
<p> ${skills} <p>
`;
//  if else condition when the input field is missing
      const resumeOutputElement = document.getElementById('resumeOutput');
      if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
      } else {
        console.log("please write correct information");
      }
    } else {
      console.log("Some elemnt missing in input field");
    }
  });
