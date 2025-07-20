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
import { useNavigate } from "react-router";

const sidebarItems = [
  { id: "links", label: "Links", icon: LinkIcon, active: true },
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
  const navigator = useNavigate();
  const [activeTab, setActiveTab] = useState("links");
  const [profileData, setProfileData] = useState({
    displayName: "Alex Rodriguez",
    bio: "Passionate designer crafting digital experiences that blend creativity with user-centered thinking. 5+ years in tech.",
    title: "Senior Product Designer",
    profileImage: null as File | null,
  });
  const [links, setLinks] = useState(platforms);
  const [isPreviewMode, setIsPreviewMode] = useState(false);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
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
              onClick={() => navigator("/app")}
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
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 backdrop-blur-sm border border-blue-500/30"
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
                    className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 backdrop-blur-sm border border-purple-500/30"
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
                                handleUpdateLink(link.id, "url", e.target.value)
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
