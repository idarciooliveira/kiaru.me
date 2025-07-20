import { useLanguage } from "@/context/i18n";
import { Button } from "./ui/button";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <div className="flex bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 overflow-hidden">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setLanguage("en")}
          className={`px-3 py-1 text-xs font-medium transition-all ${
            language === "en"
              ? "bg-white/20 text-white shadow-sm"
              : "text-slate-300 hover:text-white hover:bg-white/10"
          }`}
        >
          EN
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setLanguage("pt")}
          className={`px-3 py-1 text-xs font-medium transition-all ${
            language === "pt"
              ? "bg-white/20 text-white shadow-sm"
              : "text-slate-300 hover:text-white hover:bg-white/10"
          }`}
        >
          PT
        </Button>
      </div>
    </div>
  );
}
