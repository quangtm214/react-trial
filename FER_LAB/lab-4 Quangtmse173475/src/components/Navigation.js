import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import { Button, Icon, Navbar } from 'react-materialize'
import { Link } from 'react-router-dom'
export default function Navigation() {
    const { dark, theme, toggle } = useContext(ThemeContext)
    return (
        <div>
            <Navbar alignLinks='right'
                brand={<span style={{ color: theme.color }}>FILM LIST</span>}
                menuIcon={<Icon>Menu</Icon>}
                style={{ backgroundColor: theme.backgroundcolor, color: theme.color }}>
                <ul className="navbar-nav">

                    <li  > <Link to='/' style={{ color: theme.color }}><Icon left >home</Icon>Home</Link>

                    </li>
                    <li to="/about"> <Link to='/about'
                        style={{ color: theme.color }}><Icon left >info_outline</Icon>About</Link>

                    </li>
                    <li to="/news"> <Link to='/news'
                        style={{ color: theme.color }}><Icon left>dvr</Icon>News</Link>

                    </li>
                    <li to="/contact">
                        <Link to="/contact" style={{ color: theme.color }}>
                            <Icon left>contacts</Icon>
                            Contact
                        </Link>
                    </li>
                </ul>
                <div>
                    <Button onClick={toggle}>
                        switch to {dark ? 'light' : 'dark'} mode
                    </Button>
                </div>

            </Navbar>
        </div>

    )

}
