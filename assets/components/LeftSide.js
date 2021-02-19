import React from 'react';
import Group from './Group';

class LeftSide extends React.Component 
{   
    constructor(props) 
    {
        super(props);
        this.state = {
            overlay: 10,
            groupsArray: [],
        }
    }   

    create()
    {
        this.setState({
            overlay: 1,
        });
    }

    search()
    {
        this.setState({
            overlay: 2,
        });
    }

    render()
    {
        return (
            <div>
                <div className="left">
                    <div className="group m-3 first">
                        <div className="circle"></div>
                        <img className="mainImage" src="/Images/logo.png" alt="Logo Main"/>
                    </div>
                    <hr className="leftLine"/>
                    <div className="scroller">
                        <div className="group m-3 blue">
                            <div className="circle"></div>
                        </div>
                        <Group></Group>
                        <Group></Group>
                        <Group></Group>
                        <Group></Group>
                        <Group></Group>
                        <Group></Group>
                        <div className="group m-3 add" onClick={this.create.bind(this)}>
                            <div className="circle"></div>
                            <i className="fa fa-plus groupIcon" aria-hidden="true"></i>
                        </div>
                        <div className="group m-3 add" onClick={this.search.bind(this)}>
                            <div className="circle"></div>
                            <i className="fa fa-compass groupIcon" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
        );   
    }
}

export default LeftSide;