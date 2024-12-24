import { useNavigate } from "react-router-dom";
import "./index.css";

const NotFound = () => {
  const navigate = useNavigate();

  function goHome() {
    // navigate("/");
    navigate(-1);
  }
  return (
    <>
      <div className="moon" />
      <div className="moon__crater moon__crater1" />
      <div className="moon__crater moon__crater2" />
      <div className="moon__crater moon__crater3" />
      <div className="star star1" />
      <div className="star star2" />
      <div className="star star3" />
      <div className="star star4" />
      <div className="star star5" />
      <div className="error">
        <div className="error__title">404</div>
        <div className="error__subtitle">Hmmm...</div>
        <div className="error__description">
          It looks like one of the developers fell asleep
        </div>
        <button
          className="error__button error__button--active"
          onClick={goHome}
        >
          Go Home
        </button>
      </div>
      <div className="astronaut">
        <div className="astronaut__backpack" />
        <div className="astronaut__body" />
        <div className="astronaut__body__chest" />
        <div className="astronaut__arm-left1" />
        <div className="astronaut__arm-left2" />
        <div className="astronaut__arm-right1" />
        <div className="astronaut__arm-right2" />
        <div className="astronaut__arm-thumb-left" />
        <div className="astronaut__arm-thumb-right" />
        <div className="astronaut__leg-left" />
        <div className="astronaut__leg-right" />
        <div className="astronaut__foot-left" />
        <div className="astronaut__foot-right" />
        <div className="astronaut__wrist-left" />
        <div className="astronaut__wrist-right" />
        <div className="astronaut__cord">
          <canvas id="cord" height="500px" width="500px" />
        </div>
        <div className="astronaut__head">
          <canvas id="visor" width="60px" height="60px" />
          <div className="astronaut__head-visor-flare1" />
          <div className="astronaut__head-visor-flare2" />
        </div>
      </div>
    </>
  );
};

export default NotFound;
