import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Sparkles,
  Zap,
  Users,
  CheckCircle,
  Star,
} from "lucide-react";
import { Link } from "react-router";
import { useLanguage } from "@/context/i18n";
import { LanguageSwitcher } from "@/components/language-switcher";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 border-b border-white/20 backdrop-blur-xl bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                <div className="grid grid-cols-2 gap-0.5">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-sm"></div>
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-sm"></div>
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-sm"></div>
                  <div className="w-1.5 h-1.5 bg-red-400 rounded-sm"></div>
                </div>
              </div>
              <span className="text-white font-semibold text-lg">
                ProfileGen
              </span>
            </div>
            <div className="flex items-center gap-6">
              <Link
                to="#features"
                className="text-slate-300 hover:text-white transition-colors"
              >
                {t("nav.features")}
              </Link>
              <Link
                to="#examples"
                className="text-slate-300 hover:text-white transition-colors"
              >
                {t("nav.examples")}
              </Link>
              <Link
                to="#pricing"
                className="text-slate-300 hover:text-white transition-colors"
              >
                {t("nav.pricing")}
              </Link>
              <LanguageSwitcher />
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 backdrop-blur-sm border border-blue-500/30 shadow-lg">
                {t("nav.getStarted")}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-500/20 text-blue-300 border border-blue-500/30 backdrop-blur-sm shadow-lg">
                  <Sparkles className="w-3 h-3 mr-1" />
                  {t("hero.badge")}
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  {t("hero.title")}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {" "}
                    {t("hero.titleHighlight")}
                  </span>
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed">
                  {t("hero.subtitle")}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-lg px-8 backdrop-blur-sm border border-blue-500/30 shadow-xl"
                >
                  {t("hero.generateProfile")}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border border-white/20 text-slate-300 hover:bg-white/10 bg-white/5 backdrop-blur-sm shadow-lg"
                >
                  {t("hero.viewExamples")}
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 shadow-lg">
                  <div className="text-2xl font-bold text-white">10K+</div>
                  <div className="text-sm text-slate-400">
                    {t("hero.stats.profiles")}
                  </div>
                </div>
                <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 shadow-lg">
                  <div className="text-2xl font-bold text-white">95%</div>
                  <div className="text-sm text-slate-400">
                    {t("hero.stats.success")}
                  </div>
                </div>
                <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 shadow-lg">
                  <div className="text-2xl font-bold text-white">4.9★</div>
                  <div className="text-sm text-slate-400">
                    {t("hero.stats.rating")}
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Preview */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl">
                <div className="space-y-6">
                  {/* Profile Header */}
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-red-500 overflow-hidden flex-shrink-0 shadow-lg border border-white/20">
                      <img
                        src="/placeholder.svg?height=64&width=64"
                        alt={t("preview.name")}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white text-xl font-bold mb-1">
                        {t("preview.name")}
                      </h3>
                      <p className="text-blue-200 text-sm font-medium mb-2">
                        {t("preview.title")}
                      </p>
                      <p className="text-blue-300 text-xs leading-relaxed">
                        {t("preview.bio")}
                      </p>
                    </div>
                  </div>

                  {/* Contact Buttons */}
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { key: "preview.email", label: t("preview.email") },
                      { key: "preview.phone", label: t("preview.phone") },
                      { key: "preview.linkedin", label: t("preview.linkedin") },
                      {
                        key: "preview.portfolio",
                        label: t("preview.portfolio"),
                      },
                    ].map((contact) => (
                      <div
                        key={contact.key}
                        className="bg-white/10 backdrop-blur-sm rounded-lg p-2 text-center border border-white/20 hover:bg-white/20 transition-colors shadow-lg"
                      >
                        <div className="w-4 h-4 mx-auto mb-1 text-blue-200">
                          <div className="w-full h-full bg-current rounded-sm"></div>
                        </div>
                        <span className="text-blue-200 text-xs">
                          {contact.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Projects Grid */}
                  <div>
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <div className="w-4 h-4 bg-blue-400 rounded shadow-lg"></div>
                      {t("preview.keyProjects")}
                    </h4>
                    <div className="grid grid-cols-3 gap-2">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div
                          key={i}
                          className="aspect-square bg-gradient-to-br from-purple-500/80 to-pink-500/80 rounded-lg backdrop-blur-sm border border-white/20 shadow-lg hover:scale-105 transition-transform"
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/60 rounded-full animate-pulse backdrop-blur-sm border border-blue-400/30 shadow-lg"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500/60 rounded-full animate-pulse delay-1000 backdrop-blur-sm border border-purple-400/30 shadow-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-24 border-t border-white/20 relative z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              {t("features.title")}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                {t("features.titleHighlight")}
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              {t("features.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-6 h-6" />,
                title: t("features.aiPowered.title"),
                description: t("features.aiPowered.desc"),
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: t("features.recruiterOptimized.title"),
                description: t("features.recruiterOptimized.desc"),
              },
              {
                icon: <CheckCircle className="w-6 h-6" />,
                title: t("features.completeProfiles.title"),
                description: t("features.completeProfiles.desc"),
              },
              {
                icon: <Star className="w-6 h-6" />,
                title: t("features.premiumDesign.title"),
                description: t("features.premiumDesign.desc"),
              },
              {
                icon: <Sparkles className="w-6 h-6" />,
                title: t("features.instantExport.title"),
                description: t("features.instantExport.desc"),
              },
              {
                icon: <ArrowRight className="w-6 h-6" />,
                title: t("features.mobileResponsive.title"),
                description: t("features.mobileResponsive.desc"),
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-white/10 border border-white/20 backdrop-blur-xl hover:bg-white/15 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 text-blue-400 backdrop-blur-sm border border-blue-500/30 shadow-lg">
                    {feature.icon}
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Example Profiles Section */}
      <section
        id="examples"
        className="py-24 border-t border-white/20 relative z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              {t("examples.title")}
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              {t("examples.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Full Stack Developer",
                company: "Meta",
                skills: ["React", "Node.js", "Python"],
              },
              {
                name: "Marcus Johnson",
                role: "UX Designer",
                company: "Spotify",
                skills: ["Figma", "User Research", "Prototyping"],
              },
              {
                name: "Elena Vasquez",
                role: "Data Scientist",
                company: "Netflix",
                skills: ["Machine Learning", "Python", "SQL"],
              },
            ].map((profile, index) => (
              <Card
                key={index}
                className="bg-white/10 border border-white/20 backdrop-blur-xl hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl hover:bg-white/15"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full shadow-lg border border-white/20"></div>
                    <div>
                      <h3 className="text-white font-semibold">
                        {profile.name}
                      </h3>
                      <p className="text-blue-200 text-sm">{profile.role}</p>
                      <p className="text-slate-400 text-xs">
                        {profile.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {profile.skills.map((skill) => (
                      <Badge
                        key={skill}
                        className="bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs backdrop-blur-sm shadow-lg"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-white/20 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                {t("cta.title")}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}
                  {t("cta.titleHighlight")}
                </span>
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                {t("cta.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-lg px-8 backdrop-blur-sm border border-blue-500/30 shadow-xl"
                >
                  {t("cta.generateNow")}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border border-white/20 text-slate-300 hover:bg-white/10 bg-white/5 backdrop-blur-sm shadow-lg"
                >
                  {t("cta.viewPricing")}
                </Button>
              </div>
              <div className="flex items-center justify-center gap-4 pt-4 text-sm text-slate-400">
                <span className="flex items-center gap-1 bg-white/5 backdrop-blur-sm rounded-full px-3 py-1 border border-white/10">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  {t("cta.noCard")}
                </span>
                <span className="flex items-center gap-1 bg-white/5 backdrop-blur-sm rounded-full px-3 py-1 border border-white/10">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  {t("cta.generate60s")}
                </span>
                <span className="flex items-center gap-1 bg-white/5 backdrop-blur-sm rounded-full px-3 py-1 border border-white/10">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  {t("cta.exportAnywhere")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/20 py-12 relative z-10 bg-white/5 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                <div className="grid grid-cols-2 gap-0.5">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-sm"></div>
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-sm"></div>
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-sm"></div>
                  <div className="w-1.5 h-1.5 bg-red-400 rounded-sm"></div>
                </div>
              </div>
              <span className="text-white font-semibold">ProfileGen</span>
            </div>
            <div className="flex gap-6 text-slate-400">
              <Link to="#" className="hover:text-white transition-colors">
                {t("footer.privacy")}
              </Link>
              <Link to="#" className="hover:text-white transition-colors">
                {t("footer.terms")}
              </Link>
              <Link to="#" className="hover:text-white transition-colors">
                {t("footer.support")}
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-center text-slate-400">
            <p>{t("footer.copyright")}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
