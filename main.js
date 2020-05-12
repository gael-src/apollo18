const employees = [
  {
    name: "Vadim",
    email: "vadim@apollo18.io",
    image: "./assets/vadim.jpeg",
    hobbies: ["code", "bmw", "work"],
  },
  {
    name: "Mariusz",
    email: "mariusz@apollo18.io",
    image: "./assets/mariusz.jpeg",
    hobbies: ["code", "painting", "design"],
  },
  {
    name: "Niels",
    email: "niels@apollo18.io",
    image: "./assets/niels.jpeg",
    hobbies: ["code", "music", "master"],
  },
  {
    name: "Pawel",
    email: "pawel@apollo18.io",
    image: "./assets/pawel.jpeg",
    hobbies: ["code", "cat", "done"],
  },
  {
    name: "Marco",
    email: "marco@apollo18.io",
    image: "./assets/marco.jpeg",
    hobbies: ["code", "twitch", "baby"],
  },
  {
    name: "Andreas",
    email: "andreas@apollo18.io",
    image: "./assets/andreas.jpeg",
    hobbies: ["code", "rap", "beer"],
  },
  {
    name: "Michael",
    email: "michael@apollo18.io",
    image: "./assets/micha.jpeg",
    hobbies: ["code", "vegan", "master"],
  },
  {
    name: "Melad",
    email: "melad@apollo18.io",
    image: "./assets/melad.jpeg",
    hobbies: ["code", "math", "music"],
  },
  {
    name: "Kinan",
    email: "kinan@apollo18.io",
    image: "./assets/kinan.jpeg",
    hobbies: ["code", "sleep", "laugh"],
  },
  {
    name: "Victoria",
    email: "victoria@apollo18.io",
    image: "./assets/victoria.jpeg",
    hobbies: ["code", "brat", "design"],
  },
  {
    name: "Majd",
    email: "majd@apollo18.io",
    image: "./assets/majd.jpeg",
    hobbies: ["code", "game", "done"],
  },
  {
    name: "Gaël",
    email: "gael@apollo18.io",
    image: "./assets/gael.jpeg",
    hobbies: ["code", "ask", "design"],
  },
];

let employeesContainer = document.querySelector(".employees");
// LOOP FUNCTION
for (empObject of employees) {
  // MAIN DIV
  let employeeDiv = document.createElement("div");
  employeeDiv.classList.add("employee");
  employeesContainer.appendChild(employeeDiv);

  // IMAGE
  let image = document.createElement("img");
  image.classList.add("image");
  image.setAttribute("src", empObject.image);
  employeesContainer.appendChild(image);

  // NAME
  let nameHeader = document.createElement("h2");
  nameHeader.classList.add("name");
  nameHeader.innerText = empObject.name;
  employeeDiv.appendChild(nameHeader);

  // MAIL LINK
  let nameEmail = document.createElement("a");
  nameEmail.classList.add("email");
  nameEmail.setAttribute("href", `mailto: ${empObject.email}`);
  nameEmail.innerText = empObject.email;
  employeeDiv.appendChild(nameEmail);

  // LIST
  let hobbies = document.createElement("ul");
  hobbies.classList.add("hobbies");
  employeeDiv.appendChild(hobbies);

  // LIST ELEMENT
  empObject.hobbies.forEach((hobbie) => {
    hobbies.innerHTML += `<li>${hobbie}</li>`;
  });
  
}
