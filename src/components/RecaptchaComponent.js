import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const RecaptchaComponent = ({ onVerify }) => {
  const handleRecaptchaChange = (value) => {
    console.log("Captcha value:", value);
    if (onVerify) {
      onVerify(value);
    }
  };

  return (
    <div>
      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        onChange={handleRecaptchaChange}
      />
    </div>
  );
};

export default RecaptchaComponent;
