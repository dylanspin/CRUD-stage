import React, { Component } from 'react';
import RightSettings from './RightSettings';

class LeftSettings extends React.Component 
{

    constructor(props) 
    {
        super(props);
        this.state = {
            typePage: this.props[0].settings,
        }
    } 

    goToPage(pageNum)
    {
        this.setState({
            typePage: pageNum,
        });
    }

    render()
    {
        return (
            <div>
                <a href="/main" className="back">
                    <i className="fa fa-times-circle-o" aria-hidden="true"></i>
                </a>
                <div className="leftSettings">
                    <div className="stickRight">
                        <div className="scroller">

                            <div className="mt-5 mb-1 ml-4 optionTitle">
                                Gebruikers Instellingen
                            </div>
                            <div className="option optionNormal mt-1" onClick={this.goToPage.bind(this,'0')}>
                                <p className="pt-1 pl-2">Mijn Account</p>
                            </div>
                            <div className="option optionNormal mt-1" onClick={this.goToPage.bind(this,'1')}>
                                <p className="pt-1 pl-2">Meldingen</p>
                            </div>
                            
                            <div className="optionLine mt-3"></div>
                            <div className="mt-2 mb-1 ml-4 optionTitle">
                                App Instellingen
                            </div>
                            <div className="option optionNormal mt-1" onClick={this.goToPage.bind(this,'2')}>
                                <p className="pt-1 pl-2">Meldingen</p>
                            </div>
                            <div className="optionLine mt-1"></div>
                            <form method="POST" action="/settings/logout" name="logoutForm">
                                <button type="submit" className="option optionLogout mt-2 mb-2">
                                    <h4 className="pl-2">Logout</h4>
                                </button>
                            </form>
                            <div className="optionLine mt-1"></div>
                        </div>
                    </div>
                </div>
                <RightSettings 
                    typePage={this.state.typePage} 
                    name={this.props[0].name}
                    hCode={this.props[0].hCode} 
                    mail={this.props[0].mail}
                >
                </RightSettings>
            </div>
        );
    }
}

export default LeftSettings;