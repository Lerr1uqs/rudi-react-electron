import React from 'react'

type NavProps = {
    state?: number
    itemShown?: boolean
    menu?: () => void
    search?: () => void
    markAllRead?: () => void
    fetch?: () => void
    logs?: () => void
    views?: () => void
    settings?: () => void
}

type NavState = {
    maximized?: boolean
}

class Nav extends React.Component<NavProps, NavState>{

    useless = () => {let a = 0; const b = a + 1; a = b + 1;}

    render() {
        return (
            <nav className={"className"}>
                <div className="btn-group">
                    <a
                        className="btn hide-wide"
                        title={"nav.menu"}
                        onClick={this.useless}>
                        <i>&#x2764;</i>
                    </a>
                </div>
                <span className="title">{"this is a title"}</span>
                <div className="btn-group" style={{ float: "right" }}>
                    <a
                        className={"btn-fresh"}
                        onClick={this.useless}
                        title={"nav.refresh"}>
                        <i>&#x1F60A;</i>
                    </a>
                    <a
                        className="btn"
                        title={"nav.settings"}
                        onClick={this.useless}>
                        <i>&#9742;</i>
                    </a>
                    <span className="seperator"></span>

                    <a
                        className="btn system close"
                        title={"close"}
                        onClick={this.useless}>
                        <i>&#x1F44D;</i>
                    </a>
                </div>
            </nav>
        )
    }
}

export default Nav
