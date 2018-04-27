import React from 'react'

import Second from './SecondComp/Second'
import Third from './ThirdComp/ThirdComp'
import Four from './FourComp/FourComp'

class Main extends React.Component{
    render(){
        return (
            <div >
                <Second />
                <Third />
                <Four />
             </div>   
        )
    }
}

export default Main