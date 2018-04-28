import React from 'react'
import './eight.css'

let tab1=["8-1.jpg","8-2.jpg","8-3.jpg","8-4.jpg"]
let tab2=["8-5.jpg","8-6.jpg","8-7.jpg","8-8.jpg"]

export default class Eight extends React.Component{
    render(){
        return <div className="eight-container">
            <div className="eight-section">
                {tab1.map((el,i) => <div className='content-wrapper'>
                    <div className="eight-section-part" style={{backgroundImage:`url(/${el})`}}/> 
                    </div>)}
            </div>
            
            <div className="eight-section">
                {tab2.map((el,i) =><div className='content-wrapper'>
                     <div className="eight-section-part" style={{backgroundImage:`url(/${el})`}}/> 
                     </div>)}
            </div>

        </div>
    }
}