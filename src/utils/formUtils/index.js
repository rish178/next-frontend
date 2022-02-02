import _ from 'lodash';
import { NumberInput, PasswordInput, TextField } from '../../components';

export const getFormInitialValues = (formConfig) =>
  _.reduce(
    _.entries(formConfig),
    (acc, item) => ({ ...acc, [item[0]]: item[1].initialValue }),
    {}
  );

export const getFormField = (element) => {
  const defaultProps = {
    key: element.name,
  };
  switch (element.type) {
    case 'text':
      return <TextField {...defaultProps} />;
    case 'number':
      return <NumberInput {...defaultProps} />;
    case 'password':
      return <PasswordInput {...defaultProps} />;
    default:
      break;
  }
};
