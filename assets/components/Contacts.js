import React from 'react';

function Contacts()
{
    return (
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
                                <p className="MeName">Dylan Spin</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-12">
                                <p className="smallT gray">#474637</p>
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
                        <i className="fa fa-cog MeIcon gray" aria-hidden="true">
                            <div className="info heebo topInfo">Settings</div>
                        </i>
                    </div>
                </div>
            </div>

            <hr className="contactLine"/>

            <div className="contactRow">
                <div className="row pt-2">
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

            <h6 className="BerichText mt-4 mb-2 ml-4">Berichten :</h6>

            <div className="contactRow">
                <div className="row pt-1">
                    <div className="col col-1 ml-3 mr-1">
                        <img className="profileImage" src="/Images/Profile/pf1.png" alt="Logo Main"/>
                        <div className="status"></div>
                    </div>
                    <div className="col">
                        <p className="name pt-03">Dylan Spin</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;