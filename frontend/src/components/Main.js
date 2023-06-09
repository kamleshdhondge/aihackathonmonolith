import "./Main.css";
import { Chat } from "./Chat";
import Card from "@mui/material/Card";
import { Link } from "@mui/material";
import { Header } from "./Header";
import { useEffect, useState } from "react";
import axios from "axios";
import SimpleBackdrop from "./Spinner.js";
import ReportProblemSharpIcon from "@mui/icons-material/ReportProblemSharp";
import ManageSearchSharpIcon from "@mui/icons-material/ManageSearchSharp";
import CheckCircleSharpIcon from "@mui/icons-material/CheckCircleSharp";
import WarningAmberSharpIcon from "@mui/icons-material/WarningAmberSharp";

const VerifyButton = () => {
  return <button className="verify-button">Get a verified review</button>;
};

const FlagSection = (props) => {
  const { header, items, borderColor, icon, additionalText, iconRight } = props;

  return (
    <Card elevation={2} style={{ borderRadius: 8 }}>
      <div className="flag-section-container" style={{ padding: "20px" }}>
        <h3>{header}</h3>
        <br />
        <p>{additionalText}</p>
        <br />
        <ul className="flag-section-list">
          {items.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>

        {iconRight}
      </div>
    </Card>
  );
};

function ExpandableText({ text, summary, len }) {
  const [expanded, setExpanded] = useState(false);
  const MAX_LENGTH = len;

  if (text.length < MAX_LENGTH) {
    return <div>{text}</div>;
  }

  const truncatedText = text.slice(0, MAX_LENGTH);
  const remainingText = text.slice(MAX_LENGTH);

  const handleExpandClick = () => {
    setExpanded(true);
  };

  const handleShrinkClick = () => {
    setExpanded(false);
  };

  return (
    <div>
      {truncatedText}{" "}
      {!expanded && (
        <>
          <a href="#" onClick={handleExpandClick}>
            See more
          </a>
          <br />
        </>
      )}
      {expanded &&
        summary.map((item, index) => {
          if (index === 0) {
            return "";
          } else {
            return (
              <>
                <p>{item}</p>
                <br />
              </>
            );
          }
        })}
      {expanded && (
        <a href="#" onClick={handleShrinkClick}>
          {" "}
          See less
        </a>
      )}
    </div>
  );
}

const LeftSideView = ({ open, setOpen }) => {
  const [summary, setSummary] = useState(["2", "2"]);
  const [flags, setFlags] = useState({
    data: {
      red_flags: [1],
      orange_flags: [1],
      green_flags: [1],
    },
  });
  const [advice, setAdvice] = useState(["1", "2"]);

  useEffect(() => {
    let data = axios("http://localhost:3003/document/doc1/summary").then(
      async (data) => {
        console.log(data.data.summary);
        setSummary(data.data.summary);
        let flags = await axios("http://localhost:3003/document/doc1/flags");
        console.log(flags);
        setFlags(flags);
        let advice = await axios("http://localhost:3003/document/doc1/advice");
        console.log("advice: ", advice);
        setAdvice(advice.data);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setOpen(false);
      }
    );
  }, []);

  if (open) {
    return <SimpleBackdrop open={open} setOpen={setOpen} />;
  }
  return (
    <div className="report-container">
      <div className="download-report-container">
        <div className="relative-parent">
          <a
            className="download-link"
            href="#"
            onClick={() => {
              const printContents =
                document.getElementById("printable-report").innerHTML;
              const originalContents = document.body.innerHTML;
              document.body.innerHTML = printContents;
              window.print();
              document.body.innerHTML = originalContents;
            }}
          >
            Download a PDF file{" "}
            <img className="download-image" src="./download.png" />
          </a>
        </div>
      </div>
      <Card>
        <div id="printable-report" className="report-content">
          <div className="margin-bottom-15" />

          <h3 className="margin-top-15">Contract Summary</h3>
          <div className="margin-bottom-15">
            {/* {<p>{summary[0]}</p>} */}
            <br />
            <ExpandableText
              text={summary[0]}
              summary={summary}
              len={summary[0].length}
            />
          </div>
          <div className="margin-bottom-15" />
          <p></p>

          <FlagSection
            items={flags.data["red_flags"].map((data) => data)}
            iconRight={
              <WarningAmberSharpIcon
                fontSize="large"
                style={{
                  position: "absolute",
                  top: 15,
                  right: 15,
                  color: "#e63946",
                }}
              />
            }
            header="Red flags"
            additionalText="These terms are unfavourable to you or uncommon. You should be aware of them and should try to negotiate them if you can."
          />
          <div className="margin-bottom-15" />
          <FlagSection
            items={flags.data["orange_flags"].map((data) => data)}
            iconRight={
              <ManageSearchSharpIcon
                fontSize="large"
                style={{
                  position: "absolute",
                  top: 15,
                  right: 15,
                  color: "#ffb703",
                }}
              />
            }
            borderColor="#FFBD5A"
            header="Heads Up"
            additionalText="These are standard terms, but they create oblications you should be aware of."
          />
          <div className="margin-bottom-15" />
          <FlagSection
            items={flags.data["green_flags"].map((data) => data)}
            borderColor="#70D77A"
            iconRight={
              <CheckCircleSharpIcon
                style={{
                  position: "absolute",
                  top: 15,
                  right: 15,
                  color: "#0ead69",
                }}
              />
            }
            header="Great News"
            additionalText="The contract contains some terms that are favourable to you: "
          />
          <div className="margin-bottom-15" />
          <h3 className="margin-top-15">This is our advice for you</h3>
          <div className="margin-bottom-15">
            <ul className="margin-left-15">
              {advice.map((data) => {
                return (
                  <>
                    <li className="margin-bottom-15">{data}</li>
                  </>
                );
              })}
            </ul>
          </div>
          <div className="margin-top-15" />
        </div>
      </Card>
      <div className="button-parent">
        <Link className="negotiation-link" href="#" underline="none">
          Make a negotiation offer for me
        </Link>
      </div>
    </div>
  );
};

const RightSideView = ({ open, setOpen }) => {
  if (open) {
    return <SimpleBackdrop open={open} setOpen={setOpen} />;
  }
  return (
    <div className="thirty-percent-column">
      <Chat />
    </div>
  );
};

export const Main = (props) => {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="main-container">
        <LeftSideView open={open} setOpen={setOpen} />
        <RightSideView open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};
