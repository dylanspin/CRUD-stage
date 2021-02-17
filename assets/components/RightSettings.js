import React from 'react';


class RightSettings extends React.Component 
{

    typePage = 0;   

    constructor(props) 
    {
        super(props);
        this.state = {
            overlayActive: 10,
        }
    } 

    render()
    {
        switch(this.props.typePage) { //////kan waarschijnlijk korter nog later na kijken 
            case '0':
                if(this.state.overlayActive != 10)
                {
                    return(
                        <div>
                            {this.overlay()}
                            {this.mijnAccount()}
                        </div>
                    );
                }else{
                    return(
                        this.mijnAccount()
                    );
                }
            break;
            case '1':
                return(
                    this.meldingen()
                );
            break;
            case '2':
                return(
                    this.appIntellingen()
                );
            break;
            default:
                if(this.state.overlayActive != 10)
                {
                    return(
                        <div>
                            {this.overlay()}
                            {this.mijnAccount()}
                        </div>
                    );
                }else{
                    return(
                        this.mijnAccount()
                    );
                }
        }
    }

    activateOverlay(overlayType)
    {
        this.setState({
            overlayActive: overlayType,
        });
    }

    stopOverlay() //moet nog worden gezet bij de exit button
    {
        this.setState({
            overlayActive: 10,
        });
    }

    overlay()
    {
        return(
            console.log("test2"),
            <div className="inputOverlay">
                <form className="" method="post" action="settings/changeName">
                    
                </form>
            </div>
        );
    }

    mijnAccount()
    {
        return (
            <div className="rightSettings">
                <div className="scroller">
                    <h3 className="white m-5">Mijn account</h3>
                    <div className="profileVak">
                        <div className="row">
                            <div className="col col-2">
                                <div className="optionImage m-3 scaleHover">
                                    <img className="InnerImage" src="/Images/Profile/pf1.png" alt="Logo Main"/>
                                </div>
                            </div>
                            <div className="col col-6">
                                <h4 className="white mt-4">Dylan Spin</h4><p className="smallT gray">#474637</p>
                            </div>
                        </div>
                        <div className="innerOptions">
                            <div className="row p-2 pt-3">
                                <div className="col col-8">
                                    <h5 className="white d-inline">{this.props.name}</h5>
                                    <p className="lGray d-inline ml-2">#{this.props.hCode}</p>
                                </div>
                                <div className="col col-4">
                                    <div className="bewerken scaleHover" onClick={this.activateOverlay.bind(this)}>Bewerken</div>
                                </div>
                            </div>
                            <div className="row p-2 pt-3">
                                <div className="col col-8">
                                    <h5 className="white d-inline">{this.props.mail}</h5>
                                </div>
                                <div className="col col-4">
                                    <div className="bewerken scaleHover" onClick={this.activateOverlay.bind(this)}>Bewerken</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <hr/>      
                    <div className="m-5">
                        <h4 className="white">Verwijder je account :</h4>
                        <p className="smallT gray"> als je account wilt verwijderen : </p>     
                    </div>        
                    <div className="verwijder ml-5 scaleHover">Verwijder Account</div>
                </div>
            </div>
        );
    }

    meldingen()
    {
        return (
            <div className="rightSettings">
                <div className="scroller">
                    <h3 className="white m-5">meldingen</h3>
                </div>
            </div>
        );
    }

    appIntellingen()
    {
        return (
            <div className="rightSettings">
                <div className="scroller">
                    <h3 className="white m-5"> app instellingen</h3>
                </div>
            </div>
        );
    }

}

export default RightSettings;