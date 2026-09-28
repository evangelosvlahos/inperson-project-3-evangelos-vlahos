// Week 4 JavaScript Portfolio Project - Data Organization
// Students will learn to organize their portfolio data using JavaScript objects and arrays

// TODO: Fill in your personal information
const portfolio = {
    // Personal information object
    owner: {
        name: "Evan Vlahos",     
        title: "MLIS Student",  
        email: "evlahos@uw.edu",
        location: "Seattle, WA", 
        bio: "Write a brief description about yourself here. What are you passionate about? What are your goals?" // TODO: Add your bio
    },
    
    // Skills as an array
    skills: [
        "Makerspace",  
        "Community Outreach", 
        "Data Analysis", 
        "Programming",
        "Tech Support",
        "Python/R/SQL languages",
        "AI/ML"
        "Wix",
        "Microsoft Office 365",
    ],
    
    // Projects as array of objects
    projects: [
        {
            title: "California Wildfire Maps 1850-2023",
            description: "This project visualizes the history of wildfires in California from 1850 to 2023 using interactive maps and data analysis techniques.",
            technologies: ["R", "Leaflet", "Shiny"],
            completionDate: "2024-05-15",   
            featured: true                  
        },
        {
            title: "Ottoman Census Registers", 
            description: "This project aims to decipher 19th century Ottoman Census Registers, called defters, to create a dataset of Rum communities and parishes. Information collected includes household and family relations, profession, place of origin, tax status, and even physical descriptions of individuals.",
            technologies: ["R", "Wix", "Excel"],
            completionDate: "2025-11-01",
            featured: true
        }
        // TODO: Add more projects during class
    ],
    
    // Contact and availability information
    availability: {
        freelance: false,   
        fullTime: true,    
        partTime: true 
    }
};

// Let's explore our data structure in the console
console.log("=== PORTFOLIO DATA EXPLORER ===");
console.log("Full portfolio object:", portfolio);

// TODO: During class, we'll add more console.log() statements to explore the data
// Examples students will try:
console.log("Evan Vlahos:", portfolio.owner.name);
console.log("First skill:", portfolio.skills[0]);
console.log("Number of projects:", portfolio.projects.length);

// TODO: Students will learn to access nested properties
console.log("Email:", portfolio.owner.email);
console.log("Second project:", portfolio.projects[1]);
console.log("Available for freelance?", portfolio.availability.freelance);

// TODO: Students will create summary strings using template literals
let summary = `${portfolio.owner.name} is a ${portfolio.owner.title} with ${portfolio.skills.length} skills.`;
console.log("Summary:", summary);