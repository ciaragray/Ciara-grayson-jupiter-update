//creating footer
const body = document.body;
const footer = document.createElement("footer");
const today = new Date();
const thisYear = today.getFullYear();
footer.innerHTML = `<P>&copy; ${thisYear} Ciara Grayson's Portfolio | All Rights Reserved</P>`;
body.appendChild(footer);
// creating skills
const skills = ["Javascript", "HTML", "CSS", "SQL", "Github"];
const skillsSection = document.querySelector("#Skills");
const skillsList = skillsSection.querySelector("ul");
for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}
