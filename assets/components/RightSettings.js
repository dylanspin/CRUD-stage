import React from 'react';


class RightSettings extends React.Component 
{
    typePage = 0;

    render()
    {
        return(
            this.mijnAccount()
        );
        // switch(this.props.typePage) {
        //     case '0':
        //         return(
        //             this.mijnAccount()
        //         );
        //       break;
        //     case '1':
        //         return(
        //             this.friendList()	
        //         );
        //       break;
        //     default:
        //         return(
        //             this. messages()
        //         );
        // }
    }

    mijnAccount()
    {
        return (
            <div className="rightSettings">
                <div className="scroller">
                  
                </div>
            </div>
        );
    }

}

export default RightSettings;