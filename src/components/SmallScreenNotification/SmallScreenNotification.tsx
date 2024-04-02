import React from "react";
import { MIN_SCREEN_SIZE } from "../../utils/constants";

export const SmallScreenNotification: React.FC = () => {
  return (
    <div className="w-full mt-20 text-center text-3xl">
      <h1 className="text-white w-3/4 mr-auto ml-auto leading-loose">
        If you want to play this game, please use a screen with a size larger
        than {MIN_SCREEN_SIZE} pixels
      </h1>
      <span className="text-5xl">😉</span>
    </div>
  );
};
