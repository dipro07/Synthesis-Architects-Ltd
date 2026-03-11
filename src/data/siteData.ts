export const siteData = {
    company: {
        name: "Synthesis Architects",
        tagline: "& Consulting Agency",
        description: "We are a premier architectural and consulting agency, designing thoughtful spaces from high-rise commercial towers to flagship retail centres and educational institutions.",
        mission: "Our mission is to deliver innovative architectural and consulting solutions that shape modern landscapes through functional and visionary design.",
        socials: {
            facebook: "#",
            instagram: "#",
            linkedin: "#",
            youtube: "#",
        },
        contact: {
            address: "House 66, Road 1, Banani, Dhaka, Bangladesh",
            phones: ["02-9873273"],
            email: "synthesisarchitectsbd@gmail.com",
            workingHours: {
                weekdays: "Sunday – Thursday: 9 AM – 6 PM",
                friday: "Friday & Saturday: Closed",
            }
        }
    },
    navigation: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Why Us", href: "/why-us" },
        { label: "Projects", href: "/projects" },
        { label: "Contact", href: "/contact" },
    ],
    hero: {
        tagline: "Banani, Dhaka, Bangladesh",
        title: {
            main: "Architecture with",
            accent: "Vision & Expertise"
        },
        subtitle: "From commercial high-rises to educational campuses — we plan, design, and deliver spaces that define the urban landscape.",
        slides: [
            { image: "/img/img1.jpg", alt: "Commercial high-rise design" },
            { image: "/img/img2.jpg", alt: "Retail flagship interior" },
            { image: "/img/img3.jpg", alt: "Institutional campus planning" },
        ]
    },
    services: [
        {
            id: "architecture",
            icon: "building-columns",
            title: "Architecture",
            description: "Complete architectural design for large-scale commercial and institutional projects — from concept drawings to execution."
        },
        {
            id: "interior-design",
            icon: "couch",
            title: "Interior Design",
            description: "Functional and professional interior solutions for corporate offices, retail flagship stores, and educational facilities."
        },
        {
            id: "3d-visualization",
            icon: "cube",
            title: "3D Visualization",
            description: "Detailed photorealistic 3D rendering to help clients visualize large-scale structures before construction."
        },
        {
            id: "planning",
            icon: "drafting-compass",
            title: "Master Planning",
            description: "Intelligent master planning that maximizes utility and flow for sprawling campuses and commercial plots."
        },
        {
            id: "consultation",
            icon: "comments",
            title: "Consulting Agency",
            description: "Expert architectural and structural consulting for clients at any stage of their development process."
        },
        {
            id: "project-management",
            icon: "chart-gantt",
            title: "Project Management",
            description: "Comprehensive supervision ensuring multi-story builds and commercial centers are completed to the highest standards."
        }
    ],
    stats: [
        { label: "Projects Completed", value: 50, suffix: "+" },
        { label: "Years of Experience", value: 10, suffix: "+" },
        { label: "Corporate Clients", value: 30, suffix: "+" },
        { label: "Design Disciplines", value: 4, suffix: "" },
    ],
    projects: [
        {
            id: "varendra-university",
            slug: "varendra-university",
            name: "Varendra University",
            location: "Bangladesh",
            category: "Institutional",
            image: "/img/projects/varendra-university1.jpg",
            bannerImage: "/img/projects/varendra-university2.jpg",
            tags: ["Institutional", "Campus", "Architecture"],
            overview: [
                "A comprehensive architectural planning and design project for Varendra University by Synthesis Architects.",
                "The design prioritizes educational functionality, creating expansive academic environments that foster learning and collaboration.",
                "The campus architecture integrates modern structural elements with accessible student zones, administrative blocks, and integrated landscape features.",
                "Circulation routes are carefully planned to handle high student volume seamlessly across the institutional footprint."
            ],
            designCredits: "Conceived and developed by the Synthesis Architects design team.",
            details: [
                { label: "Category", value: "Educational / Institutional" },
                { label: "Studio", value: "Synthesis Architects" },
                { label: "Services", value: "Master Planning, Architecture" },
                { label: "Location", value: "Bangladesh" },
                { label: "Status", value: "Completed" }
            ],
            services: ["Architecture", "Master Planning", "Consulting"],
            credits: [
                { label: "Design Team", value: "Synthesis Architects" }
            ],
            gallery: [
                { image: "/img/projects/varendra-university3.jpg", alt: "University exterior view", full: true },
                { image: "/img/projects/varendra-university4.jpg", alt: "Campus planning layout" },
                { image: "/img/projects/varendra-university5.jpg", alt: "Campus planning layout" },
                { image: "/img/projects/varendra-university6.jpg", alt: "Campus planning layout" },
                { image: "/img/projects/varendra-university7.jpg", alt: "Campus planning layout" },
            ],
            relatedIds: ["aarong-flagship", "circle-aztec-obaid-grand-palace"]
        },
        {
            id: "aarong-flagship",
            slug: "aarong-flagship",
            name: "Aarong Flagship Centre",
            location: "Dhanmondi, Dhaka",
            category: "Commercial Retail",
            image: "/img/projects/aarong-flagship1.jpg",
            bannerImage: "/img/projects/aarong-flagship2.jpg",
            tags: ["Retail", "Commercial", "Interior", "Flagship"],
            overview: [
                "The Aarong Flagship Centre at Dhanmondi represents a landmark retail architecture project delivered by Synthesis Architects.",
                "The structural and interior design focuses on creating an immersive, premium retail experience capable of handling high foot traffic.",
                "Material selection balances traditional brand aesthetics with modern commercial durability, utilizing custom display architecture and strategic lighting.",
                "The spatial layout maximizes product visibility while ensuring clear, comfortable navigation across multiple retail floors."
            ],
            designCredits: "Designed by the Synthesis Architects team.",
            details: [
                { label: "Category", value: "Commercial / Retail" },
                { label: "Studio", value: "Synthesis Architects" },
                { label: "Services", value: "Architecture, Retail Interior Design" },
                { label: "Location", value: "Dhanmondi, Dhaka, Bangladesh" },
                { label: "Status", value: "Completed" }
            ],
            services: ["Interior Design", "Retail Space Planning", "Consulting"],
            credits: [
                { label: "Design Team", value: "Synthesis Architects" }
            ],
            gallery: [
                { image: "/img/projects/aarong-flagship3.jpg", alt: "Flagship centre interior", full: true },
                { image: "/img/projects/aarong-flagship4.jpg", alt: "Retail display zone" },
                { image: "/img/projects/aarong-flagship1.jpg", alt: "Retail display zone" },
                { image: "/img/projects/aarong-flagship5.jpg", alt: "Customer circulation path" },
                { image: "/img/projects/aarong-flagship6.jpg", alt: "Flagship centre exterior", },
            ],
            relatedIds: ["varendra-university", "circle-aztec-obaid-grand-palace"]
        },
        {
            id: "circle-aztec-obaid-grand-palace",
            slug: "circle-aztec-obaid-grand-palace",
            name: "Circle Aztec Obaid Grand Palace",
            location: "Banani, Dhaka",
            category: "Commercial High-Rise",
            image: "/img/projects/circle-aztec-obaid-grand-palace1.jpg",
            bannerImage: "/img/projects/circle-aztec-obaid-grand-palace2.jpg",
            tags: ["Commercial", "High-Rise", "Architecture", "Retail", "Corporate"],
            overview: [
                "The Circle Aztec Obaid Grand Palace is a prominent 12-story commercial high-rise situated on Road 11, Banani, one of Dhaka's premier business districts.",
                "Synthesis Architects delivered full architectural and structural consulting for this modern 40,000 sq ft development.",
                "The building is engineered to host a dynamic mix of premium retail flagships on the ground levels and flexible, open-plan corporate offices on the upper floors.",
                "Designed for maximum utility and prestige, the structure features advanced structural planning, dedicated parking, and a striking façade that acts as a landmark in the Banani commercial skyline."
            ],
            designCredits: "Architectural planning and structural consulting by Synthesis Architects.",
            details: [
                { label: "Category", value: "Commercial / Office & Retail" },
                { label: "Studio", value: "Synthesis Architects" },
                { label: "Services", value: "Architecture, Master Planning" },
                { label: "Location", value: "Plot 45, Road 11, Block C, Banani, Dhaka" },
                { label: "Status", value: "Completed" }
            ],
            services: ["Architecture", "Commercial Planning", "Engineering Consulting"],
            credits: [
                { label: "Design Team", value: "Synthesis Architects" }
            ],
            gallery: [
                { image: "/img/projects/circle-aztec-obaid-grand-palace1.jpg", alt: "Grand Palace exterior view", span2: true },
                { image: "/img/projects/circle-aztec-obaid-grand-palace2.jpg", alt: "Open-plan corporate office interior", span2: true },
                { image: "/img/projects/circle-aztec-obaid-grand-palace3.jpg", alt: "Ground floor retail flagship zone" }
            ],
            relatedIds: ["circle-aztec-obaid-grand-palace", "aarong-flagship"]
        }
    ],
    testimonials: [
        {
            quote: "Synthesis Architects delivered outstanding architectural consulting for our institutional campus. Their ability to handle large-scale planning is highly commendable.",
            author: "Institutional Client",
            role: "University Project Board",
            avatar: "/img/img1.jpg"
        },
        {
            quote: "The design of our flagship retail centre perfectly aligned with our brand vision. The space is functional, modern, and beautifully executed.",
            author: "Corporate Retailer",
            role: "Retail Client, Dhanmondi",
            avatar: "/img/img2.jpg"
        },
        {
            quote: "As our consulting agency for a high-rise commercial development, Synthesis Architects provided rigorous structural planning and brilliant architectural insight.",
            author: "Commercial Developer",
            role: "High-Rise Developer, Motijheel",
            avatar: "/img/img3.jpg"
        }
    ],
    clients: [
        "Varendra University", "Aarong Flagship", "Green Hannan Developers", "Corporate Clients",
        "Retail Chains", "Commercial Developers", "Institutional Boards", "Real Estate Investors",
        "Corporate Offices", "Educational Trusts", "High-Rise Developers", "Urban Planners"
    ],
    faqs: [
        {
            question: "What types of projects do you handle?",
            answer: "We specialize in large-scale architecture including educational institutions, flagship retail centres, and commercial high-rises across Bangladesh."
        },
        {
            question: "Do you provide structural consulting?",
            answer: "Yes. As a leading consulting agency, we provide expert architectural, structural, and master planning advice for major developments."
        },
        {
            question: "How do I start a project with you?",
            answer: "Simply call us at 02-9873273 or email synthesisarchitectsbd@gmail.com. We'll arrange an initial consultation at our Banani office."
        },
        {
            question: "Do you handle both commercial architecture and interior design?",
            answer: "Yes. Synthesis Architects offers full architectural design and corporate interior design services for commercial and institutional projects."
        }
    ],
    theme: {
        colors: {
            orange: "#DA291C",
            orangeDark: "#9E1B11",
            orangeSoft: "rgba(218, 41, 28, 0.12)",
            black: "#000000",
            dark: "#1a1a1a",
            dark2: "#242424",
            dark3: "#2e2e2e",
            gray: "#888",
            grayLight: "#aaa",
            white: "#ffffff",
            whiteSoft: "rgba(255, 255, 255, 0.08)",
        },
        typography: {
            fontHead: "'Playfair Display', Georgia, serif",
            fontBody: "'DM Sans', sans-serif"
        }
    },
    homePage: {
        servicesPreview: {
            tagline: "What We Do",
            titleMain: "Our Core ",
            titleAccent: "Expertise",
            description: "From institutional master planning to commercial high-rise architecture — we deliver professional consulting and design solutions.",
            buttonText: "Learn More",
            buttonAllText: "View All Services",
            buttonAllLink: "/services"
        },
        featuredProjects: {
            tagline: "Portfolio",
            titleMain: "Featured ",
            titleAccent: "Developments",
            buttonAllText: "View All Projects",
            buttonAllLink: "/projects",
            buttonText: "View Project"
        },
        testimonials: {
            tagline: "What Clients Say",
            titleMain: "Client ",
            titleAccent: "Testimonials"
        },
        aboutSnippet: {
            badgeNum: "10+",
            badgeLabel: "Years of Experience",
            image: "/img/img6.jpg",
            tagline: "Our Firm",
            titleMain: "Architecture with ",
            titleAccent: "Vision",
            paragraphs: [
                "Synthesis Architects is a premier architecture and consulting agency based in Banani, Dhaka. We specialize in prominent commercial, retail, and institutional developments across Bangladesh.",
                "We combine structural rigor with visionary design — delivering large-scale spaces like high-rises and universities that meet the highest professional standards."
            ],
            features: [
                "Commercial & institutional expertise",
                "Advanced master planning",
                "Comprehensive consulting services",
                "Corporate interior execution"
            ],
            buttonText: "Discover Our Firm",
            buttonLink: "/about"
        },
        ctaBanner: {
            tagline: "Start Your Development",
            titleMain: "Ready to Plan ",
            titleAccent: "Your Next Project?",
            description: "Whether it is a commercial tower, flagship retail center, or institutional campus — contact our consulting agency today.",
            buttonText: "Call Now: 02-9873273",
            buttonLink: "/contact"
        }
    },
    aboutPage: {
        hero: {
            title: "About Synthesis Architects",
            subtitle: "Professional architecture and consulting for major developments across Bangladesh.",
            image: "/img/img5.jpg",
            label: "Get to Know Us"
        },
        story: {
            tagline: "Our Firm",
            titleMain: "Built on Expertise, ",
            titleAccent: "Driven by Vision",
            paragraphs: [
                "Synthesis Architects was established to provide top-tier architectural and consulting services for complex, large-scale developments in Bangladesh.",
                "Based in Banani, Dhaka, our agency has successfully navigated projects ranging from the Varendra University campus to the Aarong Flagship Centre and ongoing commercial high-rises in Motijheel.",
                "Our team of expert architects and planners treats every commission with professional discipline, ensuring functional excellence and striking architectural impact."
            ],
            image: "/img/img6.jpg",
            badgeNum: "50+",
            badgeLabel: "Projects Done",
            buttonText: "Consult With Us",
            buttonLink: "/contact"
        },
        team: {
            tagline: "The People",
            titleMain: "Meet Our ",
            titleAccent: "Expert Partners",
            description: "A specialized team of architects, structural consultants, and planners driving monumental projects.",
            members: [
                { name: "Principal Architect", role: "Design Director", img: "/img/img1.jpg" },
                { name: "Lead Consultant", role: "Structural & Strategy", img: "/img/img1.jpg" },
                { name: "Project Architect", role: "Commercial Planning", img: "/img/img1.jpg" }
            ]
        },
        missionVision: {
            tagline: "Our Principles",
            titleMain: "Mission ",
            titleAccent: "& Vision",
            items: [
                {
                    icon: "bullseye",
                    title: "Our Mission",
                    description: "To provide premier architectural consulting and design services that elevate commercial and institutional spaces throughout Bangladesh."
                },
                {
                    icon: "eye",
                    title: "Our Vision",
                    description: "To be recognized as Bangladesh's most authoritative architecture and consulting agency for high-profile urban developments."
                },
                {
                    icon: "drafting-compass",
                    title: "Our Approach",
                    description: "We utilize rigorous site analysis and strategic consulting to ensure every large-scale design is functionally sound and commercially viable."
                },
                {
                    icon: "users",
                    title: "Professional Partnership",
                    description: "We work alongside developers, corporate boards, and institutional trusts as dedicated strategic partners from concept to execution."
                }
            ]
        },
        ctaBanner: {
            tagline: "Consult With Us",
            titleMain: "Have a Major Project in Mind?",
            titleAccent: "",
            description: "Contact our Banani office today to schedule a professional consultation.",
            buttonText: "Call: 02-9873273",
            buttonLink: "/contact"
        }
    },
    servicesPage: {
        hero: {
            title: "Our Services",
            subtitle: "Architecture, master planning, and professional consulting for commercial developments.",
            image: "/img/img5.jpg",
            label: "What We Offer"
        },
        expertise: {
            tagline: "Agency Expertise",
            titleMain: "Comprehensive Design ",
            titleAccent: "& Consulting",
            description: "Whether you are developing a commercial high-rise, an educational campus, or a retail flagship — our agency possesses the scale and expertise to deliver."
        },
        process: {
            tagline: "How We Work",
            titleMain: "Our Consulting ",
            titleAccent: "Process",
            steps: [
                { step: "01", title: "Strategic Consultation", icon: "magnifying-glass", desc: "We evaluate structural viability, commercial goals, and site capabilities before initiating architectural drafting." },
                { step: "02", title: "Master Planning & Concept", icon: "cube", desc: "We formulate robust master plans and architectural concepts suitable for large-scale institutional and commercial use." },
                { step: "03", title: "Technical Drafting", icon: "drafting-compass", desc: "Our team produces rigorous engineering, structural, and architectural blueprints for contractor execution." },
                { step: "04", title: "Project Oversight", icon: "flag-checkered", desc: "We provide ongoing consultation and site supervision to guarantee adherence to design specifications." }
            ]
        },
        ctaBanner: {
            tagline: "Initiate Planning",
            titleMain: "Ready to Start Your ",
            titleAccent: "Development?",
            description: "Contact our agency to discuss your architectural and consulting needs.",
            buttonText: "Call: 02-9873273",
            buttonLink: "/contact"
        }
    },
    projectsPage: {
        hero: {
            title: "Our Projects",
            subtitle: "Commercial towers, retail flagships, and educational institutions.",
            image: "/img/img4.jpg",
            label: "Portfolio"
        },
        portfolio: {
            tagline: "Selected Works",
            titleMain: "Explore Our ",
            titleAccent: "Developments"
        },
        ctaBanner: {
            tagline: "Start Your Development",
            titleMain: "Inspired by Our ",
            titleAccent: "Work?",
            description: "Call our Banani office to propose your project and consult with our lead architects.",
            buttonText: "Call: 02-9873273",
            buttonLink: "/contact"
        }
    },
    contactPage: {
        hero: {
            title: "Contact Us",
            subtitle: "Reach out to our consulting agency to discuss your upcoming project.",
            image: "/img/img1.jpg",
            label: "Get in Touch"
        },
        form: {
            tagline: "Request Consultation",
            titleMain: "Discuss Your ",
            titleAccent: "Project",
            description: "Fill in the form to contact our consulting team, or reach us directly at 02-9873273.",
            buttonText: "Submit Inquiry",
            services: [
                "Commercial Architecture",
                "Institutional Planning",
                "Retail Interior Design",
                "Structural Consulting",
                "High-Rise Development",
                "Project Management",
                "Other"
            ]
        },
        info: {
            googleMapsUrl: "https://maps.google.com/maps?q=Janata+Housing,+Adabor,+Dhaka,+Bangladesh&output=embed&z=15",
            socialTitle: "Follow Synthesis Architects"
        },
        faq: {
            tagline: "Common Questions",
            titleMain: "Frequently ",
            titleAccent: "Asked Questions"
        }
    },
    clientsPage: {
        hero: {
            title: "Our Clients",
            subtitle: "Trusted by top corporations, retailers, and institutions across Bangladesh.",
            image: "/img/img4.jpg",
            label: "Corporate & Institutional Partners"
        },
        clientLogos: {
            tagline: "Our Network",
            titleMain: "Trusted by ",
            titleAccent: "Industry Leaders",
            description: "From major universities to national retail brands and high-rise developers, our clients rely on Synthesis Architects for precision and scale."
        },
        testimonials: {
            tagline: "Partner Voices",
            titleMain: "What Our Clients ",
            titleAccent: "Say",
            list: [
                {
                    name: "Institutional Board",
                    role: "University Client",
                    quote: "Synthesis Architects delivered outstanding architectural consulting for our institutional campus. Their ability to handle large-scale planning is highly commendable.",
                    avatar: "/img/img1.jpg"
                },
                {
                    name: "Retail Brand",
                    role: "Flagship Client, Dhanmondi",
                    quote: "The design of our flagship retail centre perfectly aligned with our brand vision. The space is functional, modern, and beautifully executed.",
                    avatar: "/img/img2.jpg"
                },
                {
                    name: "Commercial Developer",
                    role: "High-Rise Client, Motijheel",
                    quote: "As our consulting agency for a high-rise development, Synthesis Architects provided rigorous structural planning and brilliant architectural insight.",
                    avatar: "/img/img3.jpg"
                }
            ]
        },
        ctaBanner: {
            tagline: "Partner With Us",
            titleMain: "Ready to Develop Your ",
            titleAccent: "Next Project?",
            description: "Contact Synthesis Architects to start planning your commercial or institutional space.",
            buttonText: "Call: 02-9873273",
            buttonLink: "/contact"
        }
    },
    whyUsPage: {
        hero: {
            title: "Why Synthesis Architects",
            subtitle: "What distinguishes our consulting agency in large-scale architecture.",
            image: "/img/img1.jpg",
            label: "The Synthesis Advantage"
        },
        differentiators: {
            tagline: "Our Distinctions",
            titleMain: "Strategic Consulting, ",
            titleAccent: "Monumental Design",
            description: "Choosing the right architectural firm is critical for large investments. Here is why top developers and institutions choose Synthesis Architects."
        },
        features: [
            {
                num: "01",
                label: "Scale & Capacity",
                title: "Equipped for Major Developments",
                desc: "We specialize in projects of significant scale, from multi-acre educational campuses like Varendra University to ongoing high-rise commercial towers in Dhaka's CBD.",
                list: ["Expertise in high-rise architecture", "Master campus planning", "Advanced structural coordination", "Handling complex logistical footprints"],
                img: "/img/img3.jpg",
                reverse: false
            },
            {
                num: "02",
                label: "Consulting Expertise",
                title: "More Than Just Drafting",
                desc: "As a dedicated consulting agency, we provide strategic advice on structural viability, spatial optimization, and commercial zoning long before blueprints are finalized.",
                list: ["Strategic site evaluation", "Commercial viability assessments", "Structural consulting", "Regulatory compliance planning"],
                img: "/img/img4.jpg",
                reverse: true
            },
            {
                num: "03",
                label: "Corporate Focus",
                title: "Designing for Business and Brand",
                desc: "We understand that commercial and retail spaces must perform financially. We design flagship centers and corporate towers that elevate brand prestige and optimize operational flow.",
                list: ["Premium retail architecture", "Corporate identity integration", "Optimized commercial layouts", "Durable material specification"],
                img: "/img/img5.jpg",
                reverse: false
            },
            {
                num: "04",
                label: "Professionalism",
                title: "Reliable Project Stewardship",
                desc: "Our agency acts as a steadfast partner throughout the development lifecycle, ensuring architectural integrity is maintained from the initial concept phase through to final construction.",
                list: ["Rigorous project oversight", "Direct communication with stakeholders", "Adherence to timelines", "Uncompromising quality control"],
                img: "/img/img2.jpg",
                reverse: true
            }
        ],
        ctaBanner: {
            tagline: "Consult With Synthesis",
            titleMain: "Ready to Partner With ",
            titleAccent: "Synthesis Architects?",
            description: "Call our agency today to discuss your commercial, retail, or institutional project.",
            buttonText: "Call: 02-9873273",
            buttonLink: "/contact"
        }
    }
};