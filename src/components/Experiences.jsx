import React from 'react';
import PropTypes from 'prop-types';

const Experiences = ({ user, skill }) => {
  const userExperience = user.experiences;

  // Filter experiences based on the relation with the selected skill
  const filteredExperiences = userExperience.filter((experience) => {
    // Add a check to ensure that the 'skills' property exists and is an array
    if (experience.skills && Array.isArray(experience.skills)) {
      // Find the selected skill in the experience's skills array
      return experience.skills.some((expSkill) => expSkill.name === skill.name);
    }
    return false; // Exclude experiences without skills or non-array skills
  });

  return (
    <div>
      <h2>{`${user.person?.name}'s experiences related to ${skill.name}:`}</h2>
      {filteredExperiences.length > 0 ? (
        filteredExperiences.map((job) => (
          <div key={job.id}>
            <p>{job.name}</p>
            <p>{job.organizations[0].name}</p>
            <p>{job.fromMonth} {job.fromYear} - {job.toMonth ? job.toMonth : "Now"} {job.toYear}</p>
          </div>
        ))
      ) : (
        <h3>[No matching experiences found]</h3>
      )}
    </div>
  );
};

Experiences.propTypes = {
  user: PropTypes.object.isRequired,
  skill: PropTypes.object.isRequired,
};

export default Experiences;