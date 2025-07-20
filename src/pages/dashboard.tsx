import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import {
  Settings,
  Plus,
  User,
  LinkIcon,
  BarChart3,
  Palette,
  Users,
  Lightbulb,
  Share2,
  Edit3,
  Copy,
  Eye,
  GripVertical,
  Trash2,
  ExternalLink,
  Mail,
  Phone,
  Linkedin,
  Globe,
} from "lucide-react";

const sidebarItems = [
  { id: "links", label: "Links", icon: LinkIcon, active: true },
  { id: "portfolio", label: "Portfolio", icon: User },
  { id: "experience", label: "Experience", icon: BarChart3 },
  { id: "education", label: "Education", icon: Lightbulb },
  { id: "appearance", label: "Appearance", icon: Palette },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
  { id: "settings", label: "Settings", icon: Settings },
];

const platforms = [
  {
    id: "whatsapp",
    name: "WhatsApp",
    icon: "💬",
    color: "from-green-500 to-green-600",
    url: "+1234567890",
  },
  {
    id: "instagram",
    name: "Instagram",
    icon: "📷",
    color: "from-pink-500 to-purple-600",
    url: "@alexrodriguez",
  },
  {
    id: "youtube",
    name: "YouTube",
    icon: "📺",
    color: "from-red-500 to-red-600",
    url: "youtube.com/alexrodriguez",
  },
  {
    id: "website",
    name: "Personal Website",
    icon: "🌐",
    color: "from-blue-500 to-blue-600",
    url: "alexrodriguez.com",
  },
  {
    id: "tiktok",
    name: "TikTok",
    icon: "🎵",
    color: "from-black to-gray-800",
    url: "@alexrodriguez",
  },
  {
    id: "spotify",
    name: "Spotify",
    icon: "🎧",
    color: "from-green-400 to-green-500",
    url: "spotify.com/alexrodriguez",
  },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("links");
  const [profileData, setProfileData] = useState({
    displayName: "Alex Rodriguez",
    bio: "Passionate designer crafting digital experiences that blend creativity with user-centered thinking. 5+ years in tech.",
    title: "Senior Product Designer",
    profileImage: null as File | null,
  });
  const [links, setLinks] = useState(platforms);

  const [portfolioProjects, setPortfolioProjects] = useState([
    {
      id: 1,
      title: "Banking Dashboard",
      description:
        "A comprehensive banking dashboard with intuitive user interface, real-time analytics, and secure transaction management.",
      url: "https://example.com/banking-dashboard",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "E-commerce App",
      description:
        "A modern e-commerce mobile application with intuitive user interface, seamless checkout process, and personalized shopping experience.",
      url: "https://example.com/ecommerce-app",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Data Visualization",
      description:
        "Interactive data visualization dashboard with real-time charts, analytics, and reporting capabilities.",
      url: "https://example.com/data-viz",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]);

  const [experienceData, setExperienceData] = useState([
    {
      id: 1,
      title: "Senior Product Designer",
      company: "TechFlow Inc.",
      startDate: "2022",
      endDate: "Present",
      skills: ["UI/UX Design", "Figma", "User Research"],
    },
    {
      id: 2,
      title: "Product Designer",
      company: "DesignHub Studio",
      startDate: "2020",
      endDate: "2022",
      skills: ["Prototyping", "Adobe XD", "Wireframing"],
    },
  ]);

  const [educationData, setEducationData] = useState([
    {
      id: 1,
      degree: "Master in UX/UI Design",
      institution: "Design Institute",
      startDate: "2019",
      endDate: "2020",
    },
    {
      id: 2,
      degree: "Bachelor in Graphic Design",
      institution: "Art University",
      startDate: "2015",
      endDate: "2019",
    },
  ]);

  const [editingProject, setEditingProject] = useState<any>(null);
  const [editingExperience, setEditingExperience] = useState<any>(null);
  const [editingEducation, setEditingEducation] = useState<any>(null);

  const [selectedTheme, setSelectedTheme] = useState("ocean");

  const themeOptions = [
    {
      id: "ocean",
      name: "Ocean",
      gradient: "from-slate-900 via-blue-900 to-slate-900",
      preview: "from-blue-500 to-blue-700",
      accent: "from-blue-600 to-blue-700",
    },
    {
      id: "sunset",
      name: "Sunset",
      gradient: "from-orange-900 via-red-900 to-pink-900",
      preview: "from-orange-500 to-red-600",
      accent: "from-orange-600 to-red-700",
    },
    {
      id: "forest",
      name: "Forest",
      gradient: "from-green-900 via-emerald-900 to-teal-900",
      preview: "from-green-500 to-emerald-600",
      accent: "from-green-600 to-emerald-700",
    },
    {
      id: "purple",
      name: "Purple Dream",
      gradient: "from-purple-900 via-violet-900 to-indigo-900",
      preview: "from-purple-500 to-violet-600",
      accent: "from-purple-600 to-violet-700",
    },
    {
      id: "rose",
      name: "Rose Gold",
      gradient: "from-pink-900 via-rose-900 to-red-900",
      preview: "from-pink-500 to-rose-600",
      accent: "from-pink-600 to-rose-700",
    },
    {
      id: "midnight",
      name: "Midnight",
      gradient: "from-gray-900 via-slate-900 to-black",
      preview: "from-gray-600 to-slate-700",
      accent: "from-gray-600 to-slate-700",
    },
    {
      id: "aurora",
      name: "Aurora",
      gradient: "from-cyan-900 via-blue-900 to-purple-900",
      preview: "from-cyan-500 to-purple-600",
      accent: "from-cyan-600 to-purple-700",
    },
    {
      id: "ember",
      name: "Ember",
      gradient: "from-yellow-900 via-orange-900 to-red-900",
      preview: "from-yellow-500 to-red-600",
      accent: "from-yellow-600 to-red-700",
    },
  ];

  const currentTheme =
    themeOptions.find((theme) => theme.id === selectedTheme) || themeOptions[0];

  const handleAddLink = () => {
    const newLink = {
      id: `custom-${Date.now()}`,
      name: "New Link",
      icon: "🔗",
      color: "from-gray-500 to-gray-600",
      url: "",
    };
    setLinks([...links, newLink]);
  };

  const handleDeleteLink = (id: string) => {
    setLinks(links.filter((link) => link.id !== id));
  };

  const handleUpdateLink = (id: string, field: string, value: string) => {
    setLinks(
      links.map((link) => (link.id === id ? { ...link, [field]: value } : link))
    );
  };

  const handleAddProject = () => {
    const newProject = {
      id: Date.now(),
      title: "New Project",
      description: "Project description...",
      url: "",
      image: "/placeholder.svg?height=200&width=300",
    };
    setPortfolioProjects([...portfolioProjects, newProject]);
    setEditingProject(newProject);
  };

  const handleDeleteProject = (id: number) => {
    setPortfolioProjects(
      portfolioProjects.filter((project) => project.id !== id)
    );
    if (editingProject?.id === id) {
      setEditingProject(null);
    }
  };

  const handleUpdateProject = (id: number, field: string, value: string) => {
    setPortfolioProjects(
      portfolioProjects.map((project) =>
        project.id === id ? { ...project, [field]: value } : project
      )
    );
    if (editingProject?.id === id) {
      setEditingProject({ ...editingProject, [field]: value });
    }
  };

  const handleAddExperience = () => {
    const newExperience = {
      id: Date.now(),
      title: "New Position",
      company: "Company Name",
      startDate: "",
      endDate: "",
      skills: [],
    };
    setExperienceData([...experienceData, newExperience]);
    setEditingExperience(newExperience);
  };

  const handleDeleteExperience = (id: number) => {
    setExperienceData(experienceData.filter((exp) => exp.id !== id));
    if (editingExperience?.id === id) {
      setEditingExperience(null);
    }
  };

  const handleUpdateExperience = (id: number, field: string, value: any) => {
    setExperienceData(
      experienceData.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    );
    if (editingExperience?.id === id) {
      setEditingExperience({ ...editingExperience, [field]: value });
    }
  };

  const handleAddSkill = (experienceId: number, skill: string) => {
    if (skill.trim()) {
      const experience = experienceData.find((exp) => exp.id === experienceId);
      if (experience && !experience.skills.includes(skill.trim())) {
        handleUpdateExperience(experienceId, "skills", [
          ...experience.skills,
          skill.trim(),
        ]);
      }
    }
  };

  const handleRemoveSkill = (experienceId: number, skillToRemove: string) => {
    const experience = experienceData.find((exp) => exp.id === experienceId);
    if (experience) {
      handleUpdateExperience(
        experienceId,
        "skills",
        experience.skills.filter((skill) => skill !== skillToRemove)
      );
    }
  };

  const handleAddEducation = () => {
    const newEducation = {
      id: Date.now(),
      degree: "New Degree",
      institution: "Institution Name",
      startDate: "",
      endDate: "",
    };
    setEducationData([...educationData, newEducation]);
    setEditingEducation(newEducation);
  };

  const handleDeleteEducation = (id: number) => {
    setEducationData(educationData.filter((edu) => edu.id !== id));
    if (editingEducation?.id === id) {
      setEditingEducation(null);
    }
  };

  const handleUpdateEducation = (id: number, field: string, value: string) => {
    setEducationData(
      educationData.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    );
    if (editingEducation?.id === id) {
      setEditingEducation({ ...editingEducation, [field]: value });
    }
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-br ${currentTheme.gradient} relative overflow-hidden`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-white/20 backdrop-blur-xl bg-white/5">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
              <div className="grid grid-cols-2 gap-0.5">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-sm"></div>
                <div className="w-1.5 h-1.5 bg-green-400 rounded-sm"></div>
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-sm"></div>
                <div className="w-1.5 h-1.5 bg-red-400 rounded-sm"></div>
              </div>
            </div>
            <h1 className="text-xl font-semibold text-white">
              ProfileGen Dashboard
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="border-white/20 text-slate-300 hover:bg-white/10 bg-white/5 backdrop-blur-sm"
            >
              <Eye className="w-4 h-4 mr-2" />
              Preview
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-white/20 text-slate-300 hover:bg-white/10 bg-white/5 backdrop-blur-sm"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button
              size="sm"
              className={`bg-gradient-to-r ${currentTheme.accent} hover:opacity-90 backdrop-blur-sm border border-white/30`}
            >
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-80px)]">
        {/* Sidebar */}
        <aside className="w-64 border-r border-white/20 backdrop-blur-xl bg-white/5 relative z-10">
          <div className="p-6">
            <div className="space-y-2">
              {sidebarItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    activeTab === item.id
                      ? "bg-white/20 text-white shadow-lg backdrop-blur-sm border border-white/30"
                      : "text-slate-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </button>
              ))}
            </div>

            <Separator className="my-6 bg-white/20" />

            <div className="space-y-2">
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-300 hover:bg-white/10 hover:text-white transition-all duration-200">
                <BarChart3 className="w-5 h-5" />
                Analytics
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-300 hover:bg-white/10 hover:text-white transition-all duration-200">
                <Users className="w-5 h-5" />
                Audience
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-300 hover:bg-white/10 hover:text-white transition-all duration-200">
                <Lightbulb className="w-5 h-5" />
                Ideas
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex">
          {/* Editor Panel */}
          <div className="flex-1 p-6 overflow-y-auto">
            <div className="max-w-2xl mx-auto space-y-6">
              {activeTab === "links" && (
                <>
                  {/* Profile Header */}
                  <Card className="bg-white/10 border border-white/20 backdrop-blur-xl shadow-xl">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="relative">
                          <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl flex items-center justify-center">
                            <User className="w-8 h-8 text-slate-400" />
                          </div>
                          <button className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                            <Edit3 className="w-3 h-3 text-white" />
                          </button>
                        </div>
                        <div className="flex-1 space-y-3">
                          <Input
                            value={profileData.displayName}
                            onChange={(e) =>
                              setProfileData((prev) => ({
                                ...prev,
                                displayName: e.target.value,
                              }))
                            }
                            className="bg-white/10 border-white/20 text-white placeholder-slate-400 backdrop-blur-sm font-semibold text-lg"
                            placeholder="Your name"
                          />
                          <Input
                            value={profileData.title}
                            onChange={(e) =>
                              setProfileData((prev) => ({
                                ...prev,
                                title: e.target.value,
                              }))
                            }
                            className="bg-white/10 border-white/20 text-white placeholder-slate-400 backdrop-blur-sm"
                            placeholder="Your title"
                          />
                          <Textarea
                            value={profileData.bio}
                            onChange={(e) =>
                              setProfileData((prev) => ({
                                ...prev,
                                bio: e.target.value,
                              }))
                            }
                            className="bg-white/10 border-white/20 text-white placeholder-slate-400 backdrop-blur-sm resize-none"
                            placeholder="Tell people about yourself..."
                            rows={3}
                            maxLength={160}
                          />
                          <div className="text-right text-sm text-slate-400">
                            {profileData.bio.length}/160
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Links Section */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-semibold text-white">
                        Your Links
                      </h2>
                      <Button
                        onClick={handleAddLink}
                        size="sm"
                        className={`bg-gradient-to-r ${currentTheme.accent} hover:opacity-90 backdrop-blur-sm border border-white/30`}
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Add Link
                      </Button>
                    </div>

                    <div className="space-y-3">
                      {links.map((link, index) => (
                        <Card
                          key={link.id}
                          className="bg-white/10 border border-white/20 backdrop-blur-xl shadow-xl hover:bg-white/15 transition-all duration-200"
                        >
                          <CardContent className="p-4">
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-3">
                                <GripVertical className="w-4 h-4 text-slate-400 cursor-grab" />
                                <div
                                  className={`w-10 h-10 rounded-lg bg-gradient-to-r ${link.color} flex items-center justify-center text-lg shadow-lg`}
                                >
                                  {link.icon}
                                </div>
                              </div>
                              <div className="flex-1 space-y-2">
                                <Input
                                  value={link.name}
                                  onChange={(e) =>
                                    handleUpdateLink(
                                      link.id,
                                      "name",
                                      e.target.value
                                    )
                                  }
                                  className="bg-white/10 border-white/20 text-white placeholder-slate-400 backdrop-blur-sm"
                                  placeholder="Link title"
                                />
                                <Input
                                  value={link.url}
                                  onChange={(e) =>
                                    handleUpdateLink(
                                      link.id,
                                      "url",
                                      e.target.value
                                    )
                                  }
                                  className="bg-white/10 border-white/20 text-white placeholder-slate-400 backdrop-blur-sm"
                                  placeholder="URL"
                                />
                              </div>
                              <div className="flex items-center gap-2">
                                <Switch defaultChecked />
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => handleDeleteLink(link.id)}
                                  className="text-slate-400 hover:text-red-400 hover:bg-red-500/10"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {activeTab === "appearance" && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">
                      Appearance
                    </h2>
                    <p className="text-slate-300">
                      Customize the look and feel of your profile
                    </p>
                  </div>

                  <Card className="bg-white/10 border border-white/20 backdrop-blur-xl shadow-xl">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-white mb-4">
                        Background Theme
                      </h3>
                      <p className="text-slate-300 text-sm mb-6">
                        Choose a background gradient that matches your style
                      </p>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {themeOptions.map((theme) => (
                          <div
                            key={theme.id}
                            onClick={() => setSelectedTheme(theme.id)}
                            className={`cursor-pointer group transition-all duration-300 ${
                              selectedTheme === theme.id
                                ? "scale-105"
                                : "hover:scale-102"
                            }`}
                          >
                            <div
                              className={`aspect-square rounded-2xl bg-gradient-to-br ${
                                theme.gradient
                              } p-4 border-2 transition-all duration-300 ${
                                selectedTheme === theme.id
                                  ? "border-white/60 shadow-2xl"
                                  : "border-white/20 hover:border-white/40 shadow-lg"
                              }`}
                            >
                              <div className="w-full h-full rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                                <div className="grid grid-cols-2 gap-1">
                                  <div
                                    className={`w-3 h-3 rounded-sm bg-gradient-to-br ${theme.preview}`}
                                  ></div>
                                  <div className="w-3 h-3 rounded-sm bg-white/30"></div>
                                  <div className="w-3 h-3 rounded-sm bg-white/20"></div>
                                  <div
                                    className={`w-3 h-3 rounded-sm bg-gradient-to-br ${theme.accent}`}
                                  ></div>
                                </div>
                              </div>
                            </div>
                            <div className="text-center mt-3">
                              <p
                                className={`font-medium transition-colors ${
                                  selectedTheme === theme.id
                                    ? "text-white"
                                    : "text-slate-300"
                                }`}
                              >
                                {theme.name}
                              </p>
                              {selectedTheme === theme.id && (
                                <div className="w-2 h-2 bg-white rounded-full mx-auto mt-1"></div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/10 border border-white/20 backdrop-blur-xl shadow-xl">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-white mb-4">
                        Preview
                      </h3>
                      <div
                        className={`rounded-2xl bg-gradient-to-br ${currentTheme.gradient} p-6 border border-white/20`}
                      >
                        <div className="bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/20">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/20"></div>
                            <div>
                              <div className="w-24 h-3 bg-white/30 rounded mb-1"></div>
                              <div className="w-16 h-2 bg-white/20 rounded"></div>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div
                              className={`h-8 bg-gradient-to-r ${currentTheme.accent} rounded-lg`}
                            ></div>
                            <div className="h-8 bg-white/20 rounded-lg"></div>
                            <div className="h-8 bg-white/15 rounded-lg"></div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {activeTab === "portfolio" && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">
                      Portfolio
                    </h2>
                    <p className="text-slate-300">
                      Showcase your best work and projects
                    </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {portfolioProjects.map((project) => (
                      <Card
                        key={project.id}
                        className="bg-white/10 border border-white/20 backdrop-blur-xl shadow-xl hover:bg-white/15 transition-all duration-200 cursor-pointer group"
                        onClick={() => setEditingProject(project)}
                      >
                        <CardContent className="p-0 relative">
                          <div className="aspect-square rounded-lg overflow-hidden">
                            <img
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <Edit3 className="w-6 h-6 text-white" />
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDeleteProject(project.id);
                            }}
                            className="absolute top-2 right-2 w-8 h-8 p-0 bg-red-500/80 hover:bg-red-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </CardContent>
                      </Card>
                    ))}

                    <Card
                      className="bg-white/5 border-2 border-dashed border-white/30 backdrop-blur-xl hover:bg-white/10 transition-all duration-200 cursor-pointer"
                      onClick={handleAddProject}
                    >
                      <CardContent className="aspect-square flex items-center justify-center">
                        <div className="text-center">
                          <Plus className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                          <p className="text-slate-400 text-sm">Add Project</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {editingProject && (
                    <Card className="bg-white/10 border border-white/20 backdrop-blur-xl shadow-xl">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-semibold text-white">
                            Edit Project
                          </h3>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setEditingProject(null)}
                            className="text-slate-400 hover:text-white"
                          >
                            ✕
                          </Button>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                              Project Title
                            </label>
                            <Input
                              value={editingProject.title}
                              onChange={(e) =>
                                handleUpdateProject(
                                  editingProject.id,
                                  "title",
                                  e.target.value
                                )
                              }
                              className="bg-white/10 border-white/20 text-white placeholder-slate-400 backdrop-blur-sm"
                              placeholder="Project title"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                              Description
                            </label>
                            <Textarea
                              value={editingProject.description}
                              onChange={(e) =>
                                handleUpdateProject(
                                  editingProject.id,
                                  "description",
                                  e.target.value
                                )
                              }
                              className="bg-white/10 border-white/20 text-white placeholder-slate-400 backdrop-blur-sm resize-none"
                              placeholder="Project description..."
                              rows={3}
                              maxLength={200}
                            />
                            <div className="text-right text-sm text-slate-400 mt-1">
                              {editingProject.description.length}/200
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                              Project URL
                            </label>
                            <Input
                              value={editingProject.url}
                              onChange={(e) =>
                                handleUpdateProject(
                                  editingProject.id,
                                  "url",
                                  e.target.value
                                )
                              }
                              className="bg-white/10 border-white/20 text-white placeholder-slate-400 backdrop-blur-sm"
                              placeholder="https://example.com/project"
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              )}
              {activeTab === "experience" && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-2">
                        Experience & Skills
                      </h2>
                      <p className="text-slate-300">
                        Add your work experience and skills
                      </p>
                    </div>
                    <Button
                      onClick={handleAddExperience}
                      size="sm"
                      className={`bg-gradient-to-r ${currentTheme.accent} hover:opacity-90 backdrop-blur-sm border border-white/30`}
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add Experience
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {experienceData.map((experience) => (
                      <Card
                        key={experience.id}
                        className="bg-white/10 border border-white/20 backdrop-blur-xl shadow-xl hover:bg-white/15 transition-all duration-200 cursor-pointer"
                        onClick={() => setEditingExperience(experience)}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <h3 className="text-white font-semibold text-lg mb-1">
                                {experience.title}
                              </h3>
                              <p className="text-slate-300 mb-2">
                                {experience.company}
                              </p>
                              <p className="text-slate-400 text-sm">
                                {experience.startDate} - {experience.endDate}
                              </p>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDeleteExperience(experience.id);
                              }}
                              className="text-slate-400 hover:text-red-400 hover:bg-red-500/10"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {experience.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-3 py-1 bg-white/20 text-white text-sm rounded-full border border-white/30"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {editingExperience && (
                    <Card className="bg-white/10 border border-white/20 backdrop-blur-xl shadow-xl">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-semibold text-white">
                            Edit Experience
                          </h3>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setEditingExperience(null)}
                            className="text-slate-400 hover:text-white"
                          >
                            ✕
                          </Button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                              Job Title
                            </label>
                            <Input
                              value={editingExperience.title}
                              onChange={(e) =>
                                handleUpdateExperience(
                                  editingExperience.id,
                                  "title",
                                  e.target.value
                                )
                              }
                              className="bg-white/10 border-white/20 text-white placeholder-slate-400 backdrop-blur-sm"
                              placeholder="Job title"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                              Company
                            </label>
                            <Input
                              value={editingExperience.company}
                              onChange={(e) =>
                                handleUpdateExperience(
                                  editingExperience.id,
                                  "company",
                                  e.target.value
                                )
                              }
                              className="bg-white/10 border-white/20 text-white placeholder-slate-400 backdrop-blur-sm"
                              placeholder="Company name"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                              Start Date
                            </label>
                            <Input
                              value={editingExperience.startDate}
                              onChange={(e) =>
                                handleUpdateExperience(
                                  editingExperience.id,
                                  "startDate",
                                  e.target.value
                                )
                              }
                              className="bg-white/10 border-white/20 text-white placeholder-slate-400 backdrop-blur-sm"
                              placeholder="2022"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                              End Date
                            </label>
                            <Input
                              value={editingExperience.endDate}
                              onChange={(e) =>
                                handleUpdateExperience(
                                  editingExperience.id,
                                  "endDate",
                                  e.target.value
                                )
                              }
                              className="bg-white/10 border-white/20 text-white placeholder-slate-400 backdrop-blur-sm"
                              placeholder="Present"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">
                            Skills
                          </label>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {editingExperience.skills.map((skill: string) => (
                              <span
                                key={skill}
                                className="px-3 py-1 bg-white/20 text-white text-sm rounded-full border border-white/30 flex items-center gap-2"
                              >
                                {skill}
                                <button
                                  onClick={() =>
                                    handleRemoveSkill(
                                      editingExperience.id,
                                      skill
                                    )
                                  }
                                  className="text-red-400 hover:text-red-300"
                                >
                                  ✕
                                </button>
                              </span>
                            ))}
                          </div>
                          <div className="flex gap-2">
                            <Input
                              placeholder="Add a skill"
                              className="bg-white/10 border-white/20 text-white placeholder-slate-400 backdrop-blur-sm"
                              onKeyPress={(e) => {
                                if (e.key === "Enter") {
                                  handleAddSkill(
                                    editingExperience.id,
                                    e.currentTarget.value
                                  );
                                  e.currentTarget.value = "";
                                }
                              }}
                            />
                            <Button
                              onClick={(e) => {
                                const input = e.currentTarget
                                  .previousElementSibling as HTMLInputElement;
                                handleAddSkill(
                                  editingExperience.id,
                                  input.value
                                );
                                input.value = "";
                              }}
                              size="sm"
                              className={`bg-gradient-to-r ${currentTheme.accent} hover:opacity-90`}
                            >
                              Add
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              )}
              {activeTab === "education" && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-2">
                        Education & Formation
                      </h2>
                      <p className="text-slate-300">
                        Add your educational background
                      </p>
                    </div>
                    <Button
                      onClick={handleAddEducation}
                      size="sm"
                      className={`bg-gradient-to-r ${currentTheme.accent} hover:opacity-90 backdrop-blur-sm border border-white/30`}
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add Education
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {educationData.map((education) => (
                      <Card
                        key={education.id}
                        className="bg-white/10 border border-white/20 backdrop-blur-xl shadow-xl hover:bg-white/15 transition-all duration-200 cursor-pointer"
                        onClick={() => setEditingEducation(education)}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h3 className="text-white font-semibold text-lg mb-1">
                                {education.degree}
                              </h3>
                              <p className="text-slate-300 mb-2">
                                {education.institution}
                              </p>
                              <p className="text-slate-400 text-sm">
                                {education.startDate} - {education.endDate}
                              </p>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDeleteEducation(education.id);
                              }}
                              className="text-slate-400 hover:text-red-400 hover:bg-red-500/10"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {editingEducation && (
                    <Card className="bg-white/10 border border-white/20 backdrop-blur-xl shadow-xl">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-semibold text-white">
                            Edit Education
                          </h3>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setEditingEducation(null)}
                            className="text-slate-400 hover:text-white"
                          >
                            ✕
                          </Button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                              Degree
                            </label>
                            <Input
                              value={editingEducation.degree}
                              onChange={(e) =>
                                handleUpdateEducation(
                                  editingEducation.id,
                                  "degree",
                                  e.target.value
                                )
                              }
                              className="bg-white/10 border-white/20 text-white placeholder-slate-400 backdrop-blur-sm"
                              placeholder="Degree name"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                              Institution
                            </label>
                            <Input
                              value={editingEducation.institution}
                              onChange={(e) =>
                                handleUpdateEducation(
                                  editingEducation.id,
                                  "institution",
                                  e.target.value
                                )
                              }
                              className="bg-white/10 border-white/20 text-white placeholder-slate-400 backdrop-blur-sm"
                              placeholder="Institution name"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                              Start Date
                            </label>
                            <Input
                              value={editingEducation.startDate}
                              onChange={(e) =>
                                handleUpdateEducation(
                                  editingEducation.id,
                                  "startDate",
                                  e.target.value
                                )
                              }
                              className="bg-white/10 border-white/20 text-white placeholder-slate-400 backdrop-blur-sm"
                              placeholder="2019"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                              End Date
                            </label>
                            <Input
                              value={editingEducation.endDate}
                              onChange={(e) =>
                                handleUpdateEducation(
                                  editingEducation.id,
                                  "endDate",
                                  e.target.value
                                )
                              }
                              className="bg-white/10 border-white/20 text-white placeholder-slate-400 backdrop-blur-sm"
                              placeholder="2020"
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Preview Panel */}
          <div className="w-96 border-l border-white/20 backdrop-blur-xl bg-white/5 p-6 overflow-y-auto">
            <div className="sticky top-0 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">Preview</h3>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-slate-400 hover:text-white hover:bg-white/10"
                  >
                    <Edit3 className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-slate-400 hover:text-white hover:bg-white/10"
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Mobile Preview */}
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl">
                <div className="w-full max-w-sm mx-auto">
                  {/* Profile Section */}
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-400 to-red-500 mx-auto mb-4 shadow-lg border border-white/20 flex items-center justify-center">
                      <User className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-white text-xl font-bold mb-1">
                      {profileData.displayName}
                    </h2>
                    <p className="text-blue-200 text-sm font-medium mb-2">
                      {profileData.title}
                    </p>
                    <p className="text-blue-300 text-xs leading-relaxed px-4">
                      {profileData.bio}
                    </p>
                  </div>

                  {/* Contact Buttons */}
                  <div className="grid grid-cols-4 gap-2 mb-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 text-center border border-white/20">
                      <Mail className="w-4 h-4 mx-auto mb-1 text-blue-200" />
                      <span className="text-blue-200 text-xs">Email</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 text-center border border-white/20">
                      <Phone className="w-4 h-4 mx-auto mb-1 text-blue-200" />
                      <span className="text-blue-200 text-xs">Phone</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 text-center border border-white/20">
                      <Linkedin className="w-4 h-4 mx-auto mb-1 text-blue-200" />
                      <span className="text-blue-200 text-xs">LinkedIn</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 text-center border border-white/20">
                      <Globe className="w-4 h-4 mx-auto mb-1 text-blue-200" />
                      <span className="text-blue-200 text-xs">Portfolio</span>
                    </div>
                  </div>

                  {/* Portfolio Section */}
                  {portfolioProjects.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <div className="w-4 h-4 bg-blue-400 rounded shadow-lg"></div>
                        Key Projects
                      </h4>
                      <div className="grid grid-cols-3 gap-2">
                        {portfolioProjects.slice(0, 6).map((project) => (
                          <div
                            key={project.id}
                            className="aspect-square bg-gradient-to-br from-purple-500/80 to-pink-500/80 rounded-lg backdrop-blur-sm border border-white/20 shadow-lg hover:scale-105 transition-transform overflow-hidden"
                          >
                            <img
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Experience & Skills Section */}
                  {experienceData.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <div className="w-4 h-4 bg-blue-400 rounded shadow-lg"></div>
                        Experience & Skills
                      </h4>
                      <div className="space-y-3">
                        {experienceData.slice(0, 3).map((experience) => (
                          <div
                            key={experience.id}
                            className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                          >
                            <div className="flex items-start justify-between mb-2">
                              <h5 className="text-white font-medium text-sm">
                                {experience.title}
                              </h5>
                              <span className="text-slate-400 text-xs">
                                {experience.startDate} - {experience.endDate}
                              </span>
                            </div>
                            <p className="text-slate-300 text-xs mb-3">
                              {experience.company}
                            </p>
                            <div className="flex flex-wrap gap-1">
                              {experience.skills.slice(0, 3).map((skill) => (
                                <span
                                  key={skill}
                                  className="px-2 py-1 bg-white/20 text-white text-xs rounded-full border border-white/30"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Education Section */}
                  {educationData.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <div className="w-4 h-4 bg-blue-400 rounded shadow-lg"></div>
                        Education & Formation
                      </h4>
                      <div className="space-y-3">
                        {educationData.slice(0, 3).map((education) => (
                          <div
                            key={education.id}
                            className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                          >
                            <div className="flex items-start justify-between mb-2">
                              <h5 className="text-white font-medium text-sm">
                                {education.degree}
                              </h5>
                              <span className="text-slate-400 text-xs">
                                {education.startDate} - {education.endDate}
                              </span>
                            </div>
                            <p className="text-slate-300 text-xs">
                              {education.institution}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Links */}
                  <div className="space-y-3">
                    {links.slice(0, 6).map((link) => (
                      <div
                        key={link.id}
                        className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20 hover:bg-white/20 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-8 h-8 rounded-lg bg-gradient-to-r ${link.color} flex items-center justify-center text-sm shadow-lg`}
                          >
                            {link.icon}
                          </div>
                          <div className="flex-1">
                            <p className="text-white font-medium text-sm">
                              {link.name}
                            </p>
                            <p className="text-blue-300 text-xs truncate">
                              {link.url}
                            </p>
                          </div>
                          <ExternalLink className="w-4 h-4 text-slate-400" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Share Options */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/20 shadow-xl">
                <h4 className="text-white font-medium mb-3">
                  Share your profile
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 p-2 bg-white/5 rounded-lg">
                    <span className="text-blue-300 text-sm font-mono flex-1 truncate">
                      profilegen.com/
                      {profileData.displayName
                        .toLowerCase()
                        .replace(/\s+/g, "")}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-slate-400 hover:text-white"
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
