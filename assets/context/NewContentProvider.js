import React, { createContext } from 'react';

export const NewContent = createContext(); 

class NewContentProvider extends React.Component 
{
    constructor(props) 
    {
        super(props);
        this.state = {
            FirstName: "Dylan",
            LastName: "Spin",
            Age: "18",
            email: "dylanspin100@hotmail.com",
        };
    }
    
    createList()
    {

    }

    showList()
    {

    }

    updateList()
    {

    }

    deleteList()
    {

    }

    render()
    {
        return (
            <NewContent.Provider value = {{
                ...this.state,
                createList: this.createList.bind(this),
                updateList: this.updateList.bind(this),
                deleteList: this.deleteList.bind(this),
            }}>
                {this.props.children}
            </NewContent.Provider>
        )
    }
}

export default NewContentProvider;