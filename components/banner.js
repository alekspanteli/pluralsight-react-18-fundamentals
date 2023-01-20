import Image from "next/image";
import GlobalLogo from "../public/GloboLogo.png";
import styles from "./banner.module.css"

const subtitleStyle = {
  fontStyle: "italic",
  color: "black"
}

const Banner = () => (
  <header>
    <div className="grid sm:grid-cols-[auto_1fr] items-center mb-4 pt-4">
      <Image
        src={GlobalLogo}
        alt="Global Logo"
        className={styles.logo}
      />
      <h1 className="sm:text-center" style={subtitleStyle}>Some text goes here</h1>
    </div>
  </header>
);

export default Banner;
