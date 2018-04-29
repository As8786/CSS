import React from 'react'
import './nine.css'
import Tab from './data'

let imgTab = ["9-1.jpg","9-2.jpg","9-3.jpg","9-4.jpg","9-5.jpg","9-6.jpg"]

export default class Nine extends React.Component{
    constructor(props){
        super(props)
        this.state={
            currentInformation : Tab[0]
        }
    }
    
    setCurrentInformationValue = (value) => {
        this.setState({
            currentInformation : value
        })
    }


    render(){
        return (
            <div className="nine-container">
                <h2> OUR CLIENTS LOVE US  </h2>

                <div className="img-container" >
                    {imgTab.map((el, i)=> <div className ="img-display"
                    style={{backgroundImage:`url(/hazel/${el})`}}
                    onMouseOver={()=>this.setCurrentInformationValue(Tab[i])}
                    
                    />
                    )}
                </div>

                <div className="infor-conatiner">
                    <div className="inform-parag" >
                        {this.state.currentInformation.parag}
                    </div>
                    <div className="inform-name" >
                        {this.state.currentInformation.name}
                    </div>
                </div>    
            </div>
        )
    }
}