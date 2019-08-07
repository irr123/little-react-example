
let resume_data = {

  headline: "just another dude from the internet",
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
        progress: {
          achievements: [
            "I found first serious job!",
            "Networking is not so easy :'(",
            "Communications must have",
          ],
          responsibility: ""
        },
      }
    },
    Development: {
      Intel: {
        current: false,
        link: "intel.com",
        position: "trainee",
        progress: {
          achievements: [
            '"C" used in real life o_0',
            "Metrics & Analytics is important",
            "There are no unsolvable problems - this is all from a lack of knowledge"
          ],
          responsibility: ""
        },
      },
      Tensor: {
        current: false,
        link: "tensor.ru",
        position: "fullstack web developer",
        progress: {
          achievements: [
            "Not all offers are worth accepting"
          ],
          responsibility: ""
        },
      },
      "ArelloMobile, Pushwoosh later": {
        current: true,
        link: ["www.arello-mobile.com", "www.pushwoosh.com"],
        position: "developer, tech lead later",
        progress: {
          achievements: [
            {"Hard skills": [
              "Software architecture",
              "DevOps",
            ]},
            {"Soft skills": [
              "Time evaluation",
              "Risk assessment",
              "Data driven decisions",
            ]},
            {"Incident management": "Resolving incidents and their consequences"},
          ],
          responsibility: ""
        },
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
