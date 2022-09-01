import React from "react";
import { parseTime } from "../../utils/helpers";

interface TimerViewProps {
  counter: number;
}

export const TimerView: React.FC<TimerViewProps> = ({ counter }) => {
  return (
    <div className="text-3xl mx-auto text-center">
      <span>{parseTime(counter, "minutes")} : </span>
      <span>{parseTime(counter, "seconds")} : </span>
      <span> {parseTime(counter)} </span>
    </div>
  );
};
