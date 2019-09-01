import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'
import pareto from "../assets/images/website-png.png"
import meetup from "../assets/images/meetup.jpg"
import geriatric from "../assets/images/geriatric.jpg"

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Michael Litchev - Software Developer, Product Creator"
                    meta={[
                        { name: 'description', content: 'A place for fellow developers & recruiters alike to learn a little bit more about me & my journey.' },
                        { name: 'keywords', content: 'pareto, full-stack apprenticeship, self-taught, Seattle, Bay Area' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundColor: `black`}}>
                            <header className="major">
                                <h3>Pareto</h3>
                                <p>The Full-Stack Developer Starter Kit</p>
                            </header>
                            <Link to="/pareto" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${meetup})`}}>
                            <header className="major">
                                <h3>The Full-Stack Apprenticeship</h3>
                                <p>Lead Developer of React Native Open-Source project in Seattle, WA</p>
                            </header>
                            <Link to="/apprenticeship" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${geriatric})`}}>
                            <header className="major">
                                <h3>ReverCare (YC S19)</h3>
                                <p>Consulted to build platform MVP for Y-Combinator Portfolio Company, using React, Node, AWS</p>
                            </header>
                            <Link to="/revercare" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Persisto Labs</h3>
                                <p>Spending time in the world of Caribbean technology.</p>
                            </header>
                            <Link to="/persisto" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>Work & Rise</h3>
                                <p>Lead developer for East African (Ugandan) freelance marketplace.</p>
                            </header>
                            <Link to="/workandrise" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>My Previous Life</h3>
                                <p>Marketing, Product & Political Science</p>
                            </header>
                            <Link to="/history" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>I'm an open book</h2>
                            </header>
                            <p>I'm evaluating full-time opportunities in front-end or full-stack development, looking to work with great people who value collaboration & producting great work. Please drop me a line at the email below, or give me a call for us to explore working together.</p>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex