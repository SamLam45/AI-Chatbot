import Head from 'next/head';
import Script from 'next/script';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import 'animate.css';

declare global {
  interface Window {
    WOW: any;
  }
}

export default function Event() {
  const router = useRouter();

  useEffect(() => {
    const initWOW = () => {
      if (typeof window !== 'undefined' && window.WOW) {
        const wow = new window.WOW({
          boxClass: 'wow',
          animateClass: 'animate__animated',
          offset: 0,
          mobile: true,
          live: true,
          callback: function(box: HTMLElement) {
            // Optional callback when animation is triggered
          },
          scrollContainer: null
        });
        
        // Initialize WOW
        wow.init();
        
        // Force refresh on scroll
        window.addEventListener('scroll', () => {
          wow.sync();
        });
      }
    };

    // Wait for WOW.js to load
    if (typeof window !== 'undefined') {
      if (window.WOW) {
        initWOW();
      } else {
        // If WOW is not loaded yet, wait for it
        const checkWOW = setInterval(() => {
          if (window.WOW) {
            initWOW();
            clearInterval(checkWOW);
          }
        }, 100);
      }
    }
  }, []);

  return (
    <>
      <Head>
        <title>JustDance - Dance Class Website Template</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <link href="/lib/animate/animate.min.css" rel="stylesheet" />
      </Head>

      {/* Load jQuery first */}
      <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js" strategy="beforeInteractive" />
      
      {/* Load other dependencies */}
      
      <Script src="/lib/wow/wow.min.js" strategy="beforeInteractive" />
      <Script src="/lib/easing/easing.min.js" strategy="beforeInteractive" />
      <Script src="/lib/waypoints/waypoints.min.js" strategy="beforeInteractive" />
      <Script src="/lib/counterup/counterup.min.js" strategy="beforeInteractive" />
      <Script src="/lib/owlcarousel/owl.carousel.min.js" strategy="beforeInteractive" />
      <Script src="/lib/lightbox/js/lightbox.min.js" strategy="beforeInteractive" />
      
      {/* Load main.js last */}
      <Script src="/js/main.js" strategy="afterInteractive" />

      {/* Spinner Start */}
      <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      {/* Spinner End */}


      {/* Topbar Start */}
      <div className="container-fluid bg-secondary px-5 d-none d-lg-block">
        <div className="row gx-0 align-items-center" style={{ height: '45px' }}>
          <div className="col-lg-8 text-center text-lg-start mb-lg-0">
            <div className="d-flex flex-wrap">
              <a href="#" className="text-light me-4"><i className="fas fa-map-marker-alt text-primary me-2"></i>Find A Location</a>
              <a href="#" className="text-light me-4"><i className="fas fa-phone-alt text-primary me-2"></i>+01234567890</a>
              <a href="#" className="text-light me-0"><i className="fas fa-envelope text-primary me-2"></i>Example@gmail.com</a>
            </div>
          </div>
          <div className="col-lg-4 text-center text-lg-end">
            <div className="d-flex justify-content-end">
              <div className="border-end border-start py-1">
                <a href="#" className="btn text-primary"><i className="fab fa-facebook-f"></i></a>
              </div>
              <div className="border-end py-1">
                <a href="#" className="btn text-primary"><i className="fab fa-twitter"></i></a>
              </div>
              <div className="border-end py-1">
                <a href="#" className="btn text-primary"><i className="fab fa-instagram"></i></a>
              </div>
              <div className="border-end py-1">
                <a href="#" className="btn text-primary"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}

      {/* Navbar & Hero Start */}
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 px-lg-5 py-3 py-lg-0">
          <a href="#" className="navbar-brand p-0">
            <h1 className="text-primary m-0"><i className="fas fa-biohazard me-3"></i>JustDance</h1>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <a href="/" className={`nav-item nav-link${router.pathname === '/' ? ' active' : ''}`}>Home</a>
              <a href="/about" className={`nav-item nav-link${router.pathname === '/about' ? ' active' : ''}`}>About</a>
              <a href="/event" className={`nav-item nav-link${router.pathname === '/event' ? ' active' : ''}`}>Events</a>
              <a href="/blog" className={`nav-item nav-link${router.pathname === '/blog' ? ' active' : ''}`}>Blogs</a>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                <div className="dropdown-menu m-0">
                  <a href="/classes" className="dropdown-item">Our classes</a>
                  <a href="/training" className="dropdown-item">Dance Training</a>
                  <a href="/team" className="dropdown-item">Our Team</a>
                  <a href="/testimonial" className="dropdown-item">Testimonial</a>
                  <a href="/404" className="dropdown-item">404 Page</a>
                </div>
              </div>
              <a href="/contact" className="nav-item nav-link">Contact Us</a>
            </div>
            <a href="#" className="btn btn-primary rounded-pill text-white py-2 px-4 flex-wrap flex-sm-shrink-0">Register Now</a>
          </div>
        </nav>
      </div>
      {/* Navbar & Hero End */}

      {/* Header Start */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{maxWidth: '900px'}}>
          <h3 className="text-primary display-3 wow animate__animated animate__fadeInDown" data-wow-delay="0.1s">Upcoming Events</h3>
          <ol className="breadcrumb justify-content-center text-white mb-0 wow animate__animated animate__fadeInDown" data-wow-delay="0.3s">
            <li className="breadcrumb-item"><a href="index.html" className="text-dark">Home</a></li>
            <li className="breadcrumb-item"><a href="#" className="text-dark">Pages</a></li>
            <li className="breadcrumb-item active text-primary">Events</li>
          </ol>    
        </div>
      </div>
      {/* Header End */}

      {/* Banner Start */}
      <div className="container-fluid bg-secondary animate__animated animate__zoomInDown" data-wow-delay="0.1s">
        <div className="container">
          <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center text-center p-5">
            <h1 className="me-4"><span className="fw-normal">Join us today for </span><span> your first dance</span></h1>
            <a href="#" className="text-white fw-bold fs-2"> <i className="fa fa-phone me-1"></i> 714-783-2205</a>
          </div>
        </div>
      </div>
      {/* Banner End */}

      {/* Events Start */}
      <div className="container-fluid events py-5 bg-white">
        <div className="container py-5">
          <div className="pb-5">
            <div className="row g-4 align-items-end">
              <div className="col-xl-8 animate__animated animate__fadeInUp">
                <h4 className="text-secondary sub-title fw-bold" data-wow-delay="0.1s">Events</h4>
                <h1 className="display-2 mb-0" data-wow-delay="0.3s">Upcoming Events</h1>
              </div>
              <div className="col-xl-4 text-xl-end pb-3 animate__animated animate__fadeInUp" data-wow-delay="0.3s">
                <a className="btn btn-primary rounded-pill text-white py-3 px-5" href="#">View All Events</a>
              </div>
            </div>
          </div>
          <div className="row g-4 justify-content-center">
            {/* event-item 區塊 */}
            <div className="col-md-6 col-lg-4 col-xl-3 animate__animated animate__fadeInUp" data-wow-delay="0.1s">
              <div className="event-item rounded">
                <div className="position-relative">
                  <img src="/img/service-1.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                  <div className="bg-primary text-white fw-bold rounded d-inline-block position-absolute p-2" style={{top: 0, right: 0}}>JAN 20</div>
                  <div className="d-flex justify-content-between border-start border-end bg-white px-2 py-2 w-100 position-absolute" style={{bottom: 0, left: 0, opacity: 0.8}}>
                    <a href="#" className="text-dark"><i className="fas fa-clock text-primary"></i> 08:00AM - 10:00PM</a>
                    <a href="#" className="text-dark"><span className="fas fa-map-marker-alt text-primary"></span> New York</a>
                  </div>
                </div>
                <div className="border border-top-0 rounded-bottom p-4">
                  <a href="#" className="h4 mb-3 d-block">Open House - Springs Dance</a>
                  <p className="mb-3 text-dark">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni vero excepturi blanditiis quidem</p>
                  <a className="btn btn-primary rounded-pill text-white py-2 px-4" href="#">Watch Now</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 animate__animated animate__fadeInUp" data-wow-delay="0.3s">
              <div className="event-item rounded">
                <div className="position-relative">
                  <img src="/img/service-2.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                  <div className="bg-primary text-white rounded d-inline-block position-absolute p-2" style={{top: 0, right: 0}}>JUN 30</div>
                  <div className="d-flex justify-content-between border-start border-end bg-white px-2 py-2 w-100 position-absolute" style={{bottom: 0, left: 0, opacity: 0.8}}>
                    <a href="#" className="text-dark"><i className="fas fa-clock text-primary"></i> 08:00AM - 10:00PM</a>
                    <a href="#" className="text-dark"><span className="fas fa-map-marker-alt text-primary"></span> New York</a>
                  </div>
                </div>
                <div className="border rounded-bottom p-4">
                  <a href="#" className="h4 mb-3 d-block">Open House And Registration</a>
                  <p className="mb-3 text-dark">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni vero excepturi blanditiis quidem</p>
                  <a className="btn btn-primary rounded-pill text-white py-2 px-4" href="#">Watch Now</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 animate__animated animate__fadeInUp" data-wow-delay="0.5s">
              <div className="event-item rounded">
                <div className="position-relative">
                  <img src="/img/service-3.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                  <div className="bg-primary text-white rounded d-inline-block position-absolute p-2" style={{top: 0, right: 0}}>MAY 15</div>
                  <div className="d-flex justify-content-between border-start border-end bg-white px-2 py-2 w-100 position-absolute" style={{bottom: 0, left: 0, opacity: 0.8}}>
                    <a href="#" className="text-dark"><i className="fas fa-clock text-primary"></i> 08:00AM - 10:00PM</a>
                    <a href="#" className="text-dark"><span className="fas fa-map-marker-alt text-primary"></span> New York</a>
                  </div>
                </div>
                <div className="border rounded-bottom p-4">
                  <a href="#" className="h4 mb-3 d-block">Open House Morris Dance</a>
                  <p className="mb-3 text-dark">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni vero excepturi blanditiis quidem</p>
                  <a className="btn btn-primary rounded-pill text-white py-2 px-4" href="#">Watch Now</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 animate__animated animate__fadeInUp" data-wow-delay="0.7s">
              <div className="event-item rounded">
                <div className="position-relative">
                  <img src="/img/service-4.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                  <div className="bg-primary text-white rounded d-inline-block position-absolute p-2" style={{top: 0, right: 0}}>APR 2</div>
                  <div className="d-flex justify-content-between border-start border-end bg-white px-2 py-2 w-100 position-absolute" style={{bottom: 0, left: 0, opacity: 0.8}}>
                    <a href="#" className="text-dark"><i className="fas fa-clock text-primary"></i> 08:00AM - 10:00PM</a>
                    <a href="#" className="text-dark"><span className="fas fa-map-marker-alt text-primary"></span> New York</a>
                  </div>
                </div>
                <div className="border rounded-bottom p-4">
                  <a href="#" className="h4 mb-3 d-block">Open House Dance Studio</a>
                  <p className="mb-3 text-dark">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni vero excepturi blanditiis quidem</p>
                  <a className="btn btn-primary rounded-pill text-white py-2 px-4" href="#">Watch Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Events End */}

      {/* Counter Facts Start */}
      <div className="container-fluid counter-facts py-5">
        <div className="container">
          <div className="row">
            {/* counter 區塊 */}
            <div className="col-12 col-sm-6 col-md-6 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
              <div className="counter">
                <div className="counter-icon w-100 d-flex align-items-center justify-content-center">
                  <h3>Dance Classes</h3>
                </div>
                <div className="counter-content d-flex align-items-center justify-content-center mt-4">
                  <span className="counter-value" data-toggle="counter-up">158</span>
                  <h4 className="text-secondary mb-0" style={{ fontWeight: 600, fontSize: '25px' }}>+</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
              <div className="counter">
                <div className="counter-icon w-100 d-flex align-items-center justify-content-center">
                  <h3>Best Instructor</h3>
                </div>
                <div className="counter-content d-flex align-items-center justify-content-center mt-4">
                  <span className="counter-value" data-toggle="counter-up">49</span>
                  <h4 className="text-secondary mb-0" style={{ fontWeight: 600, fontSize: '25px' }}>+</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
              <div className="counter">
                <div className="counter-icon w-100 d-flex align-items-center justify-content-center">
                  <h3>Total Brunch</h3>
                </div>
                <div className="counter-content d-flex align-items-center justify-content-center mt-4">
                  <span className="counter-value" data-toggle="counter-up">17</span>
                  <h4 className="text-secondary mb-0" style={{ fontWeight: 600, fontSize: '25px' }}>+</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
              <div className="counter">
                <div className="counter-icon w-100 d-flex align-items-center justify-content-center">
                  <h3>Happy customer</h3>
                </div>
                <div className="counter-content d-flex align-items-center justify-content-center mt-4">
                  <span className="counter-value" data-toggle="counter-up">567</span>
                  <h4 className="text-secondary mb-0" style={{ fontWeight: 600, fontSize: '25px' }}>+</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Counter Facts End */}

      {/* Video Gallery Start */}
      <div className="container-fluid gallery py-5 bg-white">
        <div className="container py-5">
          <div className="pb-5">
            <h4 className="text-secondary sub-title fw-bold animate__animated animate__fadeInUp" data-wow-delay="0.1s">Dance Gallery</h4>
            <h1 className="display-2 mb-0 animate__animated animate__fadeInUp" data-wow-delay="0.3s">Our Dance class gallery</h1>
          </div>
          <div className="tab-class animate__animated animate__fadeInUp" data-wow-delay="0.1s">
            <ul className="nav nav-pills d-inline-flex justify-content-center pb-4">
              <li className="nav-item bg-light border border-primary rounded-pill mb-4 animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                <a className="d-flex py-2 px-5 rounded-pill active" data-bs-toggle="pill" href="#GalleryTab-1">
                  <span className="text-dark">All</span>
                </a>
              </li>
              <li className="nav-item bg-light border border-primary rounded-pill mb-4 animate__animated animate__fadeInUp" data-wow-delay="0.2s">
                <a className="d-flex py-2 px-5 rounded-pill" data-bs-toggle="pill" href="#GalleryTab-2">
                  <span className="text-dark">Dance Practice</span>
                </a>
              </li>
              <li className="nav-item bg-light border border-primary rounded-pill mb-4 animate__animated animate__fadeInUp" data-wow-delay="0.3s">
                <a className="d-flex py-2 px-5 rounded-pill" data-bs-toggle="pill" href="#GalleryTab-3">
                  <span className="text-dark">Dance Training</span>
                </a>
              </li>
              <li className="nav-item bg-light border border-primary rounded-pill mb-4 animate__animated animate__fadeInUp" data-wow-delay="0.4s">
                <a className="d-flex py-2 px-5 rounded-pill" data-bs-toggle="pill" href="#GalleryTab-4">
                  <span className="text-dark">Dance Growth</span>
                </a>
              </li>
              <li className="nav-item bg-light border border-primary rounded-pill mb-4 animate__animated animate__fadeInUp" data-wow-delay="0.5s">
                <a className="d-flex py-2 px-5 rounded-pill" data-bs-toggle="pill" href="#GalleryTab-5">
                  <span className="text-dark">Dance Improvement</span>
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div id="GalleryTab-1" className="tab-pane fade show p-0 active">
                <div className="row g-2">
                  {/* 只搬移部分圖片作為範例，可依需求擴充 */}
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="video h-100">
                      <img src="/img/class-1.jpg" className="img-fluid rounded w-100 h-100" style={{objectFit: 'cover'}} alt="" />
                      <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                        <span></span>
                      </button>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="video h-100">
                      <img src="/img/class-2.jpg" className="img-fluid rounded w-100 h-100" style={{objectFit: 'cover'}} alt="" />
                      <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                        <span></span>
                      </button>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="video h-100">
                      <img src="/img/class-3.jpg" className="img-fluid rounded w-100 h-100" style={{objectFit: 'cover'}} alt="" />
                      <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                        <span></span>
                      </button>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="video h-100">
                      <img src="/img/class-2.jpg" className="img-fluid rounded w-100 h-100" style={{objectFit: 'cover'}} alt="" />
                      <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                        <span></span>
                      </button>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="video h-100">
                      <img src="/img/class-2.jpg" className="img-fluid rounded w-100 h-100" style={{objectFit: 'cover'}} alt="" />
                      <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                        <span></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* 其他 tab-pane 可依需求補齊 */}
            </div>
          </div>
        </div>
      </div>
      {/* Video Gallery End */}

      {/* Footer Start */}
      <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            {/* footer 欄位 */}
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <div className="footer-item">
                  <h4 className="text-white mb-4">JustDance</h4>
                  <p className="text-white mb-3">Dolor amet sit justo amet elitr clita ipsum elitr est.Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit.</p>
                  <div className="d-flex">
                    <a className="btn btn-lg-square btn-primary rounded-circle me-2" href=""><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-lg-square btn-primary rounded-circle mx-2" href=""><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-lg-square btn-primary rounded-circle mx-2" href=""><i className="fab fa-instagram"></i></a>
                    <a className="btn btn-lg-square btn-primary rounded-circle mx-2" href=""><i className="fab fa-linkedin-in"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Address</h4>
                <div className="d-flex align-items-center mb-3">
                  <a className="btn btn-lg-square btn-primary rounded-circle mx-2" href=""><i className="fas fa-map-marker-alt"></i></a>
                  <div className="text-white ms-2">
                    <p className="mb-0">0123.. Street, New York, USA</p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <a className="btn btn-lg-square btn-primary rounded-circle mx-2" href=""><i className="fa fa-phone-alt"></i></a>
                  <div className="text-white ms-2">
                    <p className="mb-0">+012 345 67890</p>
                    <p className="mb-0">+012 345 67890</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <a className="btn btn-lg-square btn-primary rounded-circle mx-2" href=""><i className="fas fa-envelope"></i></a>
                  <div className="text-white ms-2">
                    <p className="mb-0">info@example.com</p>
                    <p className="mb-0">info@example.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Quick Links</h4>
                <a href="#" className="footer-link"> About Us</a>
                <a href="#" className="footer-link"> Classes</a>
                <a href="#" className="footer-link"> Privacy Policy</a>
                <a href="#" className="footer-link"> Terms & Conditions</a>
                <a href="#" className="footer-link"> Schedule</a>
                <a href="#" className="footer-link"> FAQ</a>
                <a href="#" className="footer-link"> Contact Us</a>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <div className="footer-item">
                  <h4 className="text-white mb-4">Newsletter</h4>
                  <p className="text-white mb-3">Dolor amet sit justo amet elitr clita ipsum elitr est.Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit.</p>
                  <div className="position-relative mx-auto rounded-pill">
                    <input className="form-control rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Enter your email" />
                    <button type="button" className="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2">SignUp</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}

      {/* Copyright Start */}
      <div className="container-fluid copyright py-4">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-md-6 text-center text-md-start mb-md-0">
              <span className="text-white"><a href="#" className="border-bottom text-white"><i className="fas fa-copyright text-light me-2"></i>JustDance</a>, All right reserved.</span>
            </div>
            <div className="col-md-6 text-center text-md-end text-white">
              Designed By <a className="border-bottom text-white" href="https://htmlcodex.com">HTML Codex</a>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright End */}

      {/* Back to Top */}
      <a href="#" className="btn btn-primary btn-lg-square back-to-top"><i className="fa fa-arrow-up"></i></a>
    </>
  );
} 