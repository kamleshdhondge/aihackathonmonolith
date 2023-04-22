import { useContext } from 'react'
import './Landing.css'
import { AppContext } from '../state/AppContext'

const LeftSideView = () => {
    return <div className='column'>Some bla bla content</div>
}

const RightSideView = () => {
    const {setActivePage} = useContext(AppContext);

   return <div className='column'>
        <div>Upload it buddy</div>
        <div>
            <button onClick={(e) => {
                setActivePage('application')
            }}>Go to the second page</button>
        </div>
   </div>
}

export const Landing = (props) => {
    // return <div className='container'>
    //     <LeftSideView />
    //     <RightSideView />
    // </div>

    return(
        <Grid
  container
  direction="row"
  justifyContent="space-between"
  alignItems="center"
>
    <Grid item style={{width: "inherit"}}>
            <div style={{background: "#1A374D"}>

            </div>
    </Grid>
    <Grid item style={{width: "inherit"}}>

    </Grid>
    
</Grid>
    )
}