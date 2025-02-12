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

const messageSection = document.getElementById("messages");
const messageList = messageSection.querySelector("ul");

//creates new list item for message 
const newMessage = document.createElement("li");
newMessage.innerHTML= 
<a href="mailto:${usersEmail}">${usersName}</a>:
<span>${usersMessage}</span>
;

//remove button
const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.setAttribute("type", "button"); 

//add event listener to remove button when clicked
removeButton.addEventListener("click", function() {
    const entry = removeButton.parentNode;
    entry.remove();
});
   // Add event listener to remove the message when clicked
   removeButton.addEventListener("click", function () {
    const entry = removeButton.parentNode; // Find parent <li>
    entry.remove(); // Remove message from the DOM
});
   // Append the remove button to the message item
   newMessage.appendChild(removeButton);

   // Append the new message to the message list
   messageList.appendChild(newMessage);

   // Reset the form fields
   messageForm.reset();
