import React from 'react'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-connectdevelop"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Internet of Blockchains</h1>
                <p>
                    A vision of interconnected blockchains and
                    <a href="https://rigoblock.com" target="_blank"> open transfer of value</a>.
                </p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Vision</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>History</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>Latency</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Social</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: React.PropTypes.func,
    timeout: React.PropTypes.bool
}

export default Header
