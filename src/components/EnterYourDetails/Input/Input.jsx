import styled from 'styled-components';
import PropTypes from 'prop-types';

const Layout = styled.div`
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

const Error = styled.span`
  margin-left: 30px;  
  color: red;
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  outline: 0;
`;

const Input = ({ formDirty, label, required, value, validator, handleDetailChange }) => {

  const errorMessage = validator.reduce((preData, currentData) => {
    const { method, message } = currentData;
    if (method(value)) {
      return preData;
    }
    return message;
  }, '');

  const onChange = (event) => {
    handleDetailChange(event.target.value);
  };

  return (
    <Layout>
      <Label>
        {label}
        {required && (<Required>*</Required>)}
        {(errorMessage && formDirty) && (<Error>{errorMessage}</Error>)}
      </Label>
      <StyledInput
        value={value}
        onChange={onChange}
      />
    </Layout>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  validator: PropTypes.array.isRequired,
  handleDetailChange: PropTypes.func.isRequired,
}

export default Input;


