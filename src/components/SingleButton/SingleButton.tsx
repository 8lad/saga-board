import { clsx } from "clsx";

interface SingleButtonProps {
  onButtonClick: () => void;
  buttonText: string;
  extraClasses: string;
}

export const SingleButton: React.FC<SingleButtonProps> = ({
  onButtonClick,
  buttonText,
  extraClasses = "",
}) => (
  <div className={clsx(extraClasses)}>
    <button
      type="button"
      onClick={onButtonClick}
      className=" rounded-lg px-5 py-3 border-solid border-2 border-sky-500 font-semibold text-xl bg-cyan-500 hover:bg-cyan-600"
    >
      {buttonText}
    </button>
  </div>
);
