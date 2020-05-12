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
    image:
      "https://avatars1.githubusercontent.com/u/54753921?s=400&u=3f9d8dcfb34642fee1108b80085ca7ff8b270009&v=4",
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

// BODY
const bodyEl = document.querySelector("body");

// MAIN DIV
const mar = document.querySelector(".employees");

// FUNCTION
employees.map((employee) => {
  // CARD DIV
  let employeeDiv = document.createElement("div");
  employeeDiv.classList.add("kinder");

  // IMAGE
  let image = document.createElement("img");

  // CARD DIV
  let info = document.createElement("div");
  info.classList.add("info");

  // NAME P
  let paragraph = document.createElement("p");
  paragraph.classList.add("name");
  image.setAttribute("src", employee.image);
  paragraph.innerText = employee.name;

  // MAIL LINK
  let link = document.createElement("a");
  link.classList.add("email");
  link.setAttribute("href", `mailto: ${employee.email}`);
  link.innerText = employee.email;

  // LIST
  let lists = document.createElement("ul");
  lists.classList.add("hobbies");
  employee.hobbies.forEach((hobbie) => {
    lists.innerHTML += `<li>${hobbie}</li>`;
  });

  // APPENCHILD
  info.appendChild(paragraph);
  info.appendChild(link);
  info.appendChild(lists);
  employeeDiv.appendChild(image);
  employeeDiv.appendChild(info);
  mar.appendChild(employeeDiv);
});
