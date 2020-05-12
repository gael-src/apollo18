const employees = [
  {
    name: "Vadim",
    email: "vadim@apollo18.io",
    image:
      "https://avatars2.githubusercontent.com/u/55791337?s=400&u=d2c9d80449cb05ab7ae3f6f655f7040e9aaf0015&v=4",
    hobbies: ["code", "bmw", "work"],
  },
  {
    name: "Mariusz",
    email: "mariusz@apollo18.io",
    image:
      "https://avatars2.githubusercontent.com/u/50579679?s=400&u=fed1dbed99f748599dacf9260ebdbc7d666df50f&v=4",
    hobbies: ["code", "painting", "design"],
  },
  {
    name: "Niels",
    email: "niels@apollo18.io",
    image:
      "https://avatars1.githubusercontent.com/u/12913491?s=400&u=b311621271ea4c0a8e197eaeb5a5582c426ab2e8&v=4",
    hobbies: ["code", "music", "master"],
  },
  {
    name: "Pawel",
    email: "pawel@apollo18.io",
    image:
      "https://avatars1.githubusercontent.com/u/50579605?s=400&u=5d1af461ffea1f90cea292cd60c498bcc6622c07&v=4",
    hobbies: ["code", "cat", "done"],
  },
  {
    name: "Marco",
    email: "marco@apollo18.io",
    image: "https://avatars3.githubusercontent.com/u/55787638?s=400&v=4",
    hobbies: ["code", "twitch", "baby"],
  },
  {
    name: "Andreas",
    email: "andreas@apollo18.io",
    image: "https://avatars3.githubusercontent.com/u/50579748?s=400&v=4",
    hobbies: ["code", "rap", "beer"],
  },
  {
    name: "Michael",
    email: "michael@apollo18.io",
    image:
      "https://www.saarbruecker-zeitung.de/imgs/03/1/3/8/7/2/3/4/tok_eea62df758d98f24cd14c38116378100/w900_h724_x450_y362_sl-stachurski_spotgun.jpg_1970-G9O56QFDE.1-ORG_CCIDIM-106-48112f8d0db68f1a.jpg",
    hobbies: ["code", "vegan", "master"],
  },
  {
    name: "Melad",
    email: "melad@apollo18.io",
    image: "https://avatars0.githubusercontent.com/u/55791371?s=400&v=4",
    hobbies: ["code", "math", "music"],
  },
  {
    name: "Kinan",
    email: "kinan@apollo18.io",
    image: "https://avatars0.githubusercontent.com/u/57760356?s=400&v=4",
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
    image: "https://avatars2.githubusercontent.com/u/40263435?s=400&v=4",
    hobbies: ["code", "game", "done"],
  },
  {
    name: "Gaël",
    email: "gael@apollo18.io",
    image: "https://avatars2.githubusercontent.com/u/55788820?s=460&v=4",
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

  // INFO DIV
  let info = document.createElement("div");
  info.classList.add("info");

  // NAME
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
