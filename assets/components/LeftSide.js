import React from 'react';
import Group from './group';

class LeftSide extends React.Component 
{   
    constructor(props) 
    {
        super(props);
        this.state = {
            overlay: 10,
            groups: this.props[0].groups,
        }
    }   


    activateOverlay(overlayType)
    {
        this.setState({
            overlayActive: overlayType,
        });
    }

    stopOverlay()
    {
        this.setState({
            overlayActive: 10,
        });
    }

    render()
    {
        return (
            <div>
                {this.overlay()}
                {this.main()}
            </div>    
        );   
    }

    overlay()
    {
        if(this.state.overlayActive == 0)
        {
            return(
                <div className="inputOverlay">
                    <div className="overlayVak vak3">
                        <div className="row">
                            <div className="col col-10">
                                <h5 className="white text-left ml-4">Een nieuwe group maken</h5>
                            </div>
                            <div className="col col-2">
                                <h4 className="white scaleHover mr-3" onClick={this.stopOverlay.bind(this)}>
                                    <i className="fa fa-times" aria-hidden="true"></i>
                                </h4>
                            </div>
                        </div>
                        <div className="row">
                            <h6 className="gray ml-5">Voer de naam van je group in</h6>
                        </div>
                        <form method="POST" action="/settings/creatGroup" name="form" className="mt-4 mr-5">
                            <p className="gray ml-4 text-left">Nieuwe Group</p>
                            <input type="text" id="Group" name="Group" className="mb-2 loginInput" placeholder="Group Name" required=""/>
                            <div className="bottomVak">
                                <button className="submitVak white p-2 pl-5 pr-5" type="submit">
                                    Maak
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            );
        }else if(this.state.overlayActive == 1){
            return(
                <div className="inputOverlay">
                    <div className="overlayVak vak3">
                        <div className="row">
                            <div className="col col-10">
                                <h5 className="white text-left ml-4">Deelnemen aan een group</h5>
                            </div>
                            <div className="col col-2">
                                <h4 className="white scaleHover mr-3" onClick={this.stopOverlay.bind(this)}>
                                    <i className="fa fa-times" aria-hidden="true"></i>
                                </h4>
                            </div>
                        </div>
                        <div className="row">
                            <h6 className="gray ml-5">Zoek een group</h6>
                        </div>
                        <form method="POST" action="/settings/searchGroup" name="form" className="mt-4 mr-5">
                            <p className="gray ml-4 text-left">Group</p>
                            <input type="text" id="SearchGroup" name="SearchGroup" className="mb-2 loginInput" placeholder="Group Name" required=""/>
                            <div className="bottomVak">
                                <button className="submitVak white p-2 pl-5 pr-5" type="submit">
                                    Deelnemen
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            );
        }else{
            return null;
        }
    }

    main()
    {
        return(
            <div>
                <div className="left">
                    <div className="group m-3 first">
                        <div className="circle"></div>
                        <img className="mainImage" src="/Images/logo.png" alt="Logo Main"/>
                    </div>
                    <hr className="leftLine"/>
                    <div className="scroller">
                        {this.state.groups[0]?.map(function(slot, index){ /////////[0] iss BELANGRIJK
                            if(slot[0].length > 0)
                            return (
                                <div key={index}>
                                    <Group name={slot[0]} image={slot[1]}/> 
                                </div>
                            )
                        })}
                        <div className="group m-3 add" onClick={this.activateOverlay.bind(this,0)}>
                            <div className="circle"></div>
                            <i className="fa fa-plus groupIcon" aria-hidden="true"></i>
                        </div>
                        <div className="group m-3 add" onClick={this.activateOverlay.bind(this,1)}>
                            <div className="circle"></div>
                            <i className="fa fa-compass groupIcon" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LeftSide;