import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'
import pareto from "../assets/images/pareto.png";
import pareto2 from "../assets/images/pareto2.jpeg";
import pareto4 from "../assets/images/pareto4.png"
import onvia from "../assets/images/onvia.jpeg";
import akpsi from "../assets/images/akpsi.jpg"

const History = (props) => (
    <Layout>
        <Helmet>
            <title>Michael Litchev - Software Developer, Product Creator</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding title="My Past Life" content="Before engineering, I worked in sales, marketing and product." />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Coming Out of College</h2>
                    </header>
                    <p>With an incredibly marketable and high-paying Political Science degree, I interned with the US Congress for 3 months. I quickly realized the bureaucracy of government was not for me. I had served as Executive Vice President of Alpha Kappa Psi, the Co-Ed Professional Business Fraternity at Western Washington University and felt that the business world would be a much better fit.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={akpsi} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Sales, Marketing & Product</h3>
                            </header>
                            <p>I quickly found a job with Onvia, a Seattle-based tech company (since aquired) that provided an aggregated database of government contracting opportunities across the country. With my Political Science degree, I thought this was great synergy to start things off. With myself and my manager, we owned a new eCommerce product that was a fraction of the companies total revenue. I handle all customer service inquiries for up to 700 customers, and my manager and I shared the responsibilities of grooming the product backlog & working with developers and the UX design team to contribute improvements to the product. In one project, I got to touch some code & instantly got hooked.</p>
                            {/* <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul> */}
                        </div>
                    </div>
                </section>
                
                <section>
                    <Link to="/generic" className="image">
                        <img src={onvia} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Self-taught Engineer</h3>
                            </header>
                            <p>I'd always been capable of learning anything. I didn't have a 4.0 GPA, but I did test out of the 2nd grade. I graduated high school when I was 17, and graduated with my bachelors at age 20. My mentor, an older brother from my business fraternity in college, also graduated with a Political Science degree. He made the decision a few years before to transition into programming, and I got to see his progress first hand. He went through an immersive process, then got some freelance work. Then, he got a better paying job. Then, he got a much better paying job. After that, he was working for a great company & making great money. I thought, if he could do it - so could I. </p>
                            <p>My experience is why I'm so passionate about mentorship in technology, and why I dedicate so much time to organizing Meetups and creating products to help junior developers be productive (see the other parts of this site for details). I was fortunate to have someone in my life looking out for me, helping me along and providing support - technically and emotionally. They weren't perfect, but who is? I'm dedicated to paying it back to the world, and helping other people see that the journey I took is possible for them too.</p>
                            
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default History;