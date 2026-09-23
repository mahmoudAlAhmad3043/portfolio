import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';

export function useIsMobile(selectedWidth) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= selectedWidth);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= selectedWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

export function sendEmail(data) {
  emailjs
    .sendForm(
      'service_c9xd22k',
      'template_b1d7wwi',
      data,
      {
        publicKey: 'H9Vyz8vRsVSFb4j_H',
      }
    )
    .then(
      () => {
        console.log('Email sent successfully');
      },
      (error) => {
        console.error('Failed:', error);
      }
    );
} 