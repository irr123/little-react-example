
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
            "Communications must have",
            "Networking is not so easy 😢",
          ],
          responsibility: "TransTelecom bought Vita with me. There I was started as a tech support position, and talk with cutomers about something with goal to solve they problems, it was not so bad, but is too trivial. I started automating all what I can and in the end grow to engineer position, in which I've done software for paying terminal, monitoring systems, network software auto-configuration system, wifi-authorizing system (it login users to public wifi over sms) and so on."
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
            "Metrics & Analytics is important",
            "There are no unsolvable problems - this is all from a lack of knowledge"
          ],
          responsibility: "Part of summer I'm helping Intel engineers by writing utility which generates special C code, for testing and auto-benchmarking icc's optimization"
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
          responsibility: "These guys promise to me one things, but actually we all do opposite things which isn't interesting for me"
        },
      },
      "ArelloMobile, Pushwoosh later": {
        current: true,
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
          responsibility: "Arello was outsoursing company and there I solved very different things, it was a little web sites, medium web sites, one very big site with many components-microservices, WebGL and VR projects, except web development we done tracking and analytics systems, we had own documentation auto-generating toolkit, own CI solution over Jenkins + docker and many other interesting things. Time was gone and our SEO/owner decided that horisontal busines scaling not so effective as we can be and we switched to own product - Pushwoosh. At first it was an a hight load platform for deliver push-notification, but later we adopted another platforms and changed our direction to marketing communications platform with more emphasis to statiscics & analytics. Now we support 15+ communications channel, hard working on data lake, CDP and analog of SalesForce's Journey Builder."
        },
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
            "Hight load systems",
            "Software architecture and design",
            {
              "management": {
                "now": "working hard, but understand that can be much better",
                "future": "wants to develop in this direction",
              },
              "coding": {
                "now": "good 😉",
                "future": "needs to try to make own open source project, for example hight performance lock-free cache for golang or distributed storage like Netflix/dynomite but better 😈",
              }
            },
          ],
        },
      },
    },
  ]

};

export default resume_data;
