import PropTypes from 'prop-types';
import cn from 'classnames';

import s from './Alert.module.scss';


export const Alert = ({
  variant,
  outlined = false,
  textCenter = false,
  children,
}) => {
  return (
    <p
      className={cn(s.alert, s[variant], {
        [s.outlined]: outlined,
        [s.textCenter]: textCenter,
      })}
    >
      {/* "alert success outlined? textCenter?" */}
      😍{children}
    </p>
  );
};

/* <p className={`alert 
        ${variant} 
        ${outlined ? "outlined" : ""}
        ${textCenter ? "textCenter" : ""}
    `}>
  {children}
</p> */

Alert.propTypes = {
  variant: PropTypes.string.isRequired,
  outlined: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  textCenter: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  children: PropTypes.node,
};
