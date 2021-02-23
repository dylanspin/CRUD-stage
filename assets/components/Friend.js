import React, { useContext } from 'react';

class Friend extends React.Component 
{
    preset = "/Images/Profile/";

    constructor(props) 
    {
		super(props);
		this.state = {
			name : this.props.name,
			status : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed lectus eu justo malesuada congue. Proin blandit, erat ac tempor semper",
            Hcode: "11-2-2021 14:40",
            image: this.props.image,
            friendId: '0',
        }
	}

    render()
    {
        return (
            <div>
                <div className="friend white heebo">
                    <img className="messageImage" src={this.preset + this.state.image} alt="Logo Main"/>
                    <div className="messageIfo">
                        <h5 className="d-inline">{this.state.name}</h5>
                        <p className="smallT d-inline ml-3 gray">#77647</p>
                    </div>
                    <div className=" messageText dWhite">
                        Een random status
                    </div>
                    <div className="rightFriend">
                        <div className="friendCircle">
                            <i className="fa fa-comment" aria-hidden="true"></i>
                        </div>
                        <div className="friendCircle">
                            <i className="fa fa-ellipsis-v pt-2" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Friend;