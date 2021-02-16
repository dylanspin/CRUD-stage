import React, { Component } from 'react';
import RightSettings from './RightSettings';

class LeftSettings extends React.Component 
{

    // constructor(props) 
    // {
    //     super(props);
    //     this.state = {
    //         typePage: this.props[0].contactPage,
    //     }
    // }   


    render()
    {
        return (
            <div>
                <div className="leftSettings">
                    <div className="stickRight">
                        <div className="scroller">

                            <div className="mt-5 mb-1 ml-4 optionTitle">
                                Gebruikers Instellingen
                            </div>
                            <div className="option optionNormal mt-1">
                                <p className="pt-1 pl-2">Mijn Account</p>
                            </div>
                            <div className="option optionNormal mt-1">
                                <p className="pt-1 pl-2">Meldingen</p>
                            </div>
                            
                            <div className="optionLine mt-1"></div>
                            <div className="mt-2 mb-1 ml-4 optionTitle">
                                App Instellingen
                            </div>
                            <div className="option optionNormal mt-1">
                                <p className="pt-1 pl-2">Meldingen</p>
                            </div>
                            <div className="optionLine mt-1"></div>
                            <div className="option optionLogout mt-2 mb-2">
                                <h4 className="pl-2">Logout</h4>
                            </div>
                            <div className="optionLine mt-1"></div>
                        </div>
                    </div>
                </div>
                <RightSettings></RightSettings>
            </div>
        );
    }
}

export default LeftSettings;