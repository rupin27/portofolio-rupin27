import {
    mobile,
    backend,
    creator,
    web,
    nara,
    faceRecognition,
    connect4,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    python,
    mysql,
    linux,
    reactnative,
    jira,
    java,
    firebase,
    cplusplus,
    c,
    aws,
    api,
    meta,
    starbucks,
    tesla,
    shopify,
    elucidata,
    naralytics,
    UMass,
    gyouReLee,
    rohitJagre,
    krusell,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";

  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Software Engineer",
      icon: creator,
    },
    {
      title: "Full-Stack Developer",
      icon: mobile,
    },
    {
      title: "Software Developer",
      icon: backend,
    },
    {
      title: "Web Developer",
      icon: web,
    },
  ];
  
  const technologies = [
    {
      name: "Python",     //Done
      icon: python,
    },
    {
      name: "Java",      //Done
      icon: java,
    },
    {
      name: "C++",        //Done
      icon: cplusplus,
    },
    {
      name: "JavaScript",    //Done
      icon: javascript,
    },
    {
      name: "Node.js",     //Done
      icon: nodejs,
    },
    {
      name: "HTML 5",         //Done
      icon: html,
    },
    {
      name: "CSS3",           //Done
      icon: css,      
    },
    {
      name: "React Native",       //Done
      icon: reactnative,
    },
    {
      name: "REST API",          //Done
      icon: api,
    },
    {
      name: "SQL",               //Done
      icon: mysql,
    },
    {
      name: "MongoDB",       //Done
      icon: mongodb,
    },
    {
      name: "AWS",             //Done
      icon: aws,
    },
    {
      name: "Firebase",          //Done
      icon: firebase,
    },
    {
      name: "Git",            //Done
      icon: git,
    },
    {
      name: "Docker",          //Done
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer Intern",
      company_name: "Naralytics",
      icon: naralytics,
      iconBg: "#383E56",
      date: "May 2022 - Present",
      points: [
        "Developed a React Native application with custom UI/UX components ensuring versatility and code reusability across iOS and Android platforms and, more importantly, improving performance by reducing load-time by ~4s.",
        "Introduced a login authentication flow and payment setup using Firebase for Google-backed security.",
        "Notable: Emotional Recognition and Sentimental Analysis BERT Model",
        "Developed a labeling model utilizing libraries like transformers, torch-vision, PyTorch lightning, numpy, pandas, and the BERT language model for psychometric assessments and HUMINT analysis.",
        "Trained the model using AWS EC2 instance, effectively predicting sentiments on raw text and generating a labeled dataset with a sentiment prediction accuracy of 95%.",
        "Conducted testing of the classifiers against reversed training data, employing multiple evaluation metrics such as Jaccard Score, Hamming Loss, F-1, and AUC.",
      ],
    },
      {
      title: "CICS (College of Information and Computer Science) Mentor",
      company_name: "University of Massachusetts Amherst",
      icon: UMass,
      iconBg: "#E6DEDD",
      date: "Aug 2021 - May 2023",
      points: [
        "Mentored students in an academic computer science context, fostering cultural competency and professional growth.",
        "Engaged in leadership opportunities to support students' confidence and advancement in the computing profession.",
        "Utilized negotiation, communication, and conflict management skills to facilitate effective discussions.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Elucidata",
      icon: elucidata,
      iconBg: "#E6DEDD",
      date: "May 2020 - Sep 2020",
      points: [
        "Developed and maintained software systems and computing infrastructure utilizing Java and JavaScript, while effectively identifying and resolving defects through troubleshoots, supporting data architecture, and generating reports.",
        "Actively participated in Agile(Scrum) methodologies, engaging in optimizing memory consumption employing techniques such as memoization and memory pooling, resulting in an enhancement in runtime performance by up to 30%.",
        "Leveraged SQL query tools and frameworks to develop and manage database operations, ensuring efficient data storage and retrieval.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Working with Rupin was a delight; his tenacity, adaptability, and remarkable results laid a solid foundation for subsequent product development.",
      name: "Gyou-Re Lee",
      designation: "CEO/ Founder",
      company: "Naralytics Inc.",
      image: gyouReLee,
    },
    {
      testimonial:
        "Rupin at Elucidata showcased exceptional skills and dedication, driving significant improvements in software performance and data management. Highly recommended!",
      name: "Rohit Jagre",
      designation: "Technical Lead",
      company: "Elucidata",
      image: rohitJagre,
    },
    {
      testimonial:
        "Rupin's exceptional mentorship skills and impactful leadership make him an invaluable asset to any organization.",
      name: "Brian Krusell",
      designation: "Director of Career & Student Development",
      company: "UMass Amherst",
      image: krusell,
    },
  ];
  
  const projects = [
    {
      name: "Naralytics",
      description: "Naralytics is a groundbreaking personal, private relationship path finder app that empowers users to navigate the complexities of relationships, providing valuable insights and actionable advice to foster meaningful connections and enhance personal growth.",
      tags: [
        {
          name: "react native",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "aws",
          color: "orange-text-gradient",
        },
      ],
      image: nara,
      source_code_link: "https://www.naralytics.com/",
    },
    {
      name: "Face Recognition GUI App",
      description:
        "The Face Recognition GUI Application is a Python-based solution developed for seamless user interactions and large-scale security authentication. It incorporates a Tinker-based GUI and utilizes a trained Convolutional Neural Network (CNN) for accurate classification.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "openCV",
          color: "green-text-gradient",
        },
        {
          name: "tinker-GUI",
          color: "pink-text-gradient",
        },
      ],
      image: faceRecognition,
      source_code_link: "https://github.com/",
    },
    {
      name: "Connect 4 AI",
      description:
        "Connect AI is a Python-based app that enhances the game of Connect 4. It utilizes advanced algorithms to develop intelligent gameplay agents, optimizing decision-making capabilities for an enhanced gaming experience.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "heuristic",
          color: "green-text-gradient",
        },
        {
          name: "α-β pruning",
          color: "pink-text-gradient",
        },
      ],
      image: connect4,
      source_code_link: "https://github.com/rupin27/connect",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };