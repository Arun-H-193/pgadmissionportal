import React, { useState } from 'react';
import '../Assets/css/footer.css'; // Import Footer CSS
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  // State variables to control modal visibility
  const [privacyPolicyShow, setPrivacyPolicyShow] = useState(false);
  const [termsConditionsShow, setTermsConditionsShow] = useState(false);
  const [contactUsShow, setContactUsShow] = useState(false);

  return (
    <footer className="footer">
      <div>
        <div className='socailmedialinkfooter'>
          <div className='divsvgfooter'>
            <Link className='linktosocail' to='https://www.instagram.com'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            </Link>
          </div>
          <div className='divsvgfooter'>
          <Link className='linktosocail' to='https://twitter.com'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-twitter">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          </Link>
          </div>
          <div className='divsvgfooter'>
          <Link className='linktosocail' to='https://www.linkedin.com'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            </Link>
          </div>
        </div>
        <br/>
        <br/>
        <p className='address'>@Master-up<br />pg admission site</p>
      </div>
      <div className='rightsidefooter'>
        <p className="footer-button" onClick={() => setPrivacyPolicyShow(true)}>Privacy Policy</p>
        <p className="footer-button" onClick={() => setTermsConditionsShow(true)}>Terms and Conditions</p>
        <Link to="/contact" className="footer-link"><p className="footer-button" >Contact Us</p></Link>
        <Link to="/faq" className="footer-link"><p className="footer-button" >FAQ</p></Link>
      </div>

      {/* Privacy Policy Modal */}
      <Modal show={privacyPolicyShow} onHide={() => setPrivacyPolicyShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Privacy Policy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Add your Privacy Policy content here */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod odio non ante posuere, sit amet cursus ipsum tincidunt. Pellentesque tincidunt, quam id egestas vehicula, ligula libero dignissim libero, ac fringilla libero mi eu quam. Nam iaculis, arcu vel pharetra dignissim, nunc turpis pellentesque turpis, id gravida nulla sem id odio.

Curabitur sit amet malesuada quam, in rhoncus libero. Vivamus eget justo eu libero dapibus sollicitudin. Nulla facilisi. Sed vel consectetur sapien. Sed non aliquet velit. Vivamus dignissim risus nec massa iaculis, non tincidunt quam tincidunt. Integer sed erat quam. Fusce vehicula risus vitae facilisis.

Maecenas ut varius sapien, a faucibus nisi. Nunc ullamcorper vehicula ante, in congue dolor venenatis eu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent vitae auctor tortor, sed varius quam. Phasellus tristique lectus in neque dictum vehicula. Vivamus a libero ut ex vehicula tincidunt eget a risus.


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setPrivacyPolicyShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Terms and Conditions Modal */}
      <Modal show={termsConditionsShow} onHide={() => setTermsConditionsShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Terms and Conditions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Add your Terms and Conditions content here */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod odio non ante posuere, sit amet cursus ipsum tincidunt. Pellentesque tincidunt, quam id egestas vehicula, ligula libero dignissim libero, ac fringilla libero mi eu quam. Nam iaculis, arcu vel pharetra dignissim, nunc turpis pellentesque turpis, id gravida nulla sem id odio.

Curabitur sit amet malesuada quam, in rhoncus libero. Vivamus eget justo eu libero dapibus sollicitudin. Nulla facilisi. Sed vel consectetur sapien. Sed non aliquet velit. Vivamus dignissim risus nec massa iaculis, non tincidunt quam tincidunt. Integer sed erat quam. Fusce vehicula risus vitae facilisis.

Maecenas ut varius sapien, a faucibus nisi. Nunc ullamcorper vehicula ante, in congue dolor venenatis eu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent vitae auctor tortor, sed varius quam. Phasellus tristique lectus in neque dictum vehicula. Vivamus a libero ut ex vehicula tincidunt eget a risus.


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setTermsConditionsShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Contact Us Modal */}
      <Modal show={contactUsShow} onHide={() => setContactUsShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Add your Contact Us content here */}
          For inquiries, please contact us at contact@example.com.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setContactUsShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </footer>
  );
}

export default Footer;
