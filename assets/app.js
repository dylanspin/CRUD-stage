import React from 'react';
import ReactDOM from 'react-dom';
import NewContentProvider from './context/NewContentProvider';
import LeftSide from './components/LeftSide';
import Contacts from './components/Contacts';
import LeftSettings from './components/LeftSettings';
import Login from './components/Login';
import Register from './components/Register';
import './styles/app.css';
import './bootstrap';


class App extends React.Component 
{
    render() 
    {
        return (
            <NewContentProvider>
                <PersonForm></PersonForm>
                <ContentTable></ContentTable>
            </NewContentProvider>
        )
    }
}


//main
if (document.getElementById('left')) 
{
    ReactDOM.render(<LeftSide  {...window.REP_LOG_APP_PROPS.leftSide}/>, document.getElementById('left'));
}
if (document.getElementById('contacts')) 
{
    ReactDOM.render(<Contacts {...window.REP_LOG_APP_PROPS.contact}/>, document.getElementById('contacts'));
}

//auth
if (document.getElementById('Login')) 
{
    ReactDOM.render(<Login/>, document.getElementById('Login'));
}
if (document.getElementById('Register')) 
{ 
    ReactDOM.render(<Register/>, document.getElementById('Register'));
}

if (document.getElementById('leftSetting')) 
{ 
    ReactDOM.render(<LeftSettings {...window.REP_LOG_APP_PROPS.settings}/>, document.getElementById('leftSetting'));
}


ReactDOM.render(<App/>, document.getElementById('root'));
