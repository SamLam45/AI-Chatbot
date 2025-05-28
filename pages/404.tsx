import Head from 'next/head';
import Script from 'next/script';
import { useEffect } from 'react';
import 'animate.css';

declare global {
  interface Window {
    WOW: any;
  }
}

export default function Custom404() {
  useEffect(() => {
    // Initialize WOW.js
    if (typeof window !== 'undefined') {
      const initWOW = () => {
        if (window.WOW) {
          const wow = new window.WOW({
            boxClass: 'wow',
            animateClass: 'animate__animated',
            offset: 100,
            mobile: true,
            live: true,
            callback: function(box: HTMLElement) {
              // Optional callback when animation is triggered
            },
            scrollContainer: null
          });
          wow.init();
        }
      };

      // Wait for WOW.js to load
      if (window.WOW) {
        initWOW();
      } else {
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

      {/* Scripts */}
      <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js" strategy="beforeInteractive" />

      <Script src="/lib/wow/wow.min.js" strategy="beforeInteractive" />
      <Script src="/lib/easing/easing.min.js" strategy="beforeInteractive" />
      <Script src="/lib/waypoints/waypoints.min.js" strategy="beforeInteractive" />
      <Script src="/lib/counterup/counterup.min.js" strategy="beforeInteractive" />
      <Script src="/lib/owlcarousel/owl.carousel.min.js" strategy="beforeInteractive" />
      <Script src="/lib/lightbox/js/lightbox.min.js" strategy="beforeInteractive" />
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
              <a href="/" className="nav-item nav-link">Home</a>
              <a href="/about" className="nav-item nav-link">About</a>
              <a href="/event" className="nav-item nav-link">Events</a>
              <a href="/blog" className="nav-item nav-link">Blogs</a>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle active" data-bs-toggle="dropdown">Pages</a>
                <div className="dropdown-menu m-0">
                  <a href="/classes" className="dropdown-item">Our classes</a>
                  <a href="/training" className="dropdown-item">Dance Training</a>
                  <a href="/team" className="dropdown-item">Our Team</a>
                  <a href="/testimonial" className="dropdown-item">Testimonial</a>
                  <a href="/404" className="dropdown-item active">404 Page</a>
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
        <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
          <h3 className="text-primary display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s">404 Pages</h3>
          <ol className="breadcrumb justify-content-center text-white mb-0 wow fadeInDown" data-wow-delay="0.3s">
            <li className="breadcrumb-item"><a href="/" className="text-dark">Home</a></li>
            <li className="breadcrumb-item"><a href="#" className="text-dark">Pages</a></li>
            <li className="breadcrumb-item active text-primary">404</li>
          </ol>
        </div>
      </div>
      {/* Header End */}

      {/* Banner Start */}
      <div className="container-fluid bg-secondary wow zoomInDown" data-wow-delay="0.1s">
        <div className="container">
          <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center text-center p-5">
            <h1 className="me-4"><span className="fw-normal">Join us today for </span><span> your first dance</span></h1>
            <a href="#" className="text-white fw-bold fs-2"> <i className="fa fa-phone me-1"></i> 714-783-2205</a>
          </div>
        </div>
      </div>
      {/* Banner End */}

      {/* 404 Start */}
      <div className="container-fluid bg-light py-5">
        <div className="container py-5 text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <i className="bi bi-exclamation-triangle display-1 text-secondary"></i>
              <h1 className="display-1">404</h1>
              <h1 className="mb-4">Page Not Found</h1>
              <p className="mb-4 text-dark">We're sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
              <a className="btn btn-primary text-white rounded-pill py-3 px-5" href="/">Go Back To Home</a>
            </div>
          </div>
        </div>
      </div>
      {/* 404 End */}

      {/* Footer Start */}
      <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
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
