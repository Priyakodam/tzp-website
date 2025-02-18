import React from "react";
import "./DaanUtsav.css";

const DaanUtsav = () => {
  return (
    <div className="daan-container">
      <h1 className="daan-title">Welcome to the ‘DaanUtsav’ Donation Campaign</h1>
      <p className="daan-intro">
        Be a catalyst for change in the lives of remote area students.
      </p>

      <div className="daan-section">
        <h2>Option 1: Support the ‘Spark of Curiosity’ Program (INR: 1200 Per Student)</h2>
        <p className="paragraph-element" >
          🌟 Ignite Young Minds with ‘Spark of Curiosity’ 🌟
        </p>
        <p className="paragraph-element">
          Choose to support our flagship initiative and empower young minds with immersive and inspirational learning experiences.
        </p>
        <ul className="daan-list">
          <li>🔬 <strong>Science Kits:</strong> Hands-on experiments and educational materials.</li>
          <li>🪐 <strong>Mobile Planetarium Shows:</strong> Bringing the wonders of the universe to students.</li>
          <li>🧪 <strong>Interaction with Indian Scientists:</strong> Unique engagement and learning opportunities.</li>
          <li>📚 <strong>Yearlong Expert Lectures:</strong> Workshops and activities nurturing young talents.</li>
        </ul>
      </div>

      <div className="daan-section">
        <h2>Option 2: Donate ‘StarScope’ and ‘Moonscope’ Telescopes to Schools</h2>
        <p className="paragraph-element">
          🔭 Bring the Cosmos Closer to Students with ‘StarScope’ and ‘Moonscope’ 🔭
        </p>
        <p className="paragraph-element">
          Make the universe more accessible to budding astronomers by donating telescopes.
        </p>
        <ul className="daan-list">
          <li>🌌 <strong>‘StarScope’ Telescopes:</strong> ₹4500 per telescope for exploring distant stars and planets.</li>
          <li>🌙 <strong>‘Moonscope’ Telescopes:</strong> ₹2500 per telescope for detailed Moon observations.</li>
          <li>🪐 <strong>Astronomy Education:</strong> Sparking a lifelong interest in space exploration.</li>
        </ul>
      </div>

      <p className="daan-thank-you">
        Thank you for being a part of ‘DaanUtsav’ and inspiring the next generation of scientists and astronomers! 🌠
      </p>
    </div>
  );
};

export default DaanUtsav;
