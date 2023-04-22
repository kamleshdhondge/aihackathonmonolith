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

function ExpandableText({ text }) {
  const [expanded, setExpanded] = useState(false);
  const MAX_LENGTH = 255;

  if (text.length <= MAX_LENGTH) {
    return <div>{text}</div>;
  }

  const truncatedText = text.slice(0, MAX_LENGTH);
  const remainingText = text.slice(MAX_LENGTH);

  const handleExpandClick = () => {
    setExpanded(true);
  };

  return (
    <div>
      {truncatedText} {' '}
      {!expanded && (
        <a href="#" onClick={handleExpandClick}>
         See more
        </a>
      )}
      {expanded && remainingText}
    </div>
  );
}

const LeftSideView = () => {
  const [summary, setSummary] =  useState(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedconsectetur adipiscing elit, sed do eiusmod");
  const [flags, setFlags] =  useState({data:{
    "Green flags":[1],
    "Orange flags" : [1],
    "Red flags":[1]

  }});

  const [open, setOpen] = useState(true);
  useEffect( () => {
  let data =  axios('http://localhost:3003/document/doc1/summary').then(async(data)=>{
    console.log(data.data.summary);
    setSummary(data.data.summary);
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
      <div className="download-report-container">
        <div className="relative-parent">
          <a className="download-link" href="#" onClick={() => {
              const printContents = document.getElementById("printable-report").innerHTML;
              const originalContents = document.body.innerHTML;
              document.body.innerHTML = printContents;
              window.print();
              document.body.innerHTML = originalContents;
          }}>Download a PDF file </a>
        </div>
      </div>
      <Card>
        <div id='printable-report' className="report-content">
          <div className="margin-bottom-15" />

          <h3 className="margin-top-15">
            Contract Summary
          </h3>
          <div className="margin-bottom-15" >
            <ExpandableText text={summary} />
          </div>
          <div className="margin-bottom-15" />
          <FlagSection items={flags.data["Red flags"].map(data =>data.flag)} borderColor='#FF5A79' header='Red Flags' icon='red-flag.png' />
          <div className="margin-bottom-15" />
          <FlagSection items={flags.data["Orange flags"].map(data =>data.flag)} borderColor='#FFBD5A' header='Yellow Flags' icon='yellow-flag.png' />
          <div className="margin-bottom-15" />
          <FlagSection items={flags.data["Green flags"].map(data =>data.flag)} borderColor='#70D77A' header='Green Flags' icon='green-flag.png' />
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
