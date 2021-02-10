import React from 'react';

function PersonForm()
{
    return (
        <div>
            <div className="container">
                <form className="registerForm m-3">
                    <label htmlFor="FirstName" className="sr-only">FirstName</label>
                    <input type="text" id="FirstName" className="form-control" placeholder="FirstName" required/>

                    <label htmlFor="LastName" className="sr-only">LastName</label>
                    <input type="text" id="LastName" className="form-control" placeholder="LastName" required/>

                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required/>

                    <label htmlFor="Password" className="sr-only">Password</label>
                    <input type="password" id="Password" className="form-control" placeholder="Password" required/>

                    <label htmlFor="RepeatPassword" className="sr-only">Repeat Password</label>
                    <input type="password" id="RepeatPassword" className="form-control" placeholder="Password" required/>
                </form>
            </div>
        </div>
    );
}

export default PersonForm;