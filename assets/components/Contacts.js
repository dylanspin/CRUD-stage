import React, { Component } from 'react';
import Person from './Person';
import RightSide from './RightSide';

class Contacts extends React.Component 
{

    constructor(props) 
    {
        super(props);
        this.state = {
            typePage: this.props[0].contactPage,
        }
    }   

    friends()
    {
        if(this.state.typePage == '0')
        {
            this.setState({
                typePage: '1',
            });
        }else{
            this.setState({
                typePage: '0',
            });
        }
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
                                <img className="profileImage" src="/Images/Profile/pf1.png" alt="Logo Main"/>
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
                                        <p className="smallT gray">#{this.props[0].id}</p>
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
                        {/* dit moet nog gehaalt worden uit de vrienden lijst */}
                        <Person name="Dylan"></Person>
                        <Person name="Levi"></Person>
                        <Person name="JJ"></Person>
                        <Person name="Kevin"></Person>
                        <Person name="Luna"></Person>
                        <Person name="Dylan"></Person>
                        <Person name="Levi"></Person>
                        <Person name="JJ"></Person>
                        <Person name="Kevin"></Person>
                        <Person name="Luna"></Person>
                        <Person name="Dylan"></Person>
                        <Person name="Levi"></Person>
                        <Person name="JJ"></Person>
                        <Person name="Kevin"></Person>
                        <Person name="Luna"></Person>
                        <Person name="Dylan"></Person>
                        <Person name="Levi"></Person>
                        <Person name="JJ"></Person>
                        <Person name="Kevin"></Person>
                        <Person name="Luna"></Person>
                    </div>
                </div>
                <RightSide typePage={this.state.typePage}></RightSide>
            </div>
        );
    }
}

export default Contacts;