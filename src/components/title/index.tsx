import logo from "../../assets/logo.png";
import infoLogo from "../../assets/infoLogo.svg";
import "./style.css";
import {
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

export const BackgroundAnimated = () => {
  return (
    <div className="container demo">
      <div className="content">
        <div id="large-header" className="large-header">
          <div className="main-header">
            <img
              className="logo animate__animated animate__bounceInLeft animate__delay-1s"
              src={logo}
              alt="Pedro Castro"
            />
            <p className="main-title animate__animated animate__bounceInLeft animate__delay-1s">
              Pedro <span>Castro</span>
            </p>
            <img
              className="info-logo animate__animated animate__bounceInRight animate__delay-1s"
              src={infoLogo}
              alt="Desenvolvedor Front-End"
            />
            <p className="info-title animate__animated animate__bounceInRight animate__delay-1s">
              Desenvolvedor Full-Stack
            </p>
          </div>
          <div className="main-icons animate__animated animate__flipInX">
            <a href="https://github.com/pedrocastro210" target={"_blank"}>
              <GithubOutlined />
            </a>
            <a
              href="https://www.linkedin.com/in/pedrocastro210/"
              target={"_blank"}
            >
              <LinkedinOutlined />
            </a>
            <a
              href="https://www.instagram.com/pedro_castro210"
              target={"_blank"}
            >
              <InstagramOutlined />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
