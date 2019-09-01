import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'
import pareto from "../assets/images/pareto.png";
import saga from "../assets/images/saga.png"
import hl from "../assets/images/hl.png"
import stellar from "../assets/images/stellar.png"
import uwi from "../assets/images/uwi.jpg";
const Persisto = (props) => (
    <Layout>
        <Helmet>
            <title>Michael Litchev - Software Developer, Product Creator</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding title="Persisto" content="Full-Stack Developing in the Caribbean, Trinidad & Tobago to be exact." />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>React Native Development + Redux Sagas</h2>
                    </header>
                    <p>A part of the work involved contributing to a React Native application to be handling mobile payments. State management was handled through Redux + Sagas for future re-usability with a web portal. </p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={saga} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Node API working with Stellar Cryptocurrency</h3>
                            </header>
                            <p>Put together a proof-of-concept API for onboarding users to create a Stellar wallet, and send identity credentials through a custom-issued asset.</p>
                            {/* <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul> */}
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={stellar} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Identity Credentials with HyperLedger Indy</h3>
                            </header>
                            <p>Undertook research and proof of concept implementation for the Hyperledger Indy API, to handle the secure creation and transmission of identity credentials.</p>
                            {/* <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul> */}
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={hl} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Technology Mentorship</h3>
                            </header>
                            <p>While in Trinidad, I met with the University of West Indies Computer Science Society and ran a workshop running through building and deploying a full-stack application using a real-world use case from a local entrepreneur. I learned a lot in my time in TT - that professional culture in IT/tech has a lot of variety internationally, and that the pace of business can vary substantially from what I'm used to here. There is great opportunity there, and hopefully I will be able to give more to the great people on the island. </p>
                            <Link to="/generic" className="image">
                        <img src={uwi} alt="" />
                    </Link>
                         
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Persisto;