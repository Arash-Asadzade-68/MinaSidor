import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import cs from 'classnames';

class CPButton extends React.Component {
  state = {};

  componentDidMount() {}

  render() {
    const {
      onClick,
      icon,
      type,
      text,
      className,
      disabled,
      fillIcon,
      children,
      ref,
      id
    } = this.props;
    const Icon = icon;
    return (
      <button
        type={type}
        id={id}
        onClick={onClick}
        className={cs(className, styles.button)}
        disabled={disabled}
        ref={ref}
      >
        {text && text}
        {icon && <Icon fill={fillIcon} />}
        {children && children}
      </button>
    );
  }
}

export default CPButton;

CPButton.propTypes = {
  onClick: PropTypes.func,
  icon: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  text: PropTypes.string,
  fillIcon: PropTypes.string,
  disabled: PropTypes.bool
};

CPButton.defaultProps = {
  onClick: () => {},
  icon: "",
  type: "",
  className: "",
  text: "",
  fillIcon: "",
  disabled: false
};
