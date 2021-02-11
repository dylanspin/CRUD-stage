import React, { useContext } from 'react';

class Message extends React.Component 
{
    constructor(props) 
    {
		super(props);
		this.state = {
			name : "Dylan Spin",
			message : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed lectus eu justo malesuada congue. Proin blandit, erat ac tempor semper",
            date: "11-2-2021 14:40",
            image: "",
		}
	}
    
    render()
    {
        return (
            <div>
                <div className="message white heebo">
                    <img className="messageImage" src="/Images/Profile/pf1.png" alt="Logo Main"/>
                    <div className="messageIfo"><h5 className="d-inline">{this.state.name}</h5><p className="smallT d-inline ml-3 gray">{this.state.date}</p></div>
                    <div className=" messageText dWhite">
                        {this.state.message}
                    </div>
                </div>
            </div>
        );
    }
}

export default Message;