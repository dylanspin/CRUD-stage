import React from 'react';

function Register()
{
    return (
        <div>
            <div className="vak vak2">
                <div className="ml-5 pt-5">
                    <div className="row row-2 text-center">
                        <h3 className="white">Maak een Account</h3>
                    </div>
                    <div className="row row-10 mt-4">
                        <form method="POST" action="/registeren/submit" name="form">
                            <p className="gray">Email</p>
                            <input type="email" id="Email" name="Email" className="mb-2 loginInput" placeholder="Email"  required/><br/>

                            <p className="gray">Username</p>
                            <input type="text" id="Username" name="Username" className="mb-2 loginInput" placeholder="GebruikersNaam"  required/><br/>

                            <p className="gray">Password</p>
                            <input type="password" id="Password" name="Password" className="loginInput" placeholder="Wachtwoord" required/>

                            <p className="gray">GeboorteDatum</p>
                            <input type="date" data-date-format="DD MMMM YYYY" id="GeboorteDatum" name="GeboorteDatum" className="loginInput mb-4" placeholder="GeboorteDatum" required/>

                            <input type="submit" id="Login" name="Login" className=" mt-4 loginInput blue white p-1" value="Registreer" required/>
                            <br/>
                            <a className="smallT pb-3 forgot" href="/login">Heb je al een account ? </a>
                        </form>
                    </div>
                </div>
            </div>
            <div className="ocean">
                <div className="wave"></div>
                <div className="wave"></div>
            </div>
        </div>
    );
}

export default Register;