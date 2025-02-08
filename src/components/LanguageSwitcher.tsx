import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import "../i18n";
import { ChevronDown } from "lucide-react";

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="px-3 py-0 border-none rounded-lg bg-[#104A52] text-white hover:bg-[#104A52] hover:text-[#faaf18] transition-colors"
        >
          {t("en_am")}{" "}
          <span>
            <ChevronDown />
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="">
        <DropdownMenuLabel>{t("choose_language")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <button onClick={() => i18n.changeLanguage("en")}>English</button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <button onClick={() => i18n.changeLanguage("es")}>አማርኛ</button>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
