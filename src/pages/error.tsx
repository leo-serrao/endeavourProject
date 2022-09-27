import EndeavourLogo from "../assets/logo-endeavour-white.svg";
import { ErrorBody } from "../styles/Error.styles";
import ErrorImg from "../assets/error.png";

export default function Error() {
  return (
    <ErrorBody>
      <div>
        <img src={ErrorImg.src} alt="" />
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <h1>Oops...</h1>
        <img src={EndeavourLogo.src} alt="" className="endeavourLogo" />
      </div>
    </ErrorBody>
  );
}
