import React from 'react'
export default function Navigation() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#news">News</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>

    )

}
