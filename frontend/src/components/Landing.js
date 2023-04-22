import { useContext } from "react";
import "./Landing.css";
import { AppContext } from "../state/AppContext";
import logo from "../landing_page.PNG";
import DropzoneComponent from './DropzoneComponent.js';

const LeftSideView = () => {
  return <div className="landing-page-column">
    <div className="dark-background">
      <img className="hero-image" src={logo} />
    </div>
  </div>;
};

const RightSideView = () => {
  const { setActivePage } = useContext(AppContext);

  return <div className="landing-page-column">
    <div className="upload-contract-form">
      <div>
        <h4>Add contract’s link</h4>
        <input className="contract-url-input" onChange={(e) => {setActivePage('application')}}/>
      </div>
      <div>
        <DropzoneComponent />
      </div>
      <div className="qr-code-section">
        <h4>Add contract’s link</h4>
      </div>
      <div className="qr-code-section">
      <img src='./qr.png' alt="this is car image" />
      </div>
    </div>
  </div>
};

export const Landing = (props) => {
  return <div className='container'>
      <LeftSideView />
      <RightSideView />
  </div>
};
