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
//Form
const messageForm = document.forms["leave_message"];
//add event listener
messageForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const usersName = event.target.userName.value;
  const usersEmail = event.target.userName.value;
  const usersMessage = event.target.usersMessage.value;

  console.log("Name:", usersName);
  console.log("Email:", usersEmail);
  console.log("Messgae:", usersMessage);
});
