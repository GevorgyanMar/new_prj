import React from "react";
import Header from '../Header/Header'
const MainComponent = ({ children }) => {
    console.log(children)
    return (
        <div>
            <Header />
            {children}

        </div>
    )
}

export default MainComponent;