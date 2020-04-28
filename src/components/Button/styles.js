import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { $brandColorPrimary, $brandColorSecondary } from '../../styles/variables';

const primary = color => {
  return {
    width: '100%',
    '&:hover': { background: color },
    height: '56px',
    borderRadius: '100px',
    backgroundColor: color,
    color: '#ffffff',
    marginBottom: '16px',
    boxShadow: 'none',
  };
};
const secondary = color => {
  return {
    width: '100%',
    '&:hover': { background: '#ffffff' },
    height: '56px',
    borderRadius: '100px',
    backgroundColor: '#ffffff',
    color: `${color}`,
    border: `1px solid ${color}`,
    marginBottom: '16px',
    boxShadow: 'none',
  };
};

const third = color => {
  return {
    width: '100%',
    '&:hover': { background: '#039F5D' },
    height: '56px',
    borderRadius: '100px',
    backgroundColor: `${$brandColorSecondary}`,
    color: `#FFF`,
    marginBottom: '16px',
    boxShadow: 'none',
  };
}

const styledButton = props => {
  const isBackground = props.background || $brandColorPrimary;

  if(props.theme === 'primary'){
    return primary(isBackground)
  } else if(props.theme === 'secondary'){
    return secondary(isBackground)
  } else if (props.theme === 'third') {
    return third(isBackground)
  }
};
export const ButtonText = withStyles({
  root: styledButton,
})(Button);
