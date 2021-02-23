import React, { Component } from 'react';

class Group extends React.Component 
{
    preset = "/Images/group/";

    render()
    {
        if(this.props.image)
        {
            return (
                <div className="group m-3">
                    <div className="circle"></div>
                    <img className="groupImage" src={this.preset + this.props.image} alt="Logo Main"/>
                </div>
            );
        }else{
            return (
                <div className="group m-3 blue">
                    <div className="circle"></div>
                    <h2 className="white pt-2">{this.props.name[0][0]}</h2>
                </div>
            );
        }
    }
}

export default Group;