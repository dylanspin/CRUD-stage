import React from 'react';
import Message from '../components/Message';

function RightSide()
{
    return (
        <div className="right">
            <div className="topHeader">
                <div className="versions">
                    <div className="leftHeader pt-1">
                        <h3 className="gray d-inline ml-3">@</h3> 
                        <h5 className="white d-inline ml-1 ">Dylan Spin</h5>
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
                <div className="versions">
                    
                </div>
            </div>
            <div className="messages">
                <div className="scroll">
                    <Message></Message>
                    <Message></Message>
                    <Message></Message>
                    <Message></Message>
                    <Message></Message>
                    <Message></Message>
                    <Message></Message>
                    <Message></Message>
                    <Message></Message>
                    <Message></Message>
                    <Message></Message>
                    <Message></Message>
                    <Message></Message>
                </div>
                <div className="writeBar">
                    <form className="bar">
                        <div className="row">
                            <div className="col col-11 mt-1 ml-2">
                                <i className="fa fa-plus-circle barIcon m-1 mr-2 gray" aria-hidden="true"></i>
                                <textarea className="barInput white" type="text" id="message" name="message" placeholder="Bericht versturen" rows="1"/>
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
}

export default RightSide;