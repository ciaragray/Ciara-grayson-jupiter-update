const body = document.body;
const footer = document.createElement("footer");
footer.innerHTML = `<P>&copy; ${new Date().getFullYear()} Ciara Grayson's Portfolio | All Rights Reserved</P>`;
body.appendChild(footer);
const skills = ["Javascript", "HTML", "CSS", "SQL","Github"];
const skillsSection = document.querySelector("#Skills");
const skillsList = skillsSection.querySelector("ul"); 
for(let i = 0; i<skills.length; i++) {
    const skill= document.createElement("li");
    skill.innerText= skills[i];
    skillsList.appendChild(skill);
}
