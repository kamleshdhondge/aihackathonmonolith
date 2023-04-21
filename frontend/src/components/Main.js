import './Main.css'
import {Chat} from './Chat';

const LeftSideView = () => {
    return <div className='column'>Here is your report mate</div>
}

const RightSideView = () => {
   return <div className='column'>
       <Chat />
   </div>
}

export const Main = (props) => {
    return <div className='container'>
        <LeftSideView />
        <RightSideView />
    </div>
}