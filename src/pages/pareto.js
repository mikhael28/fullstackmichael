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

const Pareto = (props) => (
    <Layout>
        <Helmet>
            <title>Michael Litchev - Software Developer, Product Creator</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding title="Pareto" content="Providing new developers with the 20% of actionable information needed to achieve 80% of the results they need." />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>The 80/20 Rule in Action</h2>
                    </header>
                    <p>After running a Meetup training to teach people Full-Stack JavaScript development for almost a year, I reached a point where I had to develop a product to help people get started on the right foot. To give people the tools they needed to succeed, I had to combine the digital with the physical - the Pareto Full-Stack Starter Kit was born.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={pareto} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Full-Stack Development in 8 Pages</h3>
                            </header>
                            <p>Learning to program is similar to learning any other trade - it's crucial for novices to learn about the tools and techniques at their disposal. To give them a quick reference point, I compressed the essentials of React & JavaScript into 8 pages to simplify the amount of information students had to absorb to become productive.</p>
                            {/* <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul> */}
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pareto2} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Workflow Stickers</h3>
                            </header>
                            <p>Working with people from all age groups and backgrounds, I quickly learned that some people memorize workflows faster than others. To increase the rate of learning, I created a set of stickers to be placed on the right and left side of the track pads to help learners improve their muscle memory.</p>
                            {/* <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul> */}
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pareto4} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Continous Improvement</h3>
                            </header>
                            <p>My philosophy is to continually improve my products and processes. I wrote a technical manual that is included with the kit, which includes valuable context for the tools our students will use & how they fit within the process of developing software. Starting as a simple pdf printout, it is now bound as a booklet - an example of how I approach product development, delivering a functional product while continuing to refine it's value. Starting as a simple manual, it now includes a technical glossay as well as interactive goal-setting and scheduling activities to help students understand their objects and the time they will need to carve out to meet them.</p>
                            <ul className="actions">
                                <li><a href="https://www.amazon.com/dp/B07W86DB9V?ref=myi_title_dp" className="button" target="_blank">View on Amazon</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Pareto;