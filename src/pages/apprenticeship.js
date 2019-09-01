import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'
import pareto from "../assets/images/pareto.png";
import pareto2 from "../assets/images/pareto2.jpeg";
import pareto3 from "../assets/images/pareto3.png"
import pareto4 from "../assets/images/pareto4.png"
import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'
import kenmore from "../assets/images/Kenmore3.jpg"
import remote1 from "../assets/images/remote1.png"

const Apprenticeship = (props) => (
    <Layout>
        <Helmet>
            <title>Michael Litchev - Software Developer, Product Creator</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding title="The Full-Stack Apprenticeship" content="A mentorship-driven learning process focused on developing the ability to create a web or mobile application." />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Gamifying the learning process</h2>
                    </header>
                    <p>My goal when designing the product was to make the process of learning fun & addictive. To keep our students pyschologically engaged and motivated, we turned the process of setting up your online presence and making your first portfolio product into a game where you earn experience. Earn 100EXP for making your GitHub profile, 150EXP for going to your first Meetup, 250EXP for building the authentication (login/registration) and more!</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={pareto3} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Meetup Organizer</h3>
                            </header>
                            <p>I've hosted more than 30 in-person Meetups in the Seattle area, training people in React, Node & AWS while having them contribute piecemeal to our open-source React Native application. A critical part of the learning process is structure & accountability - hosting events on a consistent basis gives people the community and support they need to succeed as self-taught developers.</p>
                            {/* <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul> */}
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={kenmore} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Remote Sprint Planning</h3>
                            </header>
                            <p>To speed up the pace of our development, I have organized remote sprint planning, standup and retrospectives for our open-source projects. This gives us an increase in velocity through accountability, and gives our Meetup members the opportunity to simulate what working in a professional development team is like. </p>
                            {/* <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul> */}
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={remote1} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Developing My Leadership Skills</h3>
                            </header>
                            <p>Being a proactive person, I took this opportunity that I created for myself to continue to improve my leadership skills. The teacher learns twice as much as the student, and by involving myself in the community - I learned more about the struggles & challenges people face when trying to break into the tech industry from non-traditional backgrounds. If you would like to make it to one of our Meetups, you can see what's coming up below.</p>
                            <ul className="actions">
                                <li><a href="https://www.meetup.com/pareto-learning" className="button" target="_blank">View on Meetup</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Apprenticeship;