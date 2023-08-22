import React from 'react';
import '../FloatingIcons/FloatingIcons.css';

const FloatingIcons = () => {
  return (
    <div className="floating-icons">
      <div className="links">
            <a href="https://youtu.be/x4KxbuZB5Sk">
              <span className="link youtube">
                <img className="social-icons" src="/images/youtube.svg" alt="youtube" />
               </span>
            </a>

            <a href="https://www.facebook.com/100068424754008/posts/pfbid06X41cnPmU19mkABrRWZmvqMGwHvdHFVUcgv4Xd3sJgFRZw1P14YqphSthpASYngYl/?mibextid=cr9u03">
              <span className="link facebook">
                <img className="social-icons1" src="/images/facebook.svg" alt="facebook" />
               </span>
             </a>

            <a href="https://instagram.com/_gamers_burnout_?igshid=MzRlODBiNWFlZA==">
               <span className="link instagram">
                 <img className="social-icons1" src="/images/instagram.svg" alt="instagram" />
              </span>
            </a>

             <a href="https://instagram.com/_gamers_burnout_?igshid=MzRlODBiNWFlZA==">
                <span className="link twitter">
                  <img className="social-icons1" src="/images/twitter.svg" alt="twitter" />
                </span>
             </a>
      </div>
    </div>
  );
};

export default FloatingIcons;
