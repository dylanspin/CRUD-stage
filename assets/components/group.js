import React, { Component } from 'react';

class Person extends React.Component 
{
    name = "";
    image = "";

    render()
    {
        return (
            <div className="group m-3">
                <div className="circle"></div>
                <img className="groupImage" src="/Images/Profile/pf1.png" alt="Logo Main"/>
            </div>
        );
    }
}

export default Person;