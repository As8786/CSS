import React from 'react'
import "./first.css"

export default class First extends React.Component{
    render(){
        return <div className="first-conatiner" >
               <div className="gradient"/>
               <div className="first-content" >
               <h4> WELCOME TO HAZEL </h4> 
                <div className="input-div" >
                    <input type="button" value="ABOUT US" />
                    <input type="button" value="CONTACT" />
                </div>
                </div>
                
        </div>
    }
}