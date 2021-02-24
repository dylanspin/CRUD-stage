import React, { useContext } from 'react';

class Message extends React.Component 
{
    constructor(props) 
    {
		super(props);
	}

    render()
    {
        return (
            <div>
                <div className="message white heebo">
                    <img className="messageImage" src={"/Images/Profile/"+this.props.sender[1]} alt="Logo Main"/>
                    <div className="messageIfo">
                        <h5 className="d-inline">{this.props.sender[0]}</h5>
                        <p className="smallT d-inline ml-3 gray">{this.props.date}</p>
                    </div>
                    <div className=" messageText dWhite">
                        {this.props.text}
                    </div>
                </div>
            </div>
        );
    }
}

export default Message;