import React from 'react'
import { Link } from 'react-router-dom'

const Jobs = () => {
  const imageItems = [
    {
      src: 'assets/images/product-1-720x480.jpg',
      price: '$70,000',
      title: 'Lorem ipsum dolor sit amet, consectetur',
      category: 'Medical / Health Jobs',
    },
    {
      src: 'assets/images/product-2-720x480.jpg',
      price: '$70,000',
      title: 'Lorem ipsum dolor sit amet, consectetur',
      category: 'Medical / Health Jobs',
    },
    {
      src: 'assets/images/product-3-720x480.jpg',
      price: '$70,000',
      title: 'Lorem ipsum dolor sit amet, consectetur',
      category: 'Medical / Health Jobs',
    },
    {
      src: 'assets/images/product-4-720x480.jpg',
      price: '$70,000',
      title: 'Lorem ipsum dolor sit amet, consectetur',
      category: 'Medical / Health Jobs',
    },
    {
      src: 'assets/images/product-5-720x480.jpg',
      price: '$70,000',
      title: 'Lorem ipsum dolor sit amet, consectetur',
      category: 'Medical / Health Jobs',
    },
    {
      src: 'assets/images/product-6-720x480.jpg',
      price: '$70,000',
      title: 'Lorem ipsum dolor sit amet, consectetur',
      category: 'Medical / Health Jobs',
    },
    // Add more image data objects as needed
  ];
  return (
    <>

      {/* <!-- ***** Call to Action Start ***** --> */}
      <section className="section section-bg" id="call-to-action" style={{ backgroundImage: "url(assets/images/banner-image-1-1920x500.jpg)" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="cta-content">
                <br />
                <br />
                <h2>Our <em>Jobs</em></h2>
                <p>Ut consectetur, metus sit amet aliquet placerat, enim est ultricies ligula</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ***** Call to Action End ***** --> */}

      {/* <!-- ***** Fleet Starts ***** --> */}
      <section className="section" id="trainers">
        <div className="container">
          <br />
          <br />

          <div className="row">
            <div className="col-lg-4">
              <form action="#">
                <h5 style={{ marginBottom: "15px" }}>Type</h5>

                <div>
                  <label>
                    <input type="checkbox" />

                    <span>Contract (5)</span>
                  </label>
                </div>

                <div>
                  <label>
                    <input type="checkbox" />

                    <span>Full time (5)</span>
                  </label>
                </div>

                <div>
                  <label>
                    <input type="checkbox" />

                    <span>Internship (5)</span>
                  </label>
                </div>

                <br />

                <h5 style={{ marginBottom: "15px" }}>Category</h5>

                <div>
                  <label>
                    <input type="checkbox" />

                    <span>Accounting / Finance / Insurance Jobs (5)</span>
                  </label>
                </div>

                <div>
                  <label>
                    <input type="checkbox" />

                    <span>Accounting / Finance / Insurance Jobs (5)</span>
                  </label>
                </div>

                <div>
                  <label>
                    <input type="checkbox" />

                    <span>Accounting / Finance / Insurance Jobs (5)</span>
                  </label>
                </div>

                <br />

                <h5 style={{ marginBottom: "15px" }}>Career levels</h5>

                <div>
                  <label>
                    <input type="checkbox" />

                    <span>Entry Level (5)</span>
                  </label>
                </div>

                <div>
                  <label>
                    <input type="checkbox" />

                    <span>Entry Level (5)</span>
                  </label>
                </div>

                <div>
                  <label>
                    <input type="checkbox" />

                    <span>Entry Level (5)</span>
                  </label>
                </div>

                <br />

                <h5 style={{ marginBottom: "15px" }}>Education levels</h5>

                <div>
                  <label>
                    <input type="checkbox" />

                    <span>Associate Degree (5)</span>
                  </label>
                </div>

                <div>
                  <label>
                    <input type="checkbox" />

                    <span>Associate Degree (5)</span>
                  </label>
                </div>

                <div>
                  <label>
                    <input type="checkbox" />

                    <span>Associate Degree (5)</span>
                  </label>
                </div>

                <br />


                <h5 style={{ marginBottom: "15px" }}>Years of experience</h5>

                <div>
                  <label>
                    <input type="checkbox" />

                    <span>&lt; 1 (5)</span>
                  </label>
                </div>

                <div>
                  <label>
                    <input type="checkbox" />

                    <span>&lt; 1 (5)</span>
                  </label>
                </div>

                <div>
                  <label>
                    <input type="checkbox" />

                    <span>&lt; 1 (5)</span>
                  </label>
                </div>
              </form>

              <br />
            </div>

            <div className="col-lg-8">
              <div className="row">
                {imageItems.map((image, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="trainer-item">
                      <div className="image-thumb">
                        <img src={image.src} alt="" />
                      </div>
                      <div className="down-content">
                        <span> <sup>{image.price}</sup></span>
                        <h4>{image.title}</h4>
                        <p>{image.category}</p>
                        <ul className="social-icons">
                          <li>
                            <a href="/job-details">+ View More</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <br />

          <nav>
            <ul className="pagination pagination-lg justify-content-center">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      {/* <!-- ***** Fleet Ends ***** --> */}



    </>
  )
}

export default Jobs