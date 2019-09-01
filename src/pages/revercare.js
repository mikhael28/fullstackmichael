import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'
import twilio from "../assets/images/twilio.png"
import revercare from "../assets/images/revercare.png"
import aws from "../assets/images/aws-step-functions.png"

const ReverCare = (props) => (
    <Layout>
        <Helmet>
            <title>Michael Litchev - Software Developer, Product Creator</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding title="ReverCare" content="Consulting for a Y-Combinator Startup, I built out their platform MVP, API's and trained their summer intern." />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Social Work Case Management Software</h2>
                    </header>
                    <p>The two and a half month contract entailed building out a React web application, along with a set of Serverless Node.js API's for accessing MongoDB and a number of peripheral services.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={revercare} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Masked SMS with Twilio</h3>
                            </header>
                            <p>In order to adjust our experience to our target demographic, we implemented masked two-way SMS messaging between caregivers and the social workers. In addition to a messaging system built into the web application, users were able to directly message each other by SMS, by texting a provided ReverCare phone number. I implemented Twilio webhooks, reading from a DynamoDB table of To/From phone number pairings.</p>
                            {/* <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul> */}
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={twilio} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Email Scheduling with AWS Step Functions</h3>
                            </header>
                            <p>To make sure our users remembered their appointments, I was given the requirement to queue out emails to be sent out reminding clients of upcoming appointments within 48, 24 & 6 hours. To solve this, I implemented an AWS Step Function which would accept a timestamp, recipient list and message body to an email to be sent out through Amazon Simple Email Service (SES) at the apportioned time (once converted to UTC) </p>
                            {/* <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul> */}
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={aws} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Training Technical Interns</h3>
                            </header>
                            <p>The founders hired an intern during the second month of development, and I was able to train a 'rising sophomore' who had no experience with React, Node & AWS to contribute across the entire stack. She contributed a pull-request on her first day. After my contract ended, she was able to work self-sufficiently until her internship ended in August. I take great pride in my ability to train and mentor developers.</p>
                            <ul className="actions">
                                <li><a href="https://getrevercare.com" className="button" target="_blank">View ReverCare</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default ReverCare;