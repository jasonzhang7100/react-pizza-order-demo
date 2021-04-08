import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import SectionLayout from '../SectionLayout';
import Input from './Input';
import { validatorDetails } from '../../utils/validator/validatorDetails';

const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Item = styled.div`
  width: calc(100%/3 - 10px);
  margin-bottom: 10px; 
`;

class EnterYourDetails extends React.Component {

  static propTypes = {
    formDirty: PropTypes.bool.isRequired,
    details: PropTypes.object,
    handleDetailChange: PropTypes.func.isRequired
  };

  render() {
    const { formDirty, details, handleDetailChange } = this.props;
    const formField = {
      name: {
        label: 'NAME',
        required: true,
        validator: validatorDetails.name
      },
      email: {
        label: 'EMAIL',
        required: true,
        validator: validatorDetails.email
      },
      confirmEmail: {
        label: 'CONFIRM EMAIL',
        required: true,
        validator: validatorDetails.confirmEmail(details.email)
      },
      address: {
        label: 'ADDRESS',
        required: true,
        validator: validatorDetails.address
      },
      postcode: {
        label: 'POSTCODE',
        required: true,
        validator: validatorDetails.postcode
      },
      mobile: {
        label: 'MOBILE',
        required: true,
        validator: validatorDetails.mobile
      }
    };

    return (
      <SectionLayout
        title="Enter your details"
      >
        <Layout>
          {
            Object.keys(formField).map(key => {
              const detailItem = formField[key];
              return (
                <Item key={key}>
                  <Input
                    formDirty={formDirty}
                    detailItem={detailItem}
                    value={details[key] || ''}
                    handleDetailChange={value => handleDetailChange(key, value)}
                  />
                </Item>
              );
            })
          }
        </Layout>
      </SectionLayout>
    );
  };
};

export default EnterYourDetails;
