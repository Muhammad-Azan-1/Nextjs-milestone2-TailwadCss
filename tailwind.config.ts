import type { Config } from "tailwindcss";


const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		backgroundImage:{
  			'hero-gradient': 'linear-gradient(to bottom, rgba(25, 25, 25, 0.65), rgba(25, 25, 25, 0.2)), url("/hero8.jpeg")',
  			'hero-gradient-2': 'linear-gradient(to bottom, rgba(25, 25, 25, 0.65), rgba(25, 25, 25, 0.4)), url("/hero9.webp")',
        'About-background-Image':'linear-gradient(to bottom, rgba(25, 25, 25, 0.5), rgba(25, 25, 25, 0.2)),url("/About.jpg")',
        'Services-background-Image':'linear-gradient(to bottom, rgba(25, 25, 25, 0.5), rgba(25, 25, 25, 0.2)),url("/Services.jpg")',
        'contact-background-Image':'linear-gradient(to bottom, rgba(25, 25, 25, 0.5), rgba(25, 25, 25, 0.2)),url("/contact.jpg")',
  		},

      screens:{
        "max":{"max":"1150px"},
        'min0':{"min":"1200px"},
        "min1":{"min":"1150px"},
        "min2":{"min":"1073px"},
        "max-md":{"max":"900px"},
        "min-md":{"min":"900px"},
        "max-md2":{"max":"786px"},
        "max-md3":{"max":"768px"},
        "max-md4":{"max":"1000px"},
        "max2":{"max":"500px"},
        "max3":{"max":"485px"},
        "min-max":{"max":"375px"},
      },

      colors:{
        primary:'#FB2056',
      },
  
  		
  	
  	}
  },
 
};
export default config;
