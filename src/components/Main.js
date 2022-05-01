import React from "react"
import About from "./About" 
import Interest from "./Interest"

export default function Main() {
    return (
        <div className="main">
            <div className="main--introduction">
                <h1>Benjoe Carandang</h1>
                <h3>Fullstack Developer</h3>
                <p>benjoe.carandang@gmail.com</p>

                <div className="main--button-container">
                    <div className="col-6">
                        <button className="first-button">Email</button>
                    </div>
                    <div className="col-6">
                        <button className="bg-green second-button">LinkedIn</button>
                    </div>
                </div>
            </div>

            <About />
            <Interest />
        </div>
    )
}