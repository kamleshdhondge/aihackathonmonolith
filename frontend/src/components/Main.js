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
        <Grid item xs={6}>
          <div>1</div>
        </Grid>
        <Grid item xs={6}>
          <div>2</div>
        </Grid>
        <Grid item xs={6}>
          <div>3</div>
        </Grid>
        <Grid item xs={6}>
          <div>4</div>
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
