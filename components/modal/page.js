"use client";
import React, { useState } from "react";

const Modal = ({ isErrorModal = false }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {/* Button to open modal */}
      <button onClick={toggleModal} className="question-button">
        <img src={isErrorModal ? "./error.svg" : "./question.svg"} alt="Question Icon" className="img" />
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button onClick={toggleModal} className="close-button">
              <img src="./close.svg" alt="Close Icon" className="img" />
            </button>
            <div className="modal-content">
              <div className="footer-box-content">
                <img
                  src={isErrorModal ? "./eye.png" : "./puzzle.png"}
                  alt="Icon"
                  className="icon"
                />
                <h2 className="footer-box-title">
                  {isErrorModal
                    ? "Notes: from a detail-oriented dev"
                    : "Why I made this?"}
                </h2>
                <ul className="footer-box-description">
                  {isErrorModal ? (
                    <>
                      <li>
                        I understand that, according to <span className="accent-green"> brand guidelines</span>, the
                        MongoDB logo should not be modified 
                        (I’m sorry—the GIF just fit too well!).
                      </li>
                      <li>
                      <span className="accent-green">Couldn't find</span> brand shape library to follow brand guidelines with shapes
                      </li>
                      <li>
                        Styled everything from scratch, so I took a <span className="accent-green">few creative liberties</span>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        Wanted to highlight and train{" "}
                        <span className="accent-green">
                          my passion for frontend dev
                        </span>
                      </li>
                      <li>
                        Felt like nerves affected my ability to showcase my dev
                        skills
                      </li>
                      <li>
                        Display{" "}
                        <span className="accent-green">excitement</span> towards
                        this role and MongoDB after a seamless interview
                        experience
                      </li>
                      <li>
                        Success = always{" "}
                        <span className="accent-green">
                          reflecting on my experiences :)
                        </span>
                      </li>
                    </>
                  )}
                </ul>
                <p className="footer-box-text">
  {isErrorModal ? (
    <>
      <span className="accent-green">Disclaimer:</span> I will follow all <span className="accent-green">design specifications 100%</span> on the job.
    </>
  ) : (
    <>
      <span className="accent-green">Disclaimer:</span> I’m not expecting this
      to change any results. Just wanted to build and show appreciation.
    </>
  )}
</p>
              </div>
            </div>
          </div>
        </div>
        )}
    </div>
  );
};

export default Modal;
