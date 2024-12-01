// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Jitendra",
  middleName: "",
  lastName: "Singh",
  message:
    " “The more I learn, the more I realize how much I don't know.” - Albert Einstein ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/jitushadow",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/jitendrasingh26",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/jitu.jpg"),
  imageSize: 375,
  message:
    "My name is Jitendra Singh. I’m a graduate of 2025 from Rungta College of Engineering and Technology Bhilai with a degree in Computer Science and Engineering. ",
  resume:
    "https://drive.google.com/file/d/1bzAKJUeP0wizkrECiCil_3FjM7SzeuME/view?usp=sharing",
};

const repos = {
  show: false,
  heading: "Recent Projects",
  gitHubUsername: "jitushadow", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 50 },
    { name: "SQL", value: 30 },
    { name: "Data Structures", value: 70 },
    { name: "C/C++", value: 50 },
    { name: "JavaScript", value: 80 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 70 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "jitushadow26@gmail.com",
};

export { navBar, mainBody, about, repos, skills, getInTouch };
