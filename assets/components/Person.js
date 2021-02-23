import React, { Component } from 'react';

class Person extends React.Component 
{
    preset = "/Images/Profile/";

    render()
    {
        return (
            <div className="contactRow mb-2" onClick={() => this.props.setMessages(this.props.num)}>
                <div className="row pt-1">
                    <div className="col col-1 ml-3 mr-1">
                        <img className="profileImage" src={this.preset + this.props.image} alt="Logo Main"/>
                        <div className="status"></div>
                    </div>
                    <div className="col">
                        <p className="name pt-03">{this.props.name}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Person;