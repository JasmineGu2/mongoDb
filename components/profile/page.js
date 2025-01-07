import React from "react";

const ProfilePage = () => {
  return (
    <div>
      <div class="footer">
      <div className="footer-grid">
      <div class="footer-box">
  <div class="footer-box-content">
  <img src="heart-icon.png" alt="Heart Icon" className="icon" />
    <h2 className="footer-box-title">What excites me? </h2>
  </div>
  <ul class="footer-box-description">
    <li> Opportunity to build React components used across <span class="accent-green">MongoDB ecosystem</span></li>
    <li> See development of larger projects (<span class="accent-green">custom code editor</span>, redesigning the nav, patterns+templates)</li>
    <li> Surrounded by <span class="accent-green">brilliant minds </span> and community (the team, WIT, affinity groups) </li>
    </ul>
</div>

<div class="footer-box">
  <div class="footer-box-content">
  <img src="lightbulb.png" alt="Lightbulb Icon" className="icon" />
    <h2 className="footer-box-title">Reflections + Takeaways</h2>
  </div>
  <ul class="footer-box-description">
  <li>Need <span class="accent-green"> more confidence </span> - fewer nerves</li>
    <li>Stephen and Terrence were very supportive - emphasized the value of <span class="accent-green"> listening and collaboration</span> in dev</li>
    <li>Balance speed with communication better</li>
    </ul>
</div>
</div>
</div>
</div>
  );
};

export default ProfilePage;
