import React from 'react';
import Message from './Message';
import Friend from './Friend';


class RightSide extends React.Component 
{
    typePage = 0;

    constructor(props) 
    {
        super(props);
        this.state = {
            friendsarray: this.props.friendsarray,
            me: this.props.me,
            selected: this.props.friend,
            messages: this.props.messages[0],
        }
    }

    render()
    {
        switch(this.props.typePage) {
            case '0':
                return(
                    this.messages()
                );
              break;
            case '1':
                return(
                    this.friendList()	
                );
              break;
            default:
                return(
                    this. messages()
                );
        }
    }

    setFriend()
    {
        if(this.state.selected != this.props.friend)
        {
            this.setState({
                selected: this.props.friend,
                messages: this.props.messages[0],
            });
        }
    }

    messages()
    {
        if(this.state.friendsarray.length)
        {
            this.setFriend()//set state
            return (
                <div className="right">
                    <div className="topHeader">
                        <div className="versions">
                            <div className="leftHeader pt-1">
                                <h3 className="gray d-inline ml-3">@</h3> 
                                <h5 className="white d-inline ml-1 ">{this.state.friendsarray[0][this.state.selected][0]}</h5>
                            </div>
                            <div className="RightHeader">
                                <i className="fa fa-phone MeIcon gray ml-3" aria-hidden="true">
                                    <div className="info heebo bottomInfo">Start Spraakoproep</div>
                                </i>
                                <i className="fa fa-video-camera MeIcon gray ml-4" aria-hidden="true">
                                    <div className="info heebo bottomInfo">Start Videogesprek</div>
                                </i>
                                <i className="fa fa-thumb-tack MeIcon gray ml-4" aria-hidden="true">
                                    <div className="info heebo bottomInfo">Vast gemaakte berichten</div>
                                </i>
                                <i className="fa fa-user MeIcon gray ml-4" aria-hidden="true">
                                    <div className="info heebo bottomInfo">Nodig vrienden uit</div>
                                </i>
                                <i className="fa fa-question-circle MeIcon gray ml-4" aria-hidden="true">
                                    <div className="info heebo bottomInfo">Hulp</div>
                                </i>
                            </div>
                        </div>
                    </div>
                    <div className="messages">
                        <div className="scroll">
                            {this.state.messages[this.state.selected]?.map(function(slot, index ){
                                if(slot.length > 0)
                                if(slot[0] == this.state.me[2])
                                {
                                    return (
                                        <div key={index}>
                                            <Message text={slot[1]} date={slot[2]} sender={this.state.me}></Message>
                                        </div>
                                    )
                                }else{
                                    return (
                                        <div key={index}>
                                            <Message text={slot[1]} date={slot[2]} sender={this.state.friendsarray[0][this.state.selected]}></Message>
                                        </div>
                                    )
                                }
                            }.bind(this))}
                        </div>
                        <div className="writeBar">
                            <form className="bar" action="/message/Send" method="POST">
                                <div className="row">
                                    <div className="col col-11 mt-1 ml-2">
                                        <i className="fa fa-plus-circle barIcon m-1 mr-2 gray" aria-hidden="true"></i>
                                        <input type="hidden" id="Current" name="Current" defaultValue={this.state.selected}/>
                                        <input type="hidden" id="chatId" name="chatId" defaultValue={this.state.friendsarray[0][this.state.selected][2]}/>
                                        <input type="text" id="message" name="message" placeholder="Bericht versturen" className="barInput white" autoComplete="off" required/>
                                    </div>
                                    <div className="col mt-1">
                                        <i className="fa fa-file-video-o barIcon m-1 mr-3 gray" aria-hidden="true"></i>
                                        <i className="fa fa-smile-o barIcon m-1 mr-2 gray" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            );   
        }else{
            return(
                this.friendList
            )
        }
    }


    friendList()
    {
        return(
            <div className="right">
                <div className="topHeader">
                    <div className="versions">
                    <div className="leftHeader pt-1">
                            <h3 className="white d-inline ml-3">Vrienden</h3> 
                        </div>
                    </div>
                </div>
                <div className="messages">
                    <div className="scroll">
                        <h3 className="white ml-5 mt-2">Voeg vrienden toe</h3>
                        <form className="FriendBar mb-5" action="/main/add" method="POST" name="friendForm">
                            <div className="row">
                                <div className="col col-11 mt-1 ml-2">
                                    <input type="text" id="search" name="search" className="barInput white darkInput mt-1" placeholder="Voer #000000 in" required/>
                                </div>
                            </div>
                        </form>
                        {this.state.friendsarray[0]?.map(function(slot, index ){
                            if(slot.length > 0)
                            return (
                                <div>
                                    <Friend key={index} name={slot[0]} image={slot[1]}/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default RightSide;