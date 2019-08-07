
let resume_data = {

  headline: "just another man somewhere in internet",
  "personal (simple)": {
    name: "Ivan",
    contact: "ivan@bogomolov.su",
    location: "Russia, Novosibirsk"
  },
  "skills (array with nested objects)": [
    {
      language: "Python",
      active: false,
      frameworks: ["Flask", "Django", "AsyncIO"],
      experience: `${((new Date(2017,1,1)).getYear() - (new Date(2013,1,1)).getYear())}`,
    },
    {
      language: "JavaScript",
      active: false,
      frameworks: ["Jquery", "Angular", "React"],
      experience: `${((new Date(2017,1,1)).getYear() - (new Date(2014,1,1)).getYear())}`,
    },
    {
      language: "PHP",
      active: true,
      frameworks: ["Native"],
      experience: `${((new Date()).getYear() - (new Date(2017,1,1)).getYear())}`,
    },
    {
      language: "Golang",
      active: true,
      frameworks: ["Native"],
      experience: `${((new Date()).getYear() - (new Date(2017,1,1)).getYear())}`,
    },
  ],
  "experience (multi-level nested objects)": {
    ISP: {
      "Vita+, TransTelecom later": {
        current: false,
        link: "myttk.ru",
        position: "engineer",
        responsibility: "",
      }
    },
    Development: {
      Intel: {
        current: false,
        link: "intel.com",
        position: "trainee",
        responsibility: "",
      },
      Tensor: {
        current: false,
        link: "tensor.ru",
        position: "fullstack web developer",
        responsibility: "",
      },
      "ArelloMobile, Pushwoosh later": {
        current: true,
        link: ["www.arello-mobile.com", "www.pushwoosh.com"],
        position: "developer, tech lead later",
        responsibility: "",
      }
    }
  },
  "Accessible projects in which I was participated (real)": [
    "software.intel.com/c-compilers/iss",
    "sbis.ru/",
    "github.com/Arello-Mobile",
    "github.com/Pushwoosh",
    {
      conclusion: "Funny words",
    },
  ]

};

export default resume_data;
