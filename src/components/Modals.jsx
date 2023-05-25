import React from 'react';

const Modals = ({ onClose, children, title, proficiency, recommendations }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h3>{title}</h3>
        <p>Proficiency: {proficiency}</p>
        <p>Recommendations: {recommendations}</p>
        <br/>
        {children}
        {/* Include a close button or functionality to close the modal */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modals;