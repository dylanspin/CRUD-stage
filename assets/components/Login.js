import React from 'react';

function Login()
{
    return (
        <div>
            <div className="vak">
                <div className="row p-2 ml-2">
                    <div className="col col-6 mt-3">
                        <div className="row row-3 text-center white mb-4 ml-3 mt-3">
                            <h3>welkom Bij Crud Discord</h3>
                            <h6 className="d-inline ml-3 gray">Welkom Terug</h6>
                        </div>
                        <div className="row row-9 ml-3">
                            <form>
                                <p className="gray">Username</p>
                                <input type="text" id="Username" name="Username" className="mb-2 loginInput" placeholder="Username"  required/><br/>

                                <p className="gray">Password</p>
                                <input type="password" id="Password" name="Password" className="loginInput" placeholder="Password" required/>
                                <a href="#" className="forgot">Wachtwoord Vergeten</a>
                                <input type="submit" id="Login" name="Login" className="mb-2 mt-4 loginInput blue white p-1" value="Login" required/>
                            </form>
                        </div>
                    </div>
                    <div className="col col-6">
                    {/* qrCode */}
                        <img className="qrCode" src="/Images/QR.png" alt="Logo Main"/>
                    </div>
                </div>
            </div>
            <div class="ocean">
                <div class="wave"></div>
                <div class="wave"></div>
            </div>
        </div>
    );
}

export default Login;