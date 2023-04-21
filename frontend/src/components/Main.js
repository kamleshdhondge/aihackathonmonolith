import './Main.css'
import {Chat} from './Chat';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from '@mui/material/Typography';
const LeftSideView = () => {
  return (
    <>
      <Card sx={{ minWidth: '100vh', minHeight: 600 }}>
      <div style={{ margin:20 }}>
       <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Type of contract
        </Typography>
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
   return <div className='column'>
       <Chat />
   </div>
}

export const Main = (props) => {
  return (
    <div className="container">
      <LeftSideView />
      <RightSideView />
    </div>
  );
};
