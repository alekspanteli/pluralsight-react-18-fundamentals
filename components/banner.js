import Image from "next/image";
import GlobalLogo from "../public/GloboLogo.png";

const Banner = () => (
  <header>
    <div className="grid grid-cols-[auto_1fr] items-center mb-4 pt-4">
      <Image
        src={GlobalLogo}
        alt="Global Logo"
        className="cursor-pointer"
        width={150}
      />
      <h1 className="text-center">Some text goes here</h1>
    </div>
  </header>
);

export default Banner;
