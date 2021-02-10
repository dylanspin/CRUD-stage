import React from 'react';

function Contacts()
{
    return (
        <div className="middle">
            <form className="topSearch">
                <input type="text" id="search" className="search" placeholder="Zoek" required/>
            </form>

            <hr class="contactLine"/>
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
                    </div>
                    <div className="col">
                        <p className="name">Agenda</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;