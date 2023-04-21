import './Main.css'

const LeftSideView = () => {
    return <div className='column'>Here is your report mate</div>
}

const RightSideView = () => {
   return <div className='column'>
       <div className='column'>Chat with me man !!!</div>
   </div>
}

export const Main = (props) => {
    return <div className='container'>
        <LeftSideView />
        <RightSideView />
    </div>
}