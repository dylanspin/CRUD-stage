import React, { useContext } from 'react';
import { NewContent } from '../context/NewContentProvider';

function ContentTable()
{
    const context = useContext(NewContent);
    return (
        <div>
            Table komt hier 
            { context.FirstName }
        </div>
    );
}

export default ContentTable;