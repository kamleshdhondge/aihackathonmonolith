import "./Main.css";
import Grid from "@mui/material/Grid";



const LeftSideView = () => {
  return (
    <>
      <Grid
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
      </Grid>
    </>
  );
};

const RightSideView = () => {
  return (
    <div className="column">
      <div className="column">Chat with me man !!!</div>
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
