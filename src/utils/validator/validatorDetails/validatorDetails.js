import { isNotEmpty, isEmail, isIdentical, isPostcode, isMobile } from '../validator';

export const validatorDetails = {
  name: [
    {
      method: isNotEmpty,
      message: 'Name is required'
    }
  ],

  email: [
    {
      method: isEmail,
      message: 'Email is invalid'
    },
    {
      method: isNotEmpty,
      message: 'Email is required'
    }
  ],

  confirmEmail: (targetValue) => [
    {
      method: value => isIdentical(value, targetValue),
      message: 'Not same as Email'
    },
    {
      method: isNotEmpty,
      message: 'Confirm is required'
    }
  ],

  address: [
    {
      method: isNotEmpty,
      message: 'Address is required'
    }
  ],

  postcode: [
    {
      method: isPostcode,
      message: 'Postcode is invalid'
    },
    {
      method: isNotEmpty,
      message: 'Postcode is required'
    }
  ],

  mobile: [
    {
      method: isMobile,
      message: 'Mobile is invalid'
    },
    {
      method: isNotEmpty,
      message: 'Mobile is required'
    }
  ]
};

const validateAllDetails = details => {
  let result = true;

  Object.keys(validatorDetails).forEach(key => {
    let validator = validatorDetails[key];
    if (key === 'confirmEmail') {
      validator = validator(details.email);
    };
    validator.forEach(({ method }) => {
      if (method(details[key])) {
        return;
      }
      result = false;
    });
  });

  return result;
};

export default validateAllDetails;
