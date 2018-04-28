import React from 'react'
import './ten.css'


export default class Ten extends React.Component{
    render(){
        return(
            <div className="ten-conatiner" >
                <h2> HAZEL  </h2>
                <div className="icon-container">
                    <a href="#"> <i class="fab fa-facebook-f"></i> </a>
                    <a href="#"> <i class="fab fa-twitter"></i> </a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    <a href="#"><i class="fab fa-google-plus-g"></i></a>
                    <a href="#"><i class="fab fa-vimeo-v"></i></a>
                    <a href="#"><i class="fab fa-dribbble"></i></a>
                </div>
            </div>
        )
    }
}