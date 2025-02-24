import React from 'react';
import './OurValues.css'; // External CSS file

const OurValues = () => {
    return (
        <div className="values-container">
            <h2 className='main-heading'>Terms & Conditions</h2>
            <div className="value-section">

            <p className="paragraph-element">
            These Terms & Conditions govern your use of the Saare Tare Zameen Par Trust website and the donation process through the Razorpay payment gateway. By making a donation, you agree to these terms.
            </p>
            </div>

            <div className="value-section">
                <span  className='Sub-Heading'>Donations:</span>
                <p  className="paragraph-element" >
                All donations made through this website are voluntary contributions to Saare Tare Zameen Par Trust. Donors must provide accurate and complete information.
                </p>
            </div>
            <div className="value-section">
                <span className='Sub-Heading'>Refunds:</span>
                <p  className="paragraph-element">
                Saare Tare Zameen Par Trust does not offer refunds on donations. Once a donation is made, it is considered final and non-refundable.              </p>
            </div>
            <div className="value-section">
                <span className='Sub-Heading'>Privacy Policy: 
                </span>
                <p  className="paragraph-element">
                Your personal information is important to us. We collect, use, and store your information in accordance with our Privacy Policy. Your data is kept confidential and used only for donation processing and communication with you.
 
                </p>
            </div>
            <div className="value-section">
                <span className='Sub-Heading'>Pricing:</span>
                <p  className="paragraph-element">
                Saare Tare Zameen Par Trust may display suggested donation amounts, but donors are free to contribute any amount they choose. All donations are in Indian Rupees (INR).
                </p>
            </div>
            <div className="value-section">
                <span className='Sub-Heading'>Cancellation: </span>
                <p  className="paragraph-element">
                Donors may cancel a donation before it is processed by contacting us at [contact email/phone number]. Once a donation has been processed, it cannot be canceled or refunded.


                </p>
            </div>
            <div className="value-section">
                <span className='Sub-Heading'> 
                Privacy Policy:</span>
                <p  className="paragraph-element">
                Saare Tare Zameen Par Trust is committed to safeguarding your privacy. Our Privacy Policy outlines how we collect, use, and protect your personal information. By using our website and making a donation, you consent to our Privacy Policy. For more details, please refer to our Privacy Policy page.
                </p>
            </div>
            <div className="value-section">
                <span className='Sub-Heading'>Refunds Policy:
                </span>
                <p  className="paragraph-element">
                Saare Tare Zameen Par Trust does not offer refunds on donations. Once a donation is made, it is considered final and non-refundable. If you have concerns about a specific donation, please contact us at [contact email/phone number] for assistance.

                </p>
            </div>
            <div className="value-section">
                <span className='Sub-Heading'>Pricing Policy:</span>
                <p  className="paragraph-element">
                Donors are encouraged to contribute any amount they are comfortable with. Saare Tare Zameen Par Trust may display suggested donation amounts, but these are for reference only. All donations are in Indian Rupees (INR).
                </p>
            </div>
            <div className="value-section">
                <span className='Sub-Heading'>Cancellation Policy:</span>
                <p  className="paragraph-element">
                Donors may cancel a donation before it is processed by contacting us at [contact email/phone number]. Once a donation has been processed, it cannot be canceled or refunded.
                </p>
                <p  className="paragraph-element">
                By proceeding with your donation, you acknowledge that you have read and agreed to the Terms & Conditions, Privacy Policy, Refunds Policy, Pricing Policy, and Cancellation Policy outlined above. If you have any questions or concerns, please feel free to contact us at info@tarezameenpar for assistance. Thank you for supporting Saare Tare Zameen Par Trust in our mission to bring quality education to last-mile students.
                </p>
            </div>

        </div>
    );
};

export default OurValues;
