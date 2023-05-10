import React from 'react'

export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode === "dark" ? "dark" : "light"} bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Textutils</a>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">


                        <div className="d-flex form-check form-switch mx-2">
                            <input className="form-check-input" onClick={props.modes} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className={`form-check-label mx-1 text-${props.mode === "dark" ? "light" : "dark"}`} htmlFor="flexSwitchCheckDefault">Enable modes</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
