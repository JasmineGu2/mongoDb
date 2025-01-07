'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './index.css';

const Landing = () => {
  const [selectedPerson, setSelectedPerson] = useState('');
  const messages = {
    brooke: (
      <>
        Hi <span className="accent-green">Brooke</span>! <br /> <br /> I really
        appreciate you <span className="accent-green">sharing your wins</span>—
        presenting on a large scale to design teams, mentorship at WIT, and
        exciting projects like building a code editor. <br /> <br />
        Hearing your <span className="accent-green">journey is inspiring</span>,
        especially seeing how the team has grown from just{' '}
        <span className="accent-green">
          you to a team of 3 and then to its current size
        </span>{' '}
        Would love to meet some of the brilliant minds at Mongo that you
        mentioned you <span className="accent-green">love being around :)</span>
      </>
    ),
    stephen: (
      <>
        Hi <span className="accent-green">Stephen</span>! <br /> <br /> Even
        though I was nervous and cut it close on time,{' '}
        <span className="accent-green">
          your support throughout the process
        </span>{' '}
        helped me code a solution in the end! Thank you for patiently sitting
        through my messy handwriting, especially early on a Monday morning PST.{' '}
        <br /> <br /> I also{' '}
        <span className="accent-green">appreciate your great callouts</span>
        —like reminding me about that missing space!
      </>
    ),
    terrence: (
      <>
        Hi <span className="accent-green">Terrence</span>! <br /> <br /> Thanks
        for being so <span className="accent-green">positive</span> while I
        coded. I really enjoyed hearing about the{' '}
        <span className="accent-green">
          differences between working on product vs. DS teams
        </span>{' '}
        and gained valuable insights into reusability, and projects like
        redesigning the nav bar. <br /> <br /> Your kind demeanor and insights{' '}
        <span className="accent-green">
          helped me feel confident during my next 2 calls.
        </span>{' '}
        I do, in fact, know how to make modals
      </>
    ),
    melissa: (
      <>
        Hi <span className="accent-green">Melissa</span>! <br /> <br /> I’ve
        never had a recruiter with such{' '}
        <span className="accent-green">amazing response times</span>—you
        answered{' '}
        <span className="accent-green">all my questions and concerns</span>,
        like sponsorship, so swiftly and even kept me informed about your
        travels. <br /> <br /> It was{' '}
        <span className="accent-green">really thoughtful of you</span> to ask me
        how it went afterward.
      </>
    ),
    brian: (
      <>
        Hi <span className="accent-green">Brian</span>,<br /> <br />
        <span className="accent-green">Thank you</span> for coordinating my
        schedule with the teams during the busy holiday season. Wishing you a
        <span className="accent-green"> Happy New Year! </span>
      </>
    ),
    default: (
      <>
        This is my <span className="accent-green">"Think Big, Go Far"</span>
        approach to an email follow-up—React, HTML, CSS style. <br /> <br />{' '}
        It’s my way of combining{' '}
        <span className="accent-green">
          creativity, learning, and appreciation
        </span>{' '}
        for this opportunity. Every button showcases an interaction. :)
      </>
    ),
  };

  const handleSelectChange = (event) => {
    setSelectedPerson(event.target.value);
  };

  return (
    <div className="landing">
      {/* Left Blob */}
      <motion.div
        className="blob-left"
        animate={{
          scale: [5, 5.2, 5],
          x: [-30, 0, -30],
          y: [0, -20, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <img src="./blob1.svg" alt="Blob 1" className="blob-image" />
      </motion.div>

      {/* Right Blob */}
      <motion.div
        className="blob-right"
        animate={{
          scale: [5, 5.3, 5],
          x: [30, 0, 30],
          y: [0, 20, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <img src="./blob2.svg" alt="Blob 2" className="blob-image" />
      </motion.div>
      {/* Landing Content */}
      <div className="landing-container">
        <div className="landing-image-container">
          <img
            src="./mongo.gif"
            alt="Profile Visual"
            className="landing-image"
          />
          <p className="image-source">
            Source:{' '}
            <a
              href="https://www.linkedin.com/pulse/mongodb-gaming-udit-sharma/"
              target="_blank"
              rel="noopener noreferrer"
            >
              This Post
            </a>
          </p>
        </div>
        <div className="landing-content">
          <motion.h1
            className="landing-title"
            initial={{ opacity: 0, y: -20 }} // Start with text hidden and slightly above
            animate={{ opacity: 1, y: 0 }} // Fade in and slide into position
            transition={{ duration: 0.8, ease: 'easeOut' }} // Adjust animation duration and easing
          >
            Thank You{' '}
            <select
              className="styled-select"
              onChange={handleSelectChange}
              value={selectedPerson}
              aria-label="Thank you selector"
            >
              <option value="">MongoDB</option>
              <option value="brooke">Brooke</option>
              <option value="stephen">Stephen</option>
              <option value="terrence">Terrence</option>
              <option value="melissa">Melissa</option>
              <option value="brian">Brian</option>
            </select>{' '}
            for everything!
          </motion.h1>
          <div className="card">
            <AnimatePresence mode="wait">
              <motion.p
                className="landing-box-description"
                key={selectedPerson || 'default'}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {selectedPerson ? messages[selectedPerson] : messages.default}
              </motion.p>
            </AnimatePresence>
          </div>
          <a
            href="https://www.linkedin.com/in/jasmine-gu-b2aa65201/"
            className="landing-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Let's stay in contact!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
