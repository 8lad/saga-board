import { Dna } from "react-loader-spinner";

export default function Preloader() {
  return (
    <div className="absolute w-full h-full z-50 flex items-center justify-center bg-main-bg">
      <Dna
        visible
        height="200"
        width="200"
        ariaLabel="dna-loading"
        wrapperClass="dna-wrapper"
      />
    </div>
  );
}
