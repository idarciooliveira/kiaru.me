const initialProfileData = {
  name: "Alex Rodriguez",
  title: "Senior Product Designer",
  bio: "Passionate designer crafting digital experiences that blend creativity with user-centered thinking. 5+ years in tech.",
  profileImage:
    "https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=400",
  email: "alex.rodriguez@email.com",
  phone: "+1 (555) 123-4567",
  linkedin: "linkedin.com/in/alexrodriguez",
  portfolio: "alexrodriguez.design",
};

const initialExperinces = [
  {
    id: 1,
    title: "Senior Product Designer",
    company: "TechFlow Inc.",
    period: "2022 - Present",
    skills: ["UI/UX Design", "Figma", "User Research"],
  },
  {
    id: 2,
    title: "Product Designer",
    company: "DesignHub Studio",
    period: "2020 - 2022",
    skills: ["Prototyping", "Adobe XD", "Wireframing"],
  },
];

const initialEducational = [
  {
    id: 1,
    course: "Master in UX/UI Design",
    institution: "Design Institute",
    period: "2019 - 2020",
  },
  {
    id: 2,
    course: "Bachelor in Graphic Design",
    institution: "Art University",
    period: "2015 - 2019",
  },
];

const initialProjects = [
  {
    id: 1,
    title: "E-commerce App",
    images: [
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
    description:
      "A modern e-commerce mobile application with intuitive user interface, seamless checkout process, and personalized shopping experience. Built with React Native and integrated with multiple payment gateways.",
    link: "https://example.com/ecommerce-app",
  },
  {
    id: 2,
    title: "Banking Dashboard",
    images: [
      "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
    description:
      "A comprehensive banking dashboard featuring real-time analytics, transaction monitoring, and financial insights. Designed with security-first approach and accessibility standards.",
    link: "https://example.com/banking-dashboard",
  },
  {
    id: 3,
    title: "Health App",
    images: [
      "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
    description:
      "A wellness tracking application that helps users monitor their health metrics, set fitness goals, and connect with healthcare providers. Features AI-powered health recommendations.",
    link: "https://example.com/health-app",
  },
  {
    id: 4,
    title: "Travel Platform",
    images: [
      "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
    description:
      "An all-in-one travel planning platform with booking capabilities, itinerary management, and local recommendations. Integrated with major airlines and hotel chains.",
    link: "https://example.com/travel-platform",
  },
  {
    id: 5,
    title: "Social Network",
    images: [
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
    description:
      "A professional networking platform focused on creative industries. Features portfolio sharing, collaboration tools, and industry-specific job matching.",
    link: "https://example.com/social-network",
  },
  {
    id: 6,
    title: "Education App",
    images: [
      "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
    description:
      "An interactive learning platform with gamified courses, progress tracking, and peer-to-peer learning features. Supports multiple learning styles and accessibility needs.",
    link: "https://example.com/education-app",
  },
];

export const DUMP_DATA = {
  initialProfileData,
  initialExperinces,
  initialEducational,
  initialProjects,
};
