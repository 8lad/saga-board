import React from "react";
import { useTranslation } from "react-i18next";
import { MIN_SCREEN_SIZE } from "../../utils/constants";

export const SmallScreenNotification: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full mt-20 text-center text-3xl">
      <h1 className="text-white w-3/4 mr-auto ml-auto leading-loose">
        {t("title.small-screen")} {MIN_SCREEN_SIZE} {t("measure.pixels")}
      </h1>
      <span className="text-5xl">😉</span>
    </div>
  );
};
