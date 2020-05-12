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
bodyEl.style.margin = "0";
bodyEl.style.padding = "0";
bodyEl.style.boxSizing = "border-box";
bodyEl.style.backgroundColor = "#fbd14b";
bodyEl.style.textAlign = "center";
bodyEl.style.fontFamily = "arial";

// H1 TITLE
// bodyEl.style.maxWidth = "100vw";
// let title = document.createElement("h1");
// title.classList.add("title");
// title.innerText = "Apollo 18";

// MAIN DIV
const mar = document.querySelector(".employees");
mar.style.minHeight = "80vh";
// mar.style.maxWidth = "100vw";
mar.style.color = "#fbd14b";
mar.style.fontWeight = "bold";
mar.style.display = "flex";
mar.style.flexDirection = "column";
mar.style.justifyContent = "space-evenly";
mar.style.alignItems = "center";
mar.style.textAlign = "center";

// FUNCTION
employees.map((employee) => {
  // create elements
  let employeeDiv = document.createElement("div");
  employeeDiv.classList.add("kinder");
  employeeDiv.style.backgroundColor = "#6a60a9";
  employeeDiv.style.width = "250px";
  employeeDiv.style.padding = "2px";
  employeeDiv.style.margin = "100px";
  // employeeDiv.style.display = "flex";
  // employeeDiv.style.flexDirection = "column";
  // employeeDiv.style.justifyContent = "center";
  // employeeDiv.style.alignItems = "center";
  // employeeDiv.style.margin = 'auto';

  // IMAGE
  let image = document.createElement("img");

  // INFO DIV
  let info = document.createElement("div");
  info.classList.add("info");

  // NAME
  let paragraph = document.createElement("p");
  paragraph.classList.add("name");
  image.setAttribute("src", employee.image);
  image.style.width = "100%";
  image.style.height = "310px";
  paragraph.innerText = employee.name;
  paragraph.style.fontSize = "22px";
  paragraph.style.color = "#dedcee";

  // MAIL LINK
  let link = document.createElement("a");
  link.classList.add("email");
  link.setAttribute("href", `mailto: ${employee.email}`);
  link.innerText = employee.email;
  link.style.color = "#fbd14b";
  link.style.textDecoration = "none";
  link.style.fontSize = "16px";

  // LIST
  let lists = document.createElement("ul");
  lists.classList.add("hobbies");

  employee.hobbies.forEach((hobbie) => {
    lists.innerHTML += `<li>${hobbie}</li>`;
    lists.style.fontSize = "14px";
    lists.style.fontWeight = "normal";
    lists.style.listStyle = "none";
    lists.style.padding = "0";
    lists.style.margin = "20px 0 35px 0";
  });

  // APPENCHILD
  info.appendChild(paragraph);
  info.appendChild(link);
  info.appendChild(lists);
  employeeDiv.appendChild(image);
  employeeDiv.appendChild(info);
  mar.appendChild(employeeDiv);
});
