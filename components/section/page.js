import React from 'react';
import './index.css';
const Section = () => {
  return (
    <div>
      <div class="section">
        <div className="section-grid">
          <div class="card">
            <div class="card-content">
              <img src="heart-icon.png" alt="Heart Icon" className="icon" />
              <h2 className="card-title">What excites me? </h2>
            </div>
            <ul class="card-description">
              <li>
                {' '}
                Opportunity to build React components used across{' '}
                <span class="accent-green">MongoDB ecosystem</span>
              </li>
              <li>
                {' '}
                See development of larger projects (
                <span class="accent-green">custom code editor</span>,
                redesigning the nav, patterns+templates)
              </li>
              <li>
                {' '}
                Surrounded by <span class="accent-green">
                  brilliant minds{' '}
                </span>{' '}
                and community (the team, WIT, affinity groups){' '}
              </li>
            </ul>
          </div>

          <div class="card">
            <div class="card-content">
              <img src="lightbulb.png" alt="Lightbulb Icon" className="icon" />
              <h2 className="card-title">Reflections + Takeaways</h2>
            </div>
            <ul class="card-description">
              <li>
                Need <span class="accent-green"> more confidence </span> - fewer
                nerves
              </li>
              <li>
                Stephen and Terrence were very supportive - emphasized the value
                of{' '}
                <span class="accent-green"> listening and collaboration</span>{' '}
                in dev
              </li>
              <li>Balance speed with communication better</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
