
let resume_data = {

  headline: "just another dude from the internet",
  "personal (simple)": {
    name: "Ivan",
    contact: "ivan@bogomolov.su",
    location: "Russia, Moscow"
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
      active: false,
      frameworks: ["Native"],
      experience: `${((new Date()).getYear() - (new Date(2017,1,1)).getYear())}`,
    },
    {
      language: "Golang",
      active: true,
      frameworks: ["Native"],
      experience: `${((new Date()).getYear() - (new Date(2017,1,1)).getYear())}`,
    },
    {
      language: "yaml",
      active: true,
      frameworks: ["🤪", "k8s", "ansible"],
      experience: `${((new Date()).getYear() - (new Date(2018,1,1)).getYear())}`,
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
            "Communications must have",
            "Networking is not so easy 😢",
          ],
          responsibility: "TransTelecom bought Vita with me. There I started at a tech support position, and talked with cutomers about something with goal to solve their problems, it was not so bad, but was too trivial. I started automating all I could and in the end grew to engineer position, in which I've created software for paying terminal, monitoring systems, network software auto-configuration system, wifi-authorizing system (it logins users to public wifi over sms) and so on."
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
            '"C" is used not only in university 😳',
            "Metrics & Analytics are important",
            "There are no unsolvable problems - this is all from a lack of knowledge"
          ],
          responsibility: "Part of summer I was helping Intel engineers by writing utility which generated special C code, for testing and auto-benchmarking icc's optimization"
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
          responsibility: "These guys promised me one thing, but actually we all did just the opposite thing which wasn't interesting for me"
        },
      },
      GeekBrains: {
        current: false,
        link: "geekbrains.ru",
        position: "lecturer",
        progress: {
          achievements: [
            "None of the students were hurt 🌈"
          ],
          responsibility: "Taught a 3 month advanced python course"
        },
      },
      "ArelloMobile, Pushwoosh later": {
        current: false,
        link: ["www.arello-mobile.com", "www.pushwoosh.com"],
        position: "developer, tech lead later",
        progress: {
          achievements: [
            {"Hard skills 🤖": [
              "Software architecture",
              "DevOps",
            ]},
            {"Soft skills 🤡": [
              "Time evaluation",
              "Risk assessment",
              "Data driven decisions",
            ]},
            {"Incident management": "Resolving incidents and their consequences"},
          ],
          responsibility: "Arello was an outsoursing company and there I solved very different projects, there were little web sites, medium web sites, one very big site with many components-microservices, WebGL and VR projects, in addition to web development we did tracking and analytics systems, we had own documentation auto-generating toolkit, own CI solution over Jenkins + docker and many other interesting things. Once upon a time our SEO/owner decided that horisontal business scaling was not as effective as we can be and we switched to own product - Pushwoosh. At first it was a simple hightload platform for delivering push-notification, but later we adopted another platforms and changed our direction to marketing cross-channel communications platform with more emphasis to statiscics & analytics (see details on site)."
        },
      },
      "lamoda": {
        current: true,
        link: ["https://www.lamoda.ru"],
        position: "dev, tech-lead",
        progress: {
          sell: {new: {architectural: {solutions: {}}}}
          teach: {},
          "???": {},
          "...": [],
          "PROFIT": "!"
        },
        responsibility: "Gave a new breath for tech side of loyalty program, maintenance customer communication service, incidents solver, and many other things",
      }
    }
  },
  "Accessible projects in which I was participated (real-world example)": [
    "software.intel.com/c-compilers/iss",
    "sbis.ru",
    "github.com/Arello-Mobile",
    "github.com/Pushwoosh",
    {
      conclusion: {
        "I'm": {
          "interested in": [
            "Computer science",
            "Hightload and distributed systems",
            "Software architecture and design",
            {
              "management": {
                "now": "working hard, but understand that can be much better",
                "future": "wants to develop in this direction",
              },
              "coding": {
                "now": "good 😉",
                "future": "needs to try to make own open source project, for example high performance lock-free cache for golang or distributed storage like Netflix/dynomite but better 😈",
              }
            },
          ],
        },
      },
    },
  ]

};

export default resume_data;
