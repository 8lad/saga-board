interface SingleButtonProps {
  onButtonClick: () => void;
  buttonText: string;
}

export const SingleButton: React.FC<SingleButtonProps> = ({
  onButtonClick,
  buttonText,
}) => (
  <div className="w-full  mt-20 mx-auto text-center">
    <button
      type="button"
      onClick={onButtonClick}
      className="bg-cyan-500 hover:bg-cyan-600 rounded-lg px-5 py-3 border-solid border-2 border-sky-500 font-semibold text-xl"
    >
      {buttonText}
    </button>
  </div>
);
