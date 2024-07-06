const validateInput = ({
    referrerName,
    referrerEmail,
    referrerPhone,
    refereeName,
    refereeEmail,
    courseName,
  }) => {
    const errors = {};
  
    if (!referrerName) errors.referrerName = "Referrer name is required";
    if (!referrerEmail) errors.referrerEmail = "Referrer email is required";
    if (!referrerPhone) errors.referrerPhone = "Referrer phone is required";
    if (!refereeName) errors.refereeName = "Referee name is required";
    if (!refereeEmail) errors.refereeEmail = "Referee email is required";
    if (!courseName) errors.courseName = "Course name is required";
  
    return errors;
  };
  
  module.exports = { validateInput };
  