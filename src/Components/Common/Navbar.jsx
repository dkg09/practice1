import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <header className="header-area header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                {/* <!-- ***** Logo Start ***** --> */}
                                <Link to="/" className="logo">Job Agency<em> Website</em></Link>
                                {/* <!-- ***** Logo End ***** --> */}
                                {/* <!-- ***** Menu Start ***** --> */}
                                <ul className="nav">
                                    <li><Link to="/" className="active">Home</Link></li>
                                    <li><Link to="/jobs">Jobs</Link></li>
                                    <li><Link to="/blog">Blog</Link></li>
                                    {/* <li className="dropdown">
                                <Link className="dropdown-toggle" data-toggle="dropdown" to="#" role="button"
                                    aria-haspopup="true" aria-expanded="false">About</Link>

                                <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="/blog">Blog</Link>
                                    <Link className="dropdown-item" to="team.html">Team</Link>
                                    <Link className="dropdown-item" to="blog.html">Blog</Link>
                                    <Link className="dropdown-item" to="testimonials.html">Testimonials</Link>
                                    <Link className="dropdown-item" to="terms.html">Terms</Link>
                                </div>
                            </li> */}
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                                <a className='menu-trigger'>
                                    <span>Menu</span>
                                </a>
                                {/* <!-- ***** Menu End ***** --> */}
                            </nav>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Navbar