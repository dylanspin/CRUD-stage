import React from 'react';
import ReactDOM from 'react-dom';
import NewContentProvider from './context/NewContentProvider';
import ContentTable from './components/ContentTable';
import LeftSide from './components/LeftSide';
import Contacts from './components/Contacts';
import RightSide from './components/RightSide';
import PersonForm from './components/PersonForm';
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


if (document.getElementById('left')) 
{
    ReactDOM.render(<LeftSide/>, document.getElementById('left'));
}
if (document.getElementById('contacts')) 
{
    ReactDOM.render(<Contacts/>, document.getElementById('contacts'));
}
if (document.getElementById('right')) 
{
    ReactDOM.render(<RightSide/>, document.getElementById('right'));
}
ReactDOM.render(<App/>, document.getElementById('root'));