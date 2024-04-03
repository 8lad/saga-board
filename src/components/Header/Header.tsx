import { useTranslation } from "react-i18next";

export function Header() {
  const { t } = useTranslation();
  return (
    <header>
      <h1 className="text-center py-6 text-3xl border-b-2 hover">
        {t("title.header")}
      </h1>
    </header>
  );
}
