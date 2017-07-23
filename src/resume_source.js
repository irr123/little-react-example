
let resume_data = {

  headline: "just another man somewhere in internet",
  personal: {
    name: "Ivan",
    contact: "ivan@bogomolov.su",
    location: "Russia, Novosibirsk"
  },
  skills: [
    {
      language: "Python",
      frameworks: ["Flask", "Django", "AsyncIO"],
      experience: `${((new Date()).getYear() - (new Date('01.01.2013')).getYear())} years`,
    },
    {
      language: "JavaScript",
      frameworks: ["Jquery", "Angular", "React"],
      experience: `${((new Date()).getYear() - (new Date('01.01.2014')).getYear())} years`,
    }
  ],
  experience: {
    ISP: {
      "Vita+, later TransTelecom": {
        current: false,
        link: "http://myttk.ru",
        position: "network engineer"
      }
    },
    Development: {
      Intel: {
        current: false,
        link: "http://intel.com",
        position: "trainee"
      },
      Tensor: {
        current: false,
        link: "http://tensor.ru/",
        position: "fullstack web developer"
      },
      ArelloMobile: {
        current: true,
        link: "http://www.arello-mobile.com/",
        position: "fullstack web developer"
      }
    }
  },
  "Accessible projects in which I was participated": [
    "https://software.intel.com/c-compilers/iss",
    "https://sbis.ru/",
    "https://github.com/Arello-Mobile"
  ]

};

export default resume_data;
