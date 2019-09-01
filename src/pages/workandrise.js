import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'
import serverless from "../assets/images/serverless.png"
import wr from "../assets/images/wr-preview.png"
import shillings from "../assets/images/shillings.jpg"

const WorkAndRise = (props) => (
    <Layout>
        <Helmet>
            <title>Michael Litchev - Software Developer, Product Creator</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding title="Work & Rise" content="Working as a JavaScript consultant, I built out the 1.0 of a freelance marketplace for Uganda, and the East African Community (Kenya, Burundi, Tanzania, South Sudan & Rwanda) " />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>React Web & Native</h2>
                    </header>
                    <p>The front-end was initially built with React, intending to be a progressive web application (PWA) that users could download onto their phones. Most people in Uganda don't have laptops. Due to unforeseen issues (Opera Mini, regional default browser disables JavaScript by default), I additionally built a skeleton React Native application that covered the freelancer experience and could be extended.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={wr} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Direct Payouts in Ugandan Currency</h3>
                            </header>
                            <p>Integrating with a payment aggregator, the platform has the ability to take deposits from the employers, hold in escrow until project completion, and pay out the freelancer in Ugandan shillings. Support for Kenyan & Tanzanian currency also included.</p>
                            {/* <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul> */}
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={shillings} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Serverless & Monolith Node.js</h3>
                            </header>
                            <p>Our API's consisted of a healthy combination with a monolith handling database operations, and a series of serverless APIs for handling notifications, messaging and more. Our data stores consisted of Postgres for handling our users, jobs, applications and transactions with DynamoDB storing our messages & notifications. </p>
                            {/* <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul> */}
                       `<ul className="actions">
                                <li><a href="https://platform.workandrise.today" className="button" target="_blank">View Work & Rise</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                
            </section>
        </div>

    </Layout>
)

export default WorkAndRise;