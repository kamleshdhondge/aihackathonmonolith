import { useContext } from "react";
import "./Landing.css";
import { AppContext } from "../state/AppContext";
import FileDrag from "./FileDrag.js";
import {
  Grid,
  FormControl,
  InputLabel,
  Input,
  Typography,
  TextField,
} from "@mui/material";
import logo from "../landing_page.PNG";
import qrCode from "../qr_code.PNG";
import { auto } from "@popperjs/core";
import { withStyles } from "@mui/material/styles";
import { fontSize, fontStyle, fontWeight, lineHeight } from "@mui/system";
import Dropzone from "react-dropzone";

const LeftSideView = () => {
  return <div className="column">Some bla bla content</div>;
};

const RightSideView = () => {
  const { setActivePage } = useContext(AppContext);

  return (
    <div>
      <div style={{ background: "white", height: "100vh" }}>
        <div style={{ marginTop: 70 }}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item style={{ width: "60%" }}>
              {/* <FormControl variant="standard">
                <InputLabel htmlFor="component-simple">
                  Add contract’s link
                </InputLabel>
                <Input id="component-simple" defaultValue="" />
              </FormControl> */}
              <Typography variant="h6" gutterBottom>
                Add contract’s link
              </Typography>
              <TextField
                id="filled-basic"
                label=""
                variant="filled"
                fullWidth={true}
              />
            </Grid>
            <Grid item>
              {/* <FileDrag /> */}
              <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
                {({ getRootProps, getInputProps }) => (
                  <section>
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      <p>
                        Drag 'n' drop some files here, or click to select files
                      </p>
                    </div>
                  </section>
                )}
              </Dropzone>   
            </Grid>

            <Grid item>
              <img src={qrCode} alt="this is car image" />
            </Grid>
          </Grid>
        </div>
      </div>
      <div>
        <button
          onClick={(e) => {
            setActivePage("application");
          }}
        >
          Go to the second page
        </button>
      </div>
    </div>
  );
};

export const Landing = (props) => {
  // return <div className='container'>
  //     <LeftSideView />
  //     <RightSideView />
  // </div>

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item style={{ width: "48%" }}>
        <div style={{ background: "#1A374D", height: "100vh" }}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <img src={logo} alt="this is car image" />
            </Grid>
          </Grid>
        </div>
      </Grid>
      <Grid item style={{ width: "50%", height: "100vh" }}>
        <RightSideView />
      </Grid>
    </Grid>
  );
};
