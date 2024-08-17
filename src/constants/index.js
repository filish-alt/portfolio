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
    carrent,
    jobit,
    tripguide,
    threejs,
    leave,
    ecx,
    twof,
    go,
    net,
    angular,
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
      title: "Web Developer",
      icon: web,
    },
   
    {
      title: "Backend Developer",
      icon: backend,
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
      name: "Tailwind CSS",
      icon: tailwind,
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
    {
      name: "go",
      icon: go,
    },
    {
      name: "angular",
      icon: angular,
    },
    {
      name: "net",
      icon: net,
    },
  ];
  
  const experiences = [
    {
      title: "Full stack Developer",
      company_name: "ECX(Ethiopia Commodity Exchange)",
      icon: ecx,
      iconBg: "#E6DEDD",
      date: "Jun 2023 - Feb 2024",
      points: [
        "Developing and maintaining web applications using .Net and angular and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Backend Developer",
      company_name: "2F Capital",
      icon: twof,
      iconBg: "#383E56",
      date: "Feb 2024 - Present",
      points: [
        "Developing and maintaining applications using Go and other related technologies.",
        "including testing using godog",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
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
      name: "HR Management System",
      description:
        "HR Management System integrates Angular frontend with an ASP.NET Core API backend, following clean architecture principles. It leverages Swagger for API documentation and utilizes a SQL database for efficient data management. This solution automates HR processes such as payroll and employee management, ensuring compliance and scalability. It's designed to streamline operations and support organizational growth seamlessly.",
      tags: [
        {
          name: "angular",
          color: "blue-text-gradient",
        },
        {
          name: ".net",
          color: "green-text-gradient",
        },
        {
          name: "sqlserver",
          color: "pink-text-gradient",
        },
      ],
      image: leave,
      source_code_link: "https://github.com/filish-alt/ECX-HR-Front",
    },
    
   
  ];
  
  export { services, technologies, experiences, testimonials, projects };