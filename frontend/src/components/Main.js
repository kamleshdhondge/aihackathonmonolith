import "./Main.css";
import { Chat } from "./Chat";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { FiberManualRecord } from '@mui/icons-material';

const RedFlags = () => {
  return(<List>
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
  </List>)
}
const LeftSideView = () => {
  return (
    <>
      <Card sx={{ minWidth: "100vh", minHeight: 600 }}>
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
          <Divider />
          <Card variant="outlined" style={{ borderColor:"red" }}>
            <Typography variant="h4" gutterBottom>
              Red Flags
            </Typography>
            <div style={{ margin:20 }}>
             <RedFlags />
            </div>
          </Card>
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
    <div className="container">
      <LeftSideView />
      <RightSideView />
    </div>
  );
};
