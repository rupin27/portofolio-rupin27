import {
    mobile,
    backend,
    creator,
    web,
    nara,
    genAIrtify,
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
    elucidata,
    naralytics,
    spectrio,
    UMass,
    gyouReLee,
    rohitJagre,
    krusell,
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
      title: "AI / ML",
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
    // {
    //   name: "C",        //Done
    //   icon: c,
    // },
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
    // {
    //   name: "React.js",          //Done
    //   icon: reactjs,
    // },
    // {
    //   name: "React Native",       //Done
    //   icon: reactnative,
    // },
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
    // {
    //   name: "Linux",             //Done
    //   icon: linux,
    // },
    // {
    //   name: "Firebase",          //Done
    //   icon: firebase,
    // },
    {
      name: "Git",            //Done
      icon: git,
    },
    // {
    //   name: "Docker",          //Done
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Software Engineer",
      company_name: "Spectrio",
      icon: spectrio,
      iconBg: "#383E56",
      date: "Sep 2023 - Present",
      points: [
        "Spearhead the modernization and enhancement initiatives for a diverse portfolio of applications catering to clients such as Microsoft, Google, HP, Subway, and Exxon Mobil, utilizing React, PHP, and Angular technologies.",
        "Play a pivotal role in streamlining and optimizing applications to meet the customers’ digital signage needs.",
        "Spearhead improvements in Little Caesars International app, emphasizing user experience and efficiency by optimizing memory consumption, implementing O(1) time complexity garbage collection, and refining functionality, resulting in a 70% reduction in user-reported issues and workload after relaunch.",
        "Notable: Docker Image for Sandbox Environment",
        "Developed and implemented a Docker image for a sandbox environment, configuring a CentOS7 environment with background services like Apache, Squid, and MariaDB, resulting in a significant reduction in development time and improved application setup.",
        "Achieved a long-standing company goal by reducing development time and enhancing application setup, accomplishing in one month what had eluded the company for the past 7 years.",
      ],
    },
    {
      title: "Software Developer",
      company_name: "Naralytics",
      icon: naralytics,
      iconBg: "#383E56",
      date: "May 2022 - Sep 2023",
      points: [
        "Lead a team of 5 developing a React Native application with custom UI/UX components increasing code reusability and versatility across iOS and Android platforms, alongside improving performance by reducing load-time by ~4s.",
        "Introduced a login authentication flow and payment setup using Firebase GCP, optimized for Google-backed SaaS security.",
        "Accomplished 75% reduction in deployment time and 80% increase in development-to-production efficiency by orchestrating CI/CD processes employing Jenkins, Kubernetes, and Docker.",
        "Notable: Emotional Recognition and Sentimental Analysis BERT Model",
        "Developed a NLP labeling model utilizing Python and libraries including transformers, torch-vision, PyTorch lightning, Scikit-learn, pandas, and the BERT language model for psychometric assessments and HUMINT analysis on raw text.",
        "Trained the model on AWS EC2 instance, and tested the predicted sentiments and generated labeled dataset against reversed training data with evaluation metrics (Jaccard Score, F-1, AUC, Hamming Loss), achieving an accuracy of 95%.",
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
        "Developed and maintained software systems and back end infrastructure using Java and Typescript, while streamlining delivery with tools like Ansible and Terraform reducing instance provisioning time by 40% and deployment errors by 25%.",
        "Proactively collaborated in Scrum, implementing integration test suites and optimizing memory consumption employing techniques such as memoization and memory pooling, increasing runtime performance by an average 30%.",
        "Engaged in iterative stakeholder feedback while architecting and implementing a PostgreSQL database, optimizing its performance for efficient data management and retrieval.",
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
      source_code_link: "https://github.com/rupin27/",
    },
    {
      name: "GenAIrtify",
      description:
        "GenAIrtify is a MERN stack-based solution that empowers users to generate lifelike images through text inputs. OpenAI's cutting-edge DALL-E model is integrated to provide unparalleled creativity in image generation, alongside an engaging user experience.",
      tags: [
        {
          name: "MERN stack",
          color: "blue-text-gradient",
        },
        {
          name: "OpenAI",
          color: "green-text-gradient",
        },
        {
          name: "Cloudinary",
          color: "pink-text-gradient",
        },
      ],
      image: genAIrtify,
      source_code_link: "https://github.com/rupin27/GenAIrtify",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };