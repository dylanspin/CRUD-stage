import React from 'react';

function LeftSide()
{
    return (
        <div className="left">
            <div className="group m-3 first">
                <div className="circle"></div>
                <img className="mainImage" src="/Images/logo.png" alt="Logo Main"/>
            </div>
            <hr className="leftLine"/>
            
            <div className="group m-3">
                <div className="circle"></div>
            </div>
            <div className="group m-3">
                <div className="circle"></div>
                <img className="groupImage" src="/Images/Profile/pf1.png" alt="Logo Main"/>
            </div>

            <div className="group m-3 add">
                <div className="circle"></div>
                <i className="fa fa-plus groupIcon" aria-hidden="true"></i>
            </div>
            <div className="group m-3 add">
                <div className="circle"></div>
                <i className="fa fa-compass groupIcon" aria-hidden="true"></i>
            </div>
        </div>
    );
}

export default LeftSide;