import "./Main.css";
import { Chat } from "./Chat";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Link,
} from "@mui/material";
import { FiberManualRecord } from "@mui/icons-material";
import { Header } from "./Header";

const RedFlags = () => {
  return (
    <List>
      <ListItem>
        <ListItemIcon>
          <FiberManualRecord />
        </ListItemIcon>
        <ListItemText primary="List item 1" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <FiberManualRecord />
        </ListItemIcon>
        <ListItemText primary="List item 2" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <FiberManualRecord />
        </ListItemIcon>
        <ListItemText primary="List item 3" />
      </ListItem>
    </List>
  );
};

const YellowFlag = () => {
  return (
    <List>
      <ListItem>
        <ListItemIcon>
          <FiberManualRecord />
        </ListItemIcon>
        <ListItemText primary="List item 1" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <FiberManualRecord />
        </ListItemIcon>
        <ListItemText primary="List item 2" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <FiberManualRecord />
        </ListItemIcon>
        <ListItemText primary="List item 3" />
      </ListItem>
    </List>
  );
};

const GreenFlag = () => {
  return (
    <List>
      <ListItem>
        <ListItemIcon>
          <FiberManualRecord />
        </ListItemIcon>
        <ListItemText primary="List item 1" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <FiberManualRecord />
        </ListItemIcon>
        <ListItemText primary="List item 2" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <FiberManualRecord />
        </ListItemIcon>
        <ListItemText primary="List item 3" />
      </ListItem>
    </List>
  );
};
const LeftSideView = () => {
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
          <Divider />
          <h3 className="margin-top-15">
            Contract Summary
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
          <Divider />
          <Card variant="outlined" style={{ borderColor: "red",marginTop: 20,padding: 20  }}>
            <Typography variant="h4" gutterBottom>
              Red Flags
            </Typography>
            <div style={{ margin: 20 }}>
              <RedFlags />
            </div>
          </Card>
          <Card variant="outlined" style={{ borderColor: "yellow",marginTop: 20,padding: 20  }}>
            <Typography variant="h4" gutterBottom>
              Yellow Flags
            </Typography>
            <div style={{ margin: 20 }}>
              <YellowFlag />
            </div>
          </Card>
          <Card variant="outlined" style={{ borderColor: "green", marginTop: 20, padding: 20  }}>
            <Typography variant="h4" gutterBottom>
              Green Flags
            </Typography>
            <div style={{ margin: 20 }}>
              <GreenFlag />
            </div>
          </Card>
          <div style={{ margin: 20 }}>
            <Divider />
          </div>
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
          <div style={{margin:20}} />
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={4}
          >
            <Grid item>
              <Button variant="contained">Get a verified Review</Button>
            </Grid>
            <Grid item>
              <Link href="#" underline="none">
                {"Make a negotiation offer for me"}
              </Link>
            </Grid>
          </Grid>
        </div>
      </Card>
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
