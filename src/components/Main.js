import React from 'react'
import Link from 'gatsby-link'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Vision</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>Imagine a world where you can seamlessly transfer anything of value from any device.
              The internet of blockchains will consist of interconnected systems transferring value instantly. It will provide the standard for an open society built on the principles of equality and fair access to financial services to the masses.
          </p>
          <p>
              Blockchains provide the perfect framework for exchanging value, yet they are not scalable today. Frameworks for blockchain intercommunication, scalability solutions like sharding and state channels, have the aim at connecting different technology stacks together, providing the perfect framework for lowering the costs of creating and managing everything digital.
          </p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">History</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>
              Bitcoin is the first application of blockchain, enabling trustless exchange of cryptocurrency. Ethereum provided a framework for creating decentralized applications, providing the perfect environment for creating the new backbone of financial systems. Today, corporates are creating their own private blockchains as a consequence of their current compliance requirements.
              All these different realities can cohexist in an interconnected world.
          </p>
          <p>
              If you think about the internet in the early days, many corporates were reluctant at the idea of developing on the open internet, because of security concerns and uncertainty.
              Today, we are testifying the same with blockchains. It is absolutely clear that the path going forward is towards interconnected public blockchains,
              where private blockchains execute some very specific tasks which are otherwise inefficient to execute on public blockchains.
              On top of this, public blockchains will scale themselves by design upgrades, and this will make them even more suitable for executing complex tasks.
          </p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Latency</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>
              One disadvantage of blockchains respect to centralized database is latency.
              By design, a blockchain is redundant. By contrast, a centralized database is optimized for performance.
              This is a reason high frequency transactions can find hurdles when executed on blockchains, be it public or private. While we cannot solve this issue, we can think of state channels as a way to associate a superfast centralized database for low-latency transactions execution and blockchains as a robust and secure way to settle transactions.
              By decoupling execution and settlement, the number of transactions being written on blockchains can be massively reduced.
              Further to that, optimizazion techniques already exist and are being experimented.
              Take zero-byte (or quasi-zero-byte) transactions: through the use of registries, the size of the transactions can be reduced massively (99% improvement and more).
              This means that, even without current blockchain upgrades, by just optimizing the way we build applications today, we can think of a massive increase in the number of transactions per second which can be processed.
          </p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Social</h2>
          <ul className="icons">
            <li><a href="https://twitter.com/rigoblock" className="icon fa-twitter" target="_blank"><span className="label">Twitter</span></a></li>
            <li><a href="https://www.facebook.com/RigoBlockProtocol/" className="icon fa-facebook" target="_blank"><span className="label">Facebook</span></a></li>
            <li><a href="https://www.instagram.com/rigoblockofficial/" className="icon fa-instagram" target="_blank"><span className="label">Instagram</span></a></li>
            <li><a href="https://github.com/rigoblock" className="icon fa-github" target="_blank"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: React.PropTypes.object,
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool
}

export default Main
