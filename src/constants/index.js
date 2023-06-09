import {
    mobile,
    backend,
    creator,
    web,
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
    meta,
    starbucks,
    tesla,
    shopify,
    elucidata,
    naralytics,
    UMass,
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
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
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
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };