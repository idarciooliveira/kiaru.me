import { useLanguage } from "@/context/i18n";
import { Button } from "./ui/button";

import { ArrowRight, ExternalLink, Mail, Phone, Sparkles } from "lucide-react";
import { Badge } from "./ui/badge";

const productImages = [
  "/images/product01.jpg",
  "/images/product02.jpg",
  "/images/product03.jpg",
  "/images/product04.jpg",
  "/images/product06.jpg",
  "/images/product05.jpg",
];

export default function HeroSection() {
  const { t } = useLanguage();

  return (
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
                      src="/images/profile.jpg"
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
                    {
                      key: "preview.email",
                      label: t("preview.email"),
                      icon: <Mail className="w-5 h-5 text-white" />,
                    },
                    {
                      key: "preview.phone",
                      label: t("preview.phone"),
                      icon: <Phone className="w-5 h-5 text-white" />,
                    },
                    {
                      key: "preview.linkedin",
                      label: t("preview.linkedin"),
                      icon: <Mail className="w-5 h-5 text-white" />,
                    },
                    {
                      key: "preview.portfolio",
                      label: t("preview.portfolio"),
                      icon: <ExternalLink className="w-5 h-5 text-white" />,
                    },
                  ].map((contact) => (
                    <div
                      key={contact.key}
                      className="bg-white/10 backdrop-blur-sm rounded-lg p-2 text-center border border-white/20 hover:bg-white/20 transition-colors shadow-lg"
                    >
                      <div className="w-4 h-4 mx-auto mb-1 text-blue-200">
                        {contact.icon}
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
                    {productImages.map((data, i) => (
                      <img
                        key={i}
                        src={data}
                        className="aspect-square object-cover rounded-lg backdrop-blur-sm border shadow-lg hover:scale-105 transition-transform"
                      />
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
  );
}
