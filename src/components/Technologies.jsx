import React, { useState } from 'react';
import Modals from './Modals';
import PropTypes from 'prop-types';

const Technologies = ({ user }) => {
  const userStrengths = user.strengths;
  const masterSkills = userStrengths.filter((experience) => experience.proficiency === "master");
  const expertSkills = userStrengths.filter((experience) => experience.proficiency === "expert");
  const proficientSkills = userStrengths.filter((experience) => experience.proficiency === "proficient");
  const noviceSkills = userStrengths.filter((experience) => experience.proficiency === "novice");
  const noXpSkills = userStrengths.filter((experience) => experience.proficiency === "no-experience-interested");

  const [selectedSkill, setSelectedSkill] = useState(null); // State to track the selected skill

   // Function to handle the button click and set the selected skill
   const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedSkill(null);
  };

  return (
    <div className='skills-cont'>
      <h2 className='mb-2'>Skills and interests:</h2>

      <div className='proficiencies'>
        <div className='d-flex profi-cont' >
        <img className="proficience-logo" src="data:image/png;base64,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" alt="" />
        <p className='mb-4 mt-4'>Master/Influencer</p>
        </div>
        <div className='proficiencies-cont'>
        {masterSkills.length > 0 ? (
          masterSkills.map((experience) => (
            <div key={experience.id}>
              <button onClick={() => handleSkillClick(experience)} className='skill-btn'>{experience.name}</button>
            </div>
          ))
        ) : (
          <p>[Empty]</p>
        )}
        </div>
      </div>

      <div className='proficiencies'>
      <div className='d-flex profi-cont' >
        <img className="proficience-logo" src="data:image/png;base64,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" alt="" />
        <p className='mb-4 mt-4'>Expert</p>
        </div>
        <div className='proficiencies-cont'>
        {expertSkills.length > 0 ? (
          expertSkills.map((experience) => (
            <div key={experience.id}>
              <button onClick={() => handleSkillClick(experience)} className='skill-btn'>{experience.name}</button>
            </div>
          ))
        ) : (
          <p>[Empty]</p>
        )}
        </div>
      </div>

      <div className='proficiencies'>
      <div className='d-flex profi-cont' >
        <img className="proficience-logo" src="data:image/png;base64,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" alt="" />
        <p className='mb-4 mt-4'>Proficient</p>
        </div>
        <div className='proficiencies-cont'>
        {proficientSkills.length > 0 ? (
          proficientSkills.map((experience) => (
            <div key={experience.id}>
              <button className='skill-btn' onClick={() => handleSkillClick(experience)}>{experience.name}</button>
            </div>
          ))
        ) : (
          <p>[Empty]</p>
        )}
        </div>
      </div>

      <div className='proficiencies'>
      <div className='d-flex profi-cont' >
        <img className="proficience-logo" src="data:image/png;base64,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" alt="" />
        <p className='mb-4 mt-4'>Begginer</p>
        </div>
        <div className='proficiencies-cont'>
        {noviceSkills.length > 0 ? (
          noviceSkills.map((experience) => (
            <div key={experience.id}>
              <button onClick={() => handleSkillClick(experience)} className='skill-btn'>{experience.name}</button>
            </div>
          ))
        ) : (
          <p>[Empty]</p>
        )}
        </div>
      </div>

      <div className='proficiencies'>
      <div className='d-flex profi-cont' >
        <img className="proficience-logo" src="data:image/png;base64,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" alt="" />
        <p className='mb-4 mt-4'>No experience but interested</p>
        </div>
        <div className='proficiencies-cont'>
        
        {noXpSkills.length > 0 ? (
          noXpSkills.map((experience) => (
            <div key={experience.id}>
              <button onClick={() => handleSkillClick(experience)} className='skill-btn'>{experience.name}</button>
            </div>
          ))
        ) : (
          <p>[Empty]</p>
        )}
        </div>
      </div>

      {/* Modal code */}
      {selectedSkill && (
        <Modals onClose={closeModal} title={selectedSkill.name} proficiency={selectedSkill.proficiency} recommendations={selectedSkill.recommendations}>
          {/* Add other details you want to display in the modal */}
        </Modals>
      )}


</div>

  );
};

    Technologies.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Technologies;