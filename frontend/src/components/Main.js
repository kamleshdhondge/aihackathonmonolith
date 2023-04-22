import "./Main.css";
import { Chat } from "./Chat";
import Card from "@mui/material/Card";
import {
  Link,
} from "@mui/material";
import { Header } from "./Header";
import { useEffect, useState } from "react";
import axios from 'axios';
import SimpleBackdrop from './Spinner.js';
const VerifyButton = () => {
  return <button className="verify-button">Get a verified review</button>
}

const FlagSection = (props) => {
  const {header, items, borderColor, icon} = props;

  return <div className="flag-section-container" style={{padding: '20px', borderRadius: '4px', border: `1px solid ${borderColor}`}}>
    <h3>{header}</h3>
    <br />
    <ul className="flag-section-list">
      {
        items.map((item, index) => {
          return <li key={index}>{item}</li>
        })
      }
    </ul>
    <img className="flag-section-icon" src={`./${icon}`} />
  </div>;
}

const LeftSideView = () => {
  const [summary, setSummary] =  useState(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedconsectetur adipiscing elit, sed do eiusmod");
  const [flags, setFlags] =  useState({});

  const [open, setOpen] = useState(true);
  useEffect( () => {
  let data =  axios('http://localhost:3003/document/doc1/summary').then(async(data)=>{
    console.log(data.data.summarize);
    setSummary(data.data.summarize);
    let flags = await axios('http://localhost:3003/document/doc1/flags');
    console.log(flags);
    setFlags(flags);
    setOpen(false);
  });
 },[]);


 if (open){
  return < SimpleBackdrop open={open} setOpen={setOpen}/>
 }
  return (
   
    <div className="report-container">
      <Card>
        <div className="report-content">
          <h3>
            Type of contract
          </h3>
          <div className="margin-bottom-15">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </div>
          <div className="margin-bottom-15" />

          <h3 className="margin-top-15">
            Contract Summary
          </h3>
          <div className="margin-bottom-15">
          {summary}
          </div>
          <div className="margin-bottom-15" />
          <FlagSection items={['1', '2', '3']} borderColor='#FF5A79' header='Red Flags' icon='red-flag.png' />
          <div className="margin-bottom-15" />
          <FlagSection items={['1', '2', '3']} borderColor='#FFBD5A' header='Yellow Flags' icon='yellow-flag.png' />
          <div className="margin-bottom-15" />
          <FlagSection items={['1', '2', '3']} borderColor='#70D77A' header='Green Flags' icon='green-flag.png' />
          <div className="margin-bottom-15" />
          <h3 className="margin-top-15">
            This is our advice for you
          </h3>
          <div className="margin-bottom-15">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod
          </div>
          <div className="margin-top-15" />
        </div>
      </Card>
      <div className="button-parent">
        <Link className="negotiation-link" href="#" underline="none">Make a negotiation offer for me</Link>
      </div>
    </div>
  );
};

const RightSideView = () => {
  return (
    <div className="thirty-percent-column">
      <Chat />
    </div>
  );
};

export const Main = (props) => {
  return (
    <div>
      <div><Header /></div>
      <div className="main-container">
        <LeftSideView />
        <RightSideView />
        </div>
    </div>
  );
};
