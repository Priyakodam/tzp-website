import React from 'react';
import './Team.css'; // External CSS file
import image1 from './Images/Nalini-Aparanji-3.jpg'
import image2 from './Images/Dinesh-Badagandi-768x1152.jpg'
import image3 from './Images/abhi-2.jpg'


const Team = () => {
    return (
        <div className="team-container">
            <div className="team-header">
                <h2>Team - Tare Zameen Par Trust</h2>
            </div>
            <div className="team-members">
                <div className="team-member">
                    <img src={image1} alt="Mrs. Nalini Aparanji" />
                    <h3>Mrs. Nalini Aparanji</h3>
                    <p>Founder, Worked as CFO at Vizionmark Solution Pvt Ltd.</p>
                </div>
                <div className="team-member">
                    <img src={image2} alt="Mr. Dinesh Badagandi" />
                    <h3>Mr. Dinesh Badagandi</h3>
                    <p>Co-Founder, Decades of Entrepreneurial Experience.</p>
                </div>
                <div className="team-member">
                    <img src={image3} alt="Mr. Abhijeet Chaudhari" />
                    <h3>Mr. Abhijeet Chaudhari</h3>
                    <p>Head Operations</p>
                </div>
            </div>
        </div>
    );
};

export default Team;
