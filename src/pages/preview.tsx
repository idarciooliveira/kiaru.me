import React from "react";
import {
  Mail,
  Phone,
  Linkedin,
  ExternalLink,
  Briefcase,
  X,
  ChevronLeft,
  ChevronRight,
  Edit3,
  Save,
  Plus,
  Trash2,
  Clipboard,
} from "lucide-react";

export default function PortfolioPreview() {
  const [isEditMode, setIsEditMode] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [selectedTheme, setSelectedTheme] = React.useState(0);

  const themes = [
    {
      name: "Blue Ocean",
      gradient: "bg-gradient-to-br from-gray-900 via-blue-900 to-slate-800",
      class: "from-gray-900 via-blue-900 to-slate-800",
    },
    {
      name: "Emerald Night",
      gradient: "bg-gradient-to-br from-gray-900 via-emerald-900 to-slate-800",
      class: "from-gray-900 via-emerald-900 to-slate-800",
    },
    {
      name: "Purple Dusk",
      gradient: "bg-gradient-to-br from-gray-900 via-purple-900 to-slate-800",
      class: "from-gray-900 via-purple-900 to-slate-800",
    },
    {
      name: "Rose Twilight",
      gradient: "bg-gradient-to-br from-gray-900 via-rose-900 to-slate-800",
      class: "from-gray-900 via-rose-900 to-slate-800",
    },
  ];

  // Profile data state
  const [profileData, setProfileData] = React.useState({
    name: "Alex Rodriguez",
    title: "Senior Product Designer",
    bio: "Passionate designer crafting digital experiences that blend creativity with user-centered thinking. 5+ years in tech.",
    profileImage:
      "https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=400",
    email: "alex.rodriguez@email.com",
    phone: "+1 (555) 123-4567",
    linkedin: "linkedin.com/in/alexrodriguez",
    portfolio: "alexrodriguez.design",
  });

  const [experiences, setExperiences] = React.useState([
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
  ]);

  const [education, setEducation] = React.useState([
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
  ]);

  const [projects, setProjects] = React.useState([
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
  ]);

  const handleProjectClick = (project: any) => {
    if (isEditMode) return; // Don't open modal in edit mode
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const handleProfileUpdate = (field: string, value: string) => {
    setProfileData((prev) => ({ ...prev, [field]: value }));
  };

  const handleExperienceUpdate = (id: number, field: string, value: string) => {
    setExperiences((prev) =>
      prev.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp))
    );
  };

  const handleSkillUpdate = (
    expId: number,
    skillIndex: number,
    value: string
  ) => {
    setExperiences((prev) =>
      prev.map((exp) =>
        exp.id === expId
          ? {
              ...exp,
              skills: exp.skills.map((skill, index) =>
                index === skillIndex ? value : skill
              ),
            }
          : exp
      )
    );
  };

  const addSkill = (expId: number) => {
    setExperiences((prev) =>
      prev.map((exp) =>
        exp.id === expId
          ? { ...exp, skills: [...exp.skills, "New Skill"] }
          : exp
      )
    );
  };

  const removeSkill = (expId: number, skillIndex: number) => {
    setExperiences((prev) =>
      prev.map((exp) =>
        exp.id === expId
          ? {
              ...exp,
              skills: exp.skills.filter((_, index) => index !== skillIndex),
            }
          : exp
      )
    );
  };

  const addExperience = () => {
    const newExp = {
      id: Date.now(),
      title: "New Position",
      company: "Company Name",
      period: "Year - Year",
      skills: ["Skill 1", "Skill 2"],
    };
    setExperiences((prev) => [...prev, newExp]);
  };

  const removeExperience = (id: number) => {
    setExperiences((prev) => prev.filter((exp) => exp.id !== id));
  };

  const handleEducationUpdate = (id: number, field: string, value: string) => {
    setEducation((prev) =>
      prev.map((edu) => (edu.id === id ? { ...edu, [field]: value } : edu))
    );
  };

  const addEducation = () => {
    const newEdu = {
      id: Date.now(),
      course: "New Course",
      institution: "Institution Name",
      period: "Year - Year",
    };
    setEducation((prev) => [...prev, newEdu]);
  };

  const removeEducation = (id: number) => {
    setEducation((prev) => prev.filter((edu) => edu.id !== id));
  };

  const handleProjectUpdate = (id: number, field: string, value: string) => {
    setProjects((prev) =>
      prev.map((project) =>
        project.id === id ? { ...project, [field]: value } : project
      )
    );
  };

  const addProject = () => {
    const newProject = {
      id: Date.now(),
      title: "New Project",
      images: [
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400",
      ],
      description: "Project description here...",
      link: "https://example.com",
    };
    setProjects((prev) => [...prev, newProject]);
  };

  const removeProject = (id: number) => {
    setProjects((prev) => prev.filter((project) => project.id !== id));
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-br ${themes[selectedTheme].class} p-4 transition-all duration-700`}
    >
      <div
        className={`max-w-md rounded-2xl p-4 mx-auto bg-gradient-to-br ${themes[selectedTheme].class} text-white transition-all duration-700`}
      >
        {/* Color Picker - Only show when not in edit mode */}
        {!isEditMode && (
          <div className="absolute top-4 left-4 z-10">
            <div className="bg-black/20 backdrop-blur-xl border border-white/20 rounded-2xl p-3 shadow-2xl">
              <div className="grid grid-cols-2 gap-2">
                {themes.map((theme, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedTheme(index)}
                    className={`w-8 h-8 rounded-lg bg-gradient-to-br ${
                      theme.class
                    } transition-all duration-300 hover:scale-110 ${
                      selectedTheme === index
                        ? "ring-2 ring-white/60 shadow-lg scale-110"
                        : "hover:ring-1 hover:ring-white/40"
                    }`}
                    title={theme.name}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Edit Profile Button */}
        <div className="absolute space-y-4 top-12 right-4 z-10">
          <button
            onClick={() => setIsEditMode(!isEditMode)}
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300"
          >
            {isEditMode ? (
              <Save className="w-5 h-5 text-white" />
            ) : (
              <Edit3 className="w-5 h-5 text-white" />
            )}
          </button>
          <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300">
            <Clipboard className="w-5 h-5 text-white" />
          </button>
        </div>
        {/* Header Section */}
        <div className="px-6 pt-12 pb-6">
          <div className="flex items-start space-x-4 mb-6">
            {/* Profile Picture */}
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl flex items-center justify-center overflow-hidden relative">
                <img
                  src={profileData.profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                {isEditMode && (
                  <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
                    <Edit3 className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 min-w-0">
              {isEditMode ? (
                <div className="space-y-2">
                  <input
                    type="text"
                    value={profileData.name}
                    onChange={(e) =>
                      handleProfileUpdate("name", e.target.value)
                    }
                    className="w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg px-3 py-1 text-white text-xl font-bold placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                  />
                  <input
                    type="text"
                    value={profileData.title}
                    onChange={(e) =>
                      handleProfileUpdate("title", e.target.value)
                    }
                    className="w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg px-3 py-1 text-white/90 text-sm font-medium placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                  />
                  <textarea
                    value={profileData.bio}
                    onChange={(e) => handleProfileUpdate("bio", e.target.value)}
                    className="w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg px-3 py-1 text-white/80 text-xs leading-relaxed placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 resize-none"
                    rows={3}
                  />
                </div>
              ) : (
                <>
                  <h1 className="text-xl font-bold text-white mb-1">
                    {profileData.name}
                  </h1>
                  <p className="text-white/90 text-sm font-medium mb-2">
                    {profileData.title}
                  </p>
                  <p className="text-white/80 text-xs leading-relaxed">
                    {profileData.bio}
                  </p>
                </>
              )}
            </div>
          </div>

          {/* Highlight Icons */}
          {isEditMode ? (
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="email"
                  value={profileData.email}
                  onChange={(e) => handleProfileUpdate("email", e.target.value)}
                  placeholder="Email"
                  className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg px-3 py-2 text-white text-xs placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <input
                  type="tel"
                  value={profileData.phone}
                  onChange={(e) => handleProfileUpdate("phone", e.target.value)}
                  placeholder="Phone"
                  className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg px-3 py-2 text-white text-xs placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <input
                  type="url"
                  value={profileData.linkedin}
                  onChange={(e) =>
                    handleProfileUpdate("linkedin", e.target.value)
                  }
                  placeholder="LinkedIn"
                  className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg px-3 py-2 text-white text-xs placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <input
                  type="url"
                  value={profileData.portfolio}
                  onChange={(e) =>
                    handleProfileUpdate("portfolio", e.target.value)
                  }
                  placeholder="Portfolio"
                  className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg px-3 py-2 text-white text-xs placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>
            </div>
          ) : (
            <div className="flex space-x-6 justify-center">
              <div className="flex flex-col items-center space-y-1 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg flex items-center justify-center group-hover:bg-white/20 group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs text-white/70">Email</span>
              </div>

              <div className="flex flex-col items-center space-y-1 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg flex items-center justify-center group-hover:bg-white/20 group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs text-white/70">Phone</span>
              </div>

              <div className="flex flex-col items-center space-y-1 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg flex items-center justify-center group-hover:bg-white/20 group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                  <Linkedin className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs text-white/70">LinkedIn</span>
              </div>

              <div className="flex flex-col items-center space-y-1 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg flex items-center justify-center group-hover:bg-white/20 group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                  <ExternalLink className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs text-white/70">Portfolio</span>
              </div>
            </div>
          )}
        </div>

        {/* Project Grid */}
        <div className="px-6 mb-8">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center justify-between">
            <div className="flex items-center">
              <Briefcase className="w-5 h-5 mr-2" />
              Key Projects
            </div>
            {isEditMode && (
              <button
                onClick={addProject}
                className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300"
              >
                <Plus className="w-4 h-4 text-white" />
              </button>
            )}
          </h2>
          <div className="grid grid-cols-3 gap-1">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`aspect-square bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden group relative border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 ${
                  !isEditMode ? "cursor-pointer" : ""
                }`}
                onClick={() => handleProjectClick(project)}
              >
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    !isEditMode ? "group-hover:scale-110" : ""
                  }`}
                />
                {!isEditMode ? (
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white text-xs font-medium text-center px-2">
                      {project.title}
                    </span>
                  </div>
                ) : (
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeProject(project.id);
                      }}
                      className="w-6 h-6 rounded-full bg-red-500/80 backdrop-blur-xl flex items-center justify-center hover:bg-red-500 transition-all duration-300"
                    >
                      <Trash2 className="w-3 h-3 text-white" />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Project Edit Forms */}
          {isEditMode && (
            <div className="mt-6 space-y-4">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10 shadow-xl"
                >
                  <div className="space-y-3">
                    <input
                      type="text"
                      value={project.title}
                      onChange={(e) =>
                        handleProjectUpdate(project.id, "title", e.target.value)
                      }
                      placeholder="Project Title"
                      className="w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg px-3 py-2 text-white font-medium placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                    />
                    <textarea
                      value={project.description}
                      onChange={(e) =>
                        handleProjectUpdate(
                          project.id,
                          "description",
                          e.target.value
                        )
                      }
                      placeholder="Project Description"
                      className="w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg px-3 py-2 text-white text-sm placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 resize-none"
                      rows={3}
                    />
                    <input
                      type="url"
                      value={project.link}
                      onChange={(e) =>
                        handleProjectUpdate(project.id, "link", e.target.value)
                      }
                      placeholder="Project Link"
                      className="w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg px-3 py-2 text-white text-sm placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Experience & Skills Section */}
        <div className="px-6 mb-8">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center justify-between">
            <div className="flex items-center">
              <Briefcase className="w-5 h-5 mr-2" />
              Experience & Skills
            </div>
            {isEditMode && (
              <button
                onClick={addExperience}
                className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300"
              >
                <Plus className="w-4 h-4 text-white" />
              </button>
            )}
          </h2>

          <div className="space-y-4">
            {experiences.map((experience) => (
              <div
                key={experience.id}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10 shadow-xl hover:bg-white/10 hover:shadow-2xl transition-all duration-300 relative"
              >
                {isEditMode && (
                  <button
                    onClick={() => removeExperience(experience.id)}
                    className="absolute top-2 right-2 w-6 h-6 rounded-full bg-red-500/80 backdrop-blur-xl flex items-center justify-center hover:bg-red-500 transition-all duration-300"
                  >
                    <Trash2 className="w-3 h-3 text-white" />
                  </button>
                )}

                {isEditMode ? (
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={experience.title}
                        onChange={(e) =>
                          handleExperienceUpdate(
                            experience.id,
                            "title",
                            e.target.value
                          )
                        }
                        placeholder="Job Title"
                        className="flex-1 bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg px-3 py-2 text-white font-semibold placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                      />
                      <input
                        type="text"
                        value={experience.period}
                        onChange={(e) =>
                          handleExperienceUpdate(
                            experience.id,
                            "period",
                            e.target.value
                          )
                        }
                        placeholder="Period"
                        className="w-24 bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg px-3 py-2 text-white text-xs placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                      />
                    </div>
                    <input
                      type="text"
                      value={experience.company}
                      onChange={(e) =>
                        handleExperienceUpdate(
                          experience.id,
                          "company",
                          e.target.value
                        )
                      }
                      placeholder="Company"
                      className="w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg px-3 py-2 text-white text-sm placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                    />
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-white/70">Skills</span>
                        <button
                          onClick={() => addSkill(experience.id)}
                          className="w-6 h-6 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                        >
                          <Plus className="w-3 h-3 text-white" />
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill, skillIndex) => (
                          <div
                            key={skillIndex}
                            className="flex items-center gap-1"
                          >
                            <input
                              type="text"
                              value={skill}
                              onChange={(e) =>
                                handleSkillUpdate(
                                  experience.id,
                                  skillIndex,
                                  e.target.value
                                )
                              }
                              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-3 py-1 text-xs text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                            />
                            <button
                              onClick={() =>
                                removeSkill(experience.id, skillIndex)
                              }
                              className="w-4 h-4 rounded-full bg-red-500/80 flex items-center justify-center hover:bg-red-500 transition-all duration-300"
                            >
                              <X className="w-2 h-2 text-white" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-white">
                        {experience.title}
                      </h3>
                      <span className="text-xs text-white/70">
                        {experience.period}
                      </span>
                    </div>
                    <p className="text-sm text-white/80 mb-3">
                      {experience.company}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-white/10 backdrop-blur-lg rounded-full text-xs text-white border border-white/20 shadow-lg"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Education & Formation Section */}
        <div className="px-6 mb-8">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center justify-between">
            <div className="flex items-center">
              <Briefcase className="w-5 h-5 mr-2" />
              Education & Formation
            </div>
            {isEditMode && (
              <button
                onClick={addEducation}
                className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300"
              >
                <Plus className="w-4 h-4 text-white" />
              </button>
            )}
          </h2>

          <div className="space-y-4">
            {education.map((edu) => (
              <div
                key={edu.id}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10 shadow-xl hover:bg-white/10 hover:shadow-2xl transition-all duration-300 relative"
              >
                {isEditMode && (
                  <button
                    onClick={() => removeEducation(edu.id)}
                    className="absolute top-2 right-2 w-6 h-6 rounded-full bg-red-500/80 backdrop-blur-xl flex items-center justify-center hover:bg-red-500 transition-all duration-300"
                  >
                    <Trash2 className="w-3 h-3 text-white" />
                  </button>
                )}

                {isEditMode ? (
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={edu.course}
                        onChange={(e) =>
                          handleEducationUpdate(
                            edu.id,
                            "course",
                            e.target.value
                          )
                        }
                        placeholder="Course Name"
                        className="flex-1 bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg px-3 py-2 text-white font-semibold placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                      />
                      <input
                        type="text"
                        value={edu.period}
                        onChange={(e) =>
                          handleEducationUpdate(
                            edu.id,
                            "period",
                            e.target.value
                          )
                        }
                        placeholder="Period"
                        className="w-24 bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg px-3 py-2 text-white text-xs placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                      />
                    </div>
                    <input
                      type="text"
                      value={edu.institution}
                      onChange={(e) =>
                        handleEducationUpdate(
                          edu.id,
                          "institution",
                          e.target.value
                        )
                      }
                      placeholder="Institution"
                      className="w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg px-3 py-2 text-white text-sm placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                    />
                  </div>
                ) : (
                  <>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-white">{edu.course}</h3>
                      <span className="text-xs text-white/70">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-sm text-white/80">{edu.institution}</p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-xl z-50 flex items-center justify-center p-4">
            <div className="bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl max-w-sm w-full max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <h3 className="text-lg font-semibold text-white">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-lg hover:bg-white/20 hover:scale-110 transition-all duration-300 flex items-center justify-center border border-white/20 shadow-lg"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-4">
                <div className="aspect-video rounded-2xl overflow-hidden mb-4 relative border border-white/10 shadow-xl">
                  <img
                    src={selectedProject.images[currentImageIndex]}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Carousel Navigation */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-white/10 backdrop-blur-xl hover:bg-white/20 hover:scale-110 transition-all duration-300 flex items-center justify-center border border-white/20 shadow-lg"
                      >
                        <ChevronLeft className="w-4 h-4 text-white" />
                      </button>

                      <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-white/10 backdrop-blur-xl hover:bg-white/20 hover:scale-110 transition-all duration-300 flex items-center justify-center border border-white/20 shadow-lg"
                      >
                        <ChevronRight className="w-4 h-4 text-white" />
                      </button>

                      {/* Image Indicators */}
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                        {selectedProject.images.map((_: any, index: number) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              index === currentImageIndex
                                ? "bg-white shadow-lg scale-125"
                                : "bg-white/40 hover:bg-white/60"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <p className="text-white/90 text-sm leading-relaxed mb-4">
                  {selectedProject.description}
                </p>

                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg hover:bg-white/20 hover:scale-105 transition-all duration-300 px-4 py-2 rounded-xl text-white text-sm font-medium border border-white/20 shadow-lg"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View Project</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
