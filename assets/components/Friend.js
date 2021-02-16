import React, { useContext } from 'react';

class Friend extends React.Component 
{
    constructor(props) 
    {
		super(props);
		this.state = {
			name : "Dylan Spin",
			status : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed lectus eu justo malesuada congue. Proin blandit, erat ac tempor semper",
            Hcode: "11-2-2021 14:40",
            image: "",
            friendId: '0',
        }
	}

    render()
    {
        return (
            <div>
                <div className="friend white heebo">
                    <img className="messageImage" src="/Images/Profile/pf1.png" alt="Logo Main"/>
                    <div className="messageIfo">
                        <h5 className="d-inline">{this.state.name}</h5>
                        <p className="smallT d-inline ml-3 gray">#77647</p>
                    </div>
                    <div className=" messageText dWhite">
                        dsdsdad jifnu sbn fijbdsuif nuisfnbsd nfjksdnfd
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