import React from 'react'
import './six.css'

class Six extends React.Component{
    render(){
        return <div className="six-container" >
            <h1> OUR SERVICES </h1>
            <div className ="six-first-section">
                <div className="six-part">
                     <i class="fas fa-paint-brush"></i>
                    <h5> UNIQUE DESIGN </h5>
                    <p>Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit amet consect.</p>
                </div>

                <div className="six-part">
                    <i class="fab fa-grav"></i>
                    <h5> EASY TO WORK </h5>
                    <p>Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit amet consect.</p>
                </div>

                <div className="six-part">
                    <i class="fas fa-video"></i>
                    <h5> UNLIMITED PORTFOLIOS </h5>
                    <p>Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit amet consect.</p>
                </div>

            </div>

            <div className ="six-first-section">
                <div className="six-part">
                <i class="fas fa-bicycle"></i>
                    <h5> UNIQUE DESIGN </h5>
                    <p>Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit amet consect.</p>
                </div>

                <div className="six-part">
                    <i class="fas fa-bus"></i>
                    <h5> EASY TO WORK </h5>
                    <p>Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit amet consect.</p>
                </div>

                <div className="six-part">
                <i class="fas fa-space-shuttle"></i>
                    <h5> UNLIMITED PORTFOLIOS </h5>
                    <p>Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit amet consect.</p>
                </div>

            </div>

        </div>
    }
}

export default Six