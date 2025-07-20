import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Plus, User, LinkIcon, CheckCircle } from "lucide-react";
import { Link, useNavigate } from "react-router";

const platforms = [
  {
    id: "instagram",
    name: "Instagram",
    icon: "📷",
    color: "from-pink-500 to-purple-600",
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    icon: "💬",
    color: "from-green-500 to-green-600",
  },
  { id: "tiktok", name: "TikTok", icon: "🎵", color: "from-black to-gray-800" },
  {
    id: "youtube",
    name: "YouTube",
    icon: "📺",
    color: "from-red-500 to-red-600",
  },
  {
    id: "website",
    name: "Personal Website",
    icon: "🌐",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "spotify",
    name: "Spotify",
    icon: "🎧",
    color: "from-green-400 to-green-500",
  },
  {
    id: "threads",
    name: "Threads",
    icon: "🧵",
    color: "from-black to-gray-700",
  },
  {
    id: "facebook",
    name: "Facebook",
    icon: "👥",
    color: "from-blue-600 to-blue-700",
  },
  { id: "x", name: "X", icon: "🐦", color: "from-black to-gray-900" },
  {
    id: "soundcloud",
    name: "SoundCloud",
    icon: "🎶",
    color: "from-orange-500 to-orange-600",
  },
  {
    id: "snapchat",
    name: "Snapchat",
    icon: "👻",
    color: "from-yellow-400 to-yellow-500",
  },
  {
    id: "pinterest",
    name: "Pinterest",
    icon: "📌",
    color: "from-red-500 to-red-600",
  },
  {
    id: "patreon",
    name: "Patreon",
    icon: "🎨",
    color: "from-orange-500 to-red-500",
  },
  {
    id: "twitch",
    name: "Twitch",
    icon: "🎮",
    color: "from-purple-500 to-purple-600",
  },
  {
    id: "apple-music",
    name: "Apple Music",
    icon: "🎵",
    color: "from-red-500 to-pink-500",
  },
];

const templates = [
  {
    id: 1,
    name: "Minimal",
    color: "from-gray-100 to-gray-200",
    preview: "bg-white",
  },
  {
    id: 2,
    name: "Ocean",
    color: "from-blue-400 to-blue-600",
    preview: "bg-blue-500",
  },
  {
    id: 3,
    name: "Sunset",
    color: "from-orange-400 to-pink-500",
    preview: "bg-orange-500",
  },
  {
    id: 4,
    name: "Forest",
    color: "from-green-400 to-green-600",
    preview: "bg-green-500",
  },
  {
    id: 5,
    name: "Purple",
    color: "from-purple-400 to-purple-600",
    preview: "bg-purple-500",
  },
  {
    id: 6,
    name: "Dark",
    color: "from-gray-800 to-black",
    preview: "bg-gray-800",
  },
  {
    id: 7,
    name: "Rose",
    color: "from-pink-300 to-rose-400",
    preview: "bg-pink-400",
  },
  {
    id: 8,
    name: "Teal",
    color: "from-teal-400 to-cyan-500",
    preview: "bg-teal-500",
  },
];

export default function SetupFlow() {
  const navigation = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [platformLinks, setPlatformLinks] = useState<Record<string, string>>(
    {}
  );
  const [additionalLinks, setAdditionalLinks] = useState<string[]>([
    "",
    "",
    "",
  ]);
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);
  const [profileData, setProfileData] = useState({
    displayName: "",
    bio: "",
    profileImage: null as File | null,
  });

  const totalSteps = 5;
  const progress = (currentStep / totalSteps) * 100;

  const handlePlatformToggle = (platformId: string) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platformId)
        ? prev.filter((id) => id !== platformId)
        : [...prev, platformId]
    );
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold text-white">
                Which platforms are you on?
              </h1>
              <p className="text-slate-300 text-lg">
                Pick up to five to get started. You can update at any time.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              {platforms.map((platform) => (
                <Card
                  key={platform.id}
                  className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                    selectedPlatforms.includes(platform.id)
                      ? "bg-white/20 border-white/40 shadow-xl"
                      : "bg-white/10 border-white/20 hover:bg-white/15"
                  } backdrop-blur-xl`}
                  onClick={() => handlePlatformToggle(platform.id)}
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-r ${platform.color} flex items-center justify-center text-2xl shadow-lg`}
                    >
                      {platform.icon}
                    </div>
                    <p className="text-white font-medium">{platform.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Badge className="bg-blue-500/20 text-blue-300 border border-blue-500/30 backdrop-blur-sm">
                {selectedPlatforms.length}/5 selected
              </Badge>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold text-white">Add your links</h1>
              <p className="text-slate-300 text-lg">
                Complete the fields below to add your content to your new
                profile.
              </p>
            </div>

            <div className="max-w-2xl mx-auto space-y-6">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Your selections
                </h3>
                <div className="space-y-4">
                  {selectedPlatforms.map((platformId) => {
                    const platform = platforms.find((p) => p.id === platformId);
                    if (!platform) return null;

                    return (
                      <div key={platformId} className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-lg bg-gradient-to-r ${platform.color} flex items-center justify-center text-lg shadow-lg`}
                        >
                          {platform.icon}
                        </div>
                        <Input
                          placeholder={`${platform.name} ${
                            platform.id === "whatsapp"
                              ? "phone number"
                              : platform.id === "website"
                              ? "url"
                              : "username"
                          }`}
                          value={platformLinks[platformId] || ""}
                          onChange={(e) =>
                            setPlatformLinks((prev) => ({
                              ...prev,
                              [platformId]: e.target.value,
                            }))
                          }
                          className="bg-white/10 border-white/20 text-white placeholder-slate-400 backdrop-blur-sm"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <LinkIcon className="w-5 h-5 text-blue-400" />
                  Additional links
                </h3>
                <div className="space-y-3">
                  {additionalLinks.map((link, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                        <LinkIcon className="w-4 h-4 text-slate-400" />
                      </div>
                      <Input
                        placeholder="url"
                        value={link}
                        onChange={(e) => {
                          const newLinks = [...additionalLinks];
                          newLinks[index] = e.target.value;
                          setAdditionalLinks(newLinks);
                        }}
                        className="bg-white/10 border-white/20 text-white placeholder-slate-400 backdrop-blur-sm"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold text-white">
                Select a template
              </h1>
              <p className="text-slate-300 text-lg">
                Pick the style that feels right - you can add your content later
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {templates.map((template) => (
                <Card
                  key={template.id}
                  className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                    selectedTemplate === template.id
                      ? "bg-white/20 border-white/40 shadow-xl ring-2 ring-purple-500"
                      : "bg-white/10 border-white/20 hover:bg-white/15"
                  } backdrop-blur-xl`}
                  onClick={() => setSelectedTemplate(template.id)}
                >
                  <CardContent className="p-4">
                    <div className="aspect-[9/16] rounded-xl overflow-hidden mb-3 shadow-lg">
                      <div
                        className={`w-full h-full bg-gradient-to-b ${template.color} flex flex-col items-center justify-center p-4`}
                      >
                        <div className="w-8 h-8 bg-white/20 rounded-full mb-2"></div>
                        <div className="w-16 h-2 bg-white/30 rounded mb-2"></div>
                        <div className="w-12 h-1 bg-white/20 rounded mb-4"></div>
                        <div className="space-y-2 w-full">
                          <div className="h-6 bg-white/30 rounded-full"></div>
                          <div className="h-6 bg-white/30 rounded-full"></div>
                          <div className="h-6 bg-white/30 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    <p className="text-white font-medium text-center">
                      {template.name}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold text-white">
                Add profile details
              </h1>
              <p className="text-slate-300 text-lg">
                Add your profile image, name, and bio.
              </p>
            </div>

            <div className="max-w-md mx-auto space-y-6">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl flex items-center justify-center">
                    <User className="w-12 h-12 text-slate-400" />
                  </div>
                  <button className="absolute -bottom-2 -right-2 w-10 h-10 bg-black rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                    <Plus className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Display Name
                  </label>
                  <Input
                    placeholder="Your display name"
                    value={profileData.displayName}
                    onChange={(e) =>
                      setProfileData((prev) => ({
                        ...prev,
                        displayName: e.target.value,
                      }))
                    }
                    className="bg-white/10 border-white/20 text-white placeholder-slate-400 backdrop-blur-sm h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Bio
                  </label>
                  <Textarea
                    placeholder="Tell people about yourself..."
                    value={profileData.bio}
                    onChange={(e) =>
                      setProfileData((prev) => ({
                        ...prev,
                        bio: e.target.value,
                      }))
                    }
                    className="bg-white/10 border-white/20 text-white placeholder-slate-400 backdrop-blur-sm min-h-[100px] resize-none"
                    maxLength={160}
                  />
                  <div className="text-right text-sm text-slate-400 mt-1">
                    {profileData.bio.length}/160
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold text-white">Looking good!</h1>
              <p className="text-slate-300 text-lg">
                Your profile is off to a great start.
              </p>
              <p className="text-slate-300">
                Continue building to make it even better.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="w-64 h-[500px] bg-gradient-to-b from-gray-100 to-gray-200 rounded-3xl shadow-xl overflow-hidden">
                  <div className="p-6 text-center">
                    <div className="w-16 h-16 bg-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <User className="w-8 h-8 text-gray-600" />
                    </div>
                    <h3 className="text-blue-600 font-semibold text-lg mb-6">
                      {profileData.displayName || "Your Name"}
                    </h3>
                    <div className="space-y-3">
                      {selectedPlatforms.slice(0, 3).map((platformId) => {
                        const platform = platforms.find(
                          (p) => p.id === platformId
                        );
                        return (
                          <div
                            key={platformId}
                            className="bg-white rounded-full py-3 px-4 shadow-sm flex items-center justify-between"
                          >
                            <span className="text-blue-600 font-medium">
                              {platform?.name}
                            </span>
                            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={() => navigation("/dashboard")}
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-lg px-12 backdrop-blur-sm border border-purple-500/30 shadow-xl"
              >
                Continue building this profile
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
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
      <div className="relative z-10 flex justify-between items-center p-6">
        <Button
          variant="ghost"
          onClick={handleBack}
          disabled={currentStep === 1}
          className="text-slate-300 hover:text-white hover:bg-white/10 backdrop-blur-sm"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <div className="flex-1 max-w-md mx-8">
          <Progress
            value={progress}
            className="h-2 bg-white/10 backdrop-blur-sm border border-white/20"
          />
        </div>

        <Button
          variant="ghost"
          onClick={handleSkip}
          disabled={currentStep === totalSteps}
          className="text-slate-300 hover:text-white hover:bg-white/10 backdrop-blur-sm"
        >
          Skip
        </Button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-6 pb-32">
        <div className="max-w-6xl mx-auto">{renderStep()}</div>
      </div>

      {/* Footer */}
      {currentStep < totalSteps && (
        <div className="fixed bottom-0 left-0 right-0 p-6 bg-white/10 backdrop-blur-xl border-t border-white/20 shadow-2xl z-50">
          <div className="max-w-md mx-auto">
            <Button
              size="lg"
              onClick={handleNext}
              disabled={
                (currentStep === 1 && selectedPlatforms.length === 0) ||
                (currentStep === 3 && selectedTemplate === null) ||
                (currentStep === 4 && !profileData.displayName.trim())
              }
              className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-lg backdrop-blur-sm border border-purple-500/30 shadow-xl"
            >
              Continue
            </Button>
          </div>
        </div>
      )}

      {/* Cookie Preferences */}
      <div className="absolute bottom-4 left-4 z-40">
        <button className="text-xs text-slate-500 hover:text-slate-400 transition-colors">
          Cookie Preferences
        </button>
      </div>
    </div>
  );
}
