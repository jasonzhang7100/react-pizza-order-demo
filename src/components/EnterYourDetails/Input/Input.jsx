import styled from 'styled-components';
import PropTypes from 'prop-types';

import ErrorMsg from '../../ErrorMsg';

const LabelWithError = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Label = styled.div`
  height: 30px;
  font-size: 12px;
  font-weight: 700;
  line-height: 36px;
`;

const Required = styled.span`
  margin-left: 5px;  
  color: red;
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  outline: 0;
`;

const Input = ({ formDirty, detailItem, value, handleDetailChange }) => {

  const { label, required, validator } = detailItem;

  const errorMessage = validator.reduce((preData, currentData) => {
    const { method, message } = currentData;
    if (method(value)) {
      return preData;
    }
    return message;
  }, '');

  const onChange = event => {
    handleDetailChange(event.target.value);
  };

  return (
    <>
      <LabelWithError>
        <Label>
          {label}
          {required && (<Required>*</Required>)}
        </Label>
        {(errorMessage && formDirty) && (<ErrorMsg>{errorMessage}</ErrorMsg>)}
      </LabelWithError>

      <StyledInput
        value={value}
        onChange={onChange}
      />
    </>
  );
};

Input.propTypes = {
  formDirty: PropTypes.bool.isRequired,
  detailItem: PropTypes.object,
  handleDetailChange: PropTypes.func.isRequired,
}

export default Input;
