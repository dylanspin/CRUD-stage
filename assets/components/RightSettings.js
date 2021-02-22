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

    stopOverlay()
    {
        this.setState({
            overlayActive: 10,
        });
    }

    triggerInput()
    {
        console.log("trigger");
        document.getElementById("newImage").click();
    }

    submitForm()
    {
        console.log(document.getElementById("newImage").value);
        // document.getElementById("imageForm").submit();
    }

    overlay()///moet die outer er om heen zien te krijgen waar door dit korter word.
    {
        if(this.state.overlayActive == 0)
        {
            return(
                <div className="inputOverlay">
                    <div className="overlayVak vak3">
                        <div className="row">
                            <div className="col col-10">
                                <h5 className="white">Je Gebruikersnaam Veranderen</h5>
                            </div>
                            <div className="col col-2">
                                <h4 className="white scaleHover mr-3" onClick={this.stopOverlay.bind(this)}>
                                    <i className="fa fa-times" aria-hidden="true"></i>
                                </h4>
                            </div>
                        </div>
                        <div className="row">
                            <h6 className="gray ml-5">Voer je nieuwe Gebruikersnaam in</h6>
                        </div>
                        <form method="POST" action="/settings/newUsername" name="form" className="mt-4 mr-5">
                            <p className="gray ml-4 text-left">Nieuwe GebruikersNaam</p>
                            <input type="text" id="Username" name="Username" className="mb-2 loginInput" placeholder="GebruikersNaam" defaultValue={this.props.name} required=""/>
                            <div className="bottomVak">
                                <button className="submitVak white p-2 pl-5 pr-5" type="submit">
                                    klaar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            );
        }else if(this.state.overlayActive == 1)
        {
            return(
                <div className="inputOverlay">
                    <div className="overlayVak vak3">
                        <div className="row">
                            <div className="col col-10">
                                <h5 className="white text-left ml-4">Je Email Veranderen</h5>
                            </div>
                            <div className="col col-2">
                                <h4 className="white scaleHover mr-3" onClick={this.stopOverlay.bind(this)}>
                                    <i className="fa fa-times" aria-hidden="true"></i>
                                </h4>
                            </div>
                        </div>
                        <div className="row">
                            <h6 className="gray ml-5">Voer je nieuwe Email in</h6>
                        </div>
                        <form method="POST" action="/settings/newEmail" name="form" className="mt-4 mr-5">
                            <p className="gray ml-4 text-left">Nieuwe Email</p>
                            <input type="email" id="email" name="email" className="mb-2 loginInput" placeholder="Email" defaultValue={this.props.mail} required=""/>
                            <div className="bottomVak">
                                <button className="submitVak white p-2 pl-5 pr-5" type="submit">
                                    klaar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            );
        }else if(this.state.overlayActive == 2)
        {
            return(
                <div className="inputOverlay">
                    <div className="overlayVak vak4">
                        <div className="row">
                            <div className="col col-10">
                                <h5 className="white text-left ml-4">Je Wachtwoord Veranderen</h5>
                            </div>
                            <div className="col col-2">
                                <h4 className="white scaleHover mr-3" onClick={this.stopOverlay.bind(this)}>
                                    <i className="fa fa-times" aria-hidden="true"></i>
                                </h4>
                            </div>
                        </div>
                        <div className="row">
                            <h6 className="gray ml-5">Voer je nieuwe Wachtwoord in</h6>
                        </div>
                        <form method="POST" action="/settings/newPassword" name="form" className="mt-4 mr-5">
                            <p className="gray ml-4 text-left">Oude Wachtwoord</p>
                            <input type="password" id="oldPassword" name="oldPassword" className="mb-2 loginInput" placeholder="Wachtwoord" required=""/>
                            <p className="gray ml-4 text-left">Nieuwe Wachtwoord</p>
                            <input type="password" id="password1" name="password1" className="mb-2 loginInput" placeholder="Wachtwoord" required=""/>
                            <p className="gray ml-4 text-left">Herhaal Wachtwoord</p>
                            <input type="password" id="password2" name="password2" className="mb-2 loginInput" placeholder="Wachtwoord" required=""/>
                            <div className="bottomVak">
                                <button className="submitVak white p-2 pl-5 pr-5" type="submit">
                                    klaar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            );
        }else{
            return(
                <div className="inputOverlay">
                    <div className="overlayVak">
                        <form className="" method="POST" action="/settings/delete">
                            <button className="verwijder scaleHover mt-4 mr-2 fullB" type="submit">Delete</button>
                            <div className="verwijder scaleHover text-center" onClick={this.stopOverlay.bind(this)}>Cancel</div>
                        </form>
                    </div>
                </div>
            );
        }
    }

    mijnAccount()
    {
        return (
            <div className="rightSettings">
                <div className="scroller maxScroll">
                    <h3 className="white m-5">Mijn account</h3>
                    <div className="profileVak">
                        <div className="row">
                            <div className="col col-2">
                                <form className="optionImage m-3 scaleHover" action="/settings/changePf" id="imageForm" method="POST">
                                    <input type="file" accept="image/*" id="newImage" name="newImage" className="hiddenFile" onChange={this.submitForm.bind(this)}/>
                                    <i className="fa fa-pencil hiddenText white" aria-hidden="true"></i>
                                    <img className="InnerImage" src="/Images/Profile/pf1.png" alt="Logo Main" onClick={this.triggerInput.bind(this)}/>
                                </form>
                            </div>
                            <div className="col col-6">
                                <h4 className="white mt-4">{this.props.name}</h4><p className="smallT gray">#{this.props.hCode}</p>
                            </div>
                        </div>
                        <div className="innerOptions">
                            <div className="row p-2 pt-3">
                                <div className="col col-8">
                                    <h5 className="white d-inline">{this.props.name}</h5>
                                    <p className="lGray d-inline ml-2">#{this.props.hCode}</p>
                                </div>
                                <div className="col col-4">
                                    <div className="bewerken scaleHover" onClick={this.activateOverlay.bind(this,0)}>Bewerken</div>
                                </div>
                            </div>
                            <div className="row p-2 pt-3">
                                <div className="col col-8">
                                    <h5 className="white d-inline">{this.props.mail}</h5>
                                </div>
                                <div className="col col-4">
                                    <div className="bewerken scaleHover" onClick={this.activateOverlay.bind(this,1)}>Bewerken</div>
                                </div>
                            </div>
                            <div className="row p-2 pt-3">
                                <div className="col col-8">
                                    <h5 className="white d-inline">************</h5>
                                </div>
                                <div className="col col-4">
                                    <div className="bewerken scaleHover" onClick={this.activateOverlay.bind(this,2)}>Bewerken</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <hr/>      
                    <div className="m-5">
                        <h4 className="white">Verwijder je account :</h4>
                        <p className="smallT gray"> als je account wilt verwijderen : </p>     
                    </div>        
                    <div className="verwijder ml-5 scaleHover" onClick={this.activateOverlay.bind(this,3)}>Verwijder Account</div>
                </div>
            </div>
        );
    }

    meldingen()
    {
        return (
            <div className="rightSettings">
                <div className="scroller maxScroll">
                    <h3 className="white m-5">meldingen</h3>
                </div>
            </div>
        );
    }

    appIntellingen()
    {
        return (
            <div className="rightSettings">
                <div className="scroller maxScroll">
                    <h3 className="white m-5"> app instellingen</h3>
                </div>
            </div>
        );
    }

}

export default RightSettings;