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
    <>
      <Card sx={{ minWidth: "calc(100vh - 70px)", minHeight: 600, maxWidth: '50%', overflow: 'scroll', maxHeight: 'calc(100vh - 70px)' }}>
        <div style={{ margin: 40 }}>
          <Typography variant="h4" gutterBottom>
            Type of contract
          </Typography>
          <Typography variant="body1" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </Typography>
          <Divider />
          <Typography variant="h4" gutterBottom>
            Contract Summary
          </Typography>
          <Typography variant="body1" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod
          </Typography>
          <div style={{ margin: 20 }}>
            <Divider />
          </div>
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
          <Typography variant="h4" gutterBottom>
            This is our advice for you
          </Typography>
          <Typography variant="body1" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod
          </Typography>
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
      {/* <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item >
          <div style={{ backgroundColor: '#f5f5f5', height: 600, width:400, margin:20 }}>Summary</div>
        </Grid>
        <Grid item >
          <div style={{ backgroundColor: 'red', height: 50, width:400, margin:20 }}>Red</div>
        </Grid>
        <Grid item >
          <div style={{ backgroundColor: 'yellow', height: 50, width:400, margin:20 }}>Yello</div>
        </Grid>
        <Grid item >
          <div style={{ backgroundColor: 'green', height: 50, width:400, margin:20 }} >Green</div>
        </Grid>
      </Grid> */}
    </>
  );
};

const RightSideView = () => {
  return (
    <div className="column">
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
