import { useLanguage } from "@/context/i18n";
import { LanguageSwitcher } from "./language-switcher";
import { Button } from "./ui/button";

export default function Navbar() {
  const { t } = useLanguage();

  return (
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
            <span className="text-white font-semibold text-lg">ProfileGen</span>
          </div>
          <div className="flex items-center gap-6">
            <LanguageSwitcher />
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 backdrop-blur-sm border border-blue-500/30 shadow-lg">
              {t("nav.getStarted")}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
