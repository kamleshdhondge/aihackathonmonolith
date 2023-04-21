import './Landing.css'

const LeftSideView = () => {
    return <div className='column'>Some bla bla content</div>
}

const RightSideView = () => {
   return <div className='column'>Upload it buddy</div>
}

export const Landing = (props) => {
    return <div className='container'>
        <LeftSideView />
        <RightSideView />
    </div>
}