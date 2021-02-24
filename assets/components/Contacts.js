import React, { Component } from 'react';
import Person from './Person';
import RightSide from './RightSide';


class Contacts extends React.Component 
{
    preset = "/Images/Profile/";

    constructor(props) 
    {
        super(props);
        this.state = {
            typePage: this.props[0].contactPage,
            friendsarray: this.props[0].friendsarray,
            messages: this.props[0].messages,
            friendSelected: this.props[0].current,
            me: [this.props[0].username,this.props[0].profile,this.props[0].Hcode],
        }
    }   

    friends()
    {
        this.setState({
            typePage: '1',
        });
    }

    setMessages(frienNum)
    {
        this.setState({
            typePage: '0',
            friendSelected:frienNum,
        });
    }

    render()
    {
        return (
            <div>
                <div className="middle">
                    <form className="topSearch">
                        <input type="text" id="search" name="search" className="search white" placeholder="Zoek" required/>
                    </form>
        
                    <div className="me">
                        <div className="row pt-3">
                            <div className="col col-2 ml-3 mr-1">
                                <img className="profileImage" src={this.preset + this.props[0].profile} alt="Logo Main"/>
                                <div className="status"></div>
                            </div>
                            <div className="col col-3">
                                <div className="row">
                                    <div className="col col-12">
                                        <p className="MeName">{this.props[0].username}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col col-12">
                                        <p className="smallT gray">#{this.props[0].Hcode}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col"> 
                                <i className="fa fa-microphone MeIcon gray" aria-hidden="true">
                                    <div className="info heebo topInfo">Mute Mic</div>
                                </i>
                                <i className="fa fa-headphones MeIcon gray" aria-hidden="true">
                                    <div className="info heebo topInfo">Mute Sound</div>
                                </i>
                                <a href="/settings" className="fa fa-cog MeIcon gray none" aria-hidden="true">
                                    <div className="info heebo topInfo">Settings</div>
                                </a>
                            </div>
                        </div>
                    </div>
        
                    <hr className="contactLine"/>
        
                    <div className="contactRow">
                        <div className="row pt-2" onClick={this.friends.bind(this)}>
                            <div className="col col-1 ml-3 mr-1">
                                <i className="fa fa-user icon" aria-hidden="true"></i>
                            </div>
                            <div className="col">
                                <p className="name">Vrienden</p>
                            </div>
                        </div>
                    </div>
                    <div className="contactRow">
                        <div className="row pt-2">
                            <div className="col col-1 ml-3 mr-1">
                                <i className="fa fa-calendar-o" aria-hidden="true"></i>
                            </div>
                            <div className="col">
                                <p className="name">Agenda</p>
                            </div>
                        </div>
                    </div>
                    <h6 className="BerichText mt-4 mb-3 ml-4">Berichten :</h6>
                    <div className="scroller cScroll">
                        {this.state.friendsarray[0]?.map(function(slot, index){ 
                            if(slot.length > 0)
                            return (
                                <div key={index}>
                                    <Person num={index} name={slot[0]} image={slot[1]} setMessages={this.setMessages.bind(this)}/> 
                                </div>
                            )
                        }.bind(this))}
                        {/* bind(this) is belangrijkk*/}
                    </div>
                </div>
                <RightSide typePage={this.state.typePage} friendsarray={this.state.friendsarray} friend={this.state.friendSelected} messages={this.state.messages} me={this.state.me}></RightSide>
            </div>
        );
    }
}

export default Contacts;