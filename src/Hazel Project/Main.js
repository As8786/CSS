import React from 'react'

import Second from './SecondComp/Second'
import Third from './ThirdComp/ThirdComp'
import Four from './FourComp/FourComp'
import Five from './FiveComp/FiveComp'
import Six from "./SixComp/SixComp"
import Eight from "./EightComp/EightComp"

class Main extends React.Component{
    render(){
        return (
            <div >
                <Second />
                <Third />
                <Four />
                <Five />
                <Six/>
                <Eight/>
             </div>   
        )
    }
}

export default Main