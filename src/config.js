export const devHost = "127.0.0.:5500";
export const currentHost = window.location.host;
export const developmentMode = window.location.host === devHost;

const textColors = { light: "light", dark: "dark" };

export const projectItemList = [
  {
    name: "Portfolio Website",
    url: "https://github.com/TylerSwindell/Portfolio",
    image: "projects-portfolio.png",
    textColor: textColors.light,
    desc: "Built to showcase my technical, creative and web design skill sets along with my projects.",
    tech: "Designed in Abode XD and built using HTML5, CSS3, and Javascript(ES6).",
  },
  {
    name: "Stroop Stress Task",
    url: "https://demo-stroop.netlify.app/",
    image: "projects-stroop_test.png",
    textColor: textColors.light,
    desc: "Developed to measure a person’s selective attention capacity/skills and processing speed. Log into the site using the test account now:<br><br>Email: admin@test.com | Password: admin123",
    tech: "Built using ReactJS, Bootstrap, Firestore and Firebase Auth.",
  },
  {
    name: "Space Ball Shooter",
    url: "https://tylerswindell.github.io/BallShooter/",
    image: "projects-ball_shooter.png",
    textColor: textColors.light,
    desc: "An arcade style space shooter built in HTML Canvas and Javascript.",
    tech: "Developed without the use of preexisting code frameworks or templates.",
  },
  {
    name: "LaunchX",
    url: "https://github.com/TylerSwindell/LaunchX",
    image: "projects-launchx.png",
    textColor: textColors.light,
    desc: "LaunchX is a mobile app Utilizing SpaceX’s public API to display and track upcoming and past SpaceX light information.",
    tech: "Developed using React Native with Expo, as well as React Redux.",
  },
];
