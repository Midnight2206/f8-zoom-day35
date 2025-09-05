import { Link, NavLink } from "react-router-dom";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import styles from "./Button.module.scss";
import PropTypes from "prop-types";
const cx = classNames.bind(styles);
function Button({
  children,
  to,
  href,
  bordered,
  rounded,
  primary,
  loading,
  onClick,
  onChangeActive,
  onChangePending,
  size = "medium",
  navLink,
  leftIcon,
  rightIcon,
  disabled = false,
  className = "",
  ...passProps
}) {
  const baseClasses = cx("btn", size, {
    disabled: disabled,
    bordered: bordered,
    rounded: rounded,
    pending: loading,
    primary: primary,
  });
  const handleClick = (e) => {
    if (disabled || loading) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    onClick?.(e);
  };
  const handleChangeActive = (isActive) => {
    onChangeActive?.(isActive);
  };
  const handleChangePending = (isPending) => {
    onChangePending?.(isPending);
  };
  const getNavLinkClass = ({ isActive, isPending }) => {
    const navLinkClassesObj = {};
    if (navLink) {
      navLinkClassesObj.active = isActive;
      navLinkClassesObj.pending = isPending;
    }
    return `${cx(navLinkClassesObj)}`;
  };
  if (href) {
    return (
      <a
        {...passProps}
        onClick={handleClick}
        href={href}
        className={`${baseClasses} ${className}`}
      >
        <span className={cx("children")}>
          {leftIcon && (
            <FontAwesomeIcon icon={leftIcon} className={cx("left-icon")} />
          )}
          {children}
          {rightIcon && (
            <FontAwesomeIcon icon={rightIcon} className={cx("right-icon")} />
          )}
        </span>
        {loading && (
          <FontAwesomeIcon icon={faSpinner} className={cx("pending-icon")} />
        )}
      </a>
    );
  }
  if (to) {
    if (navLink) {
      return (
        <NavLink
          {...passProps}
          onClick={handleClick}
          to={to}
          className={(navProps) =>
            `${getNavLinkClass(navProps)} ${baseClasses} ${className}`
          }
        >
          {({ isActive, isPending }) => {
            handleChangeActive(isActive);
            handleChangePending(isPending);
            return (
              <>
                <span className={cx("children")}>
                  {leftIcon && (
                    <FontAwesomeIcon
                      icon={leftIcon}
                      className={cx("left-icon")}
                    />
                  )}
                  {children}
                  {rightIcon && (
                    <FontAwesomeIcon
                      icon={rightIcon}
                      className={cx("right-icon")}
                    />
                  )}
                </span>
                <FontAwesomeIcon
                  icon={faSpinner}
                  className={cx("pending-icon")}
                />
              </>
            );
          }}
        </NavLink>
      );
    } else {
      return (
        <Link
          {...passProps}
          onClick={handleClick}
          to={to}
          className={`${baseClasses} ${className}`}
        >
          <span className={cx("children")}>
            {leftIcon && (
              <FontAwesomeIcon icon={leftIcon} className={cx("left-icon")} />
            )}
            {children}
            {rightIcon && (
              <FontAwesomeIcon icon={rightIcon} className={cx("right-icon")} />
            )}
          </span>
          {loading && (
            <FontAwesomeIcon icon={faSpinner} className={cx("pending-icon")} />
          )}
        </Link>
      );
    }
  } else {
    return (
      <button
        {...passProps}
        onClick={handleClick}
        className={`${baseClasses} ${className}`}
      >
        <span className={cx("children")}>
          {leftIcon && (
            <FontAwesomeIcon icon={leftIcon} className={cx("left-icon icon")} />
          )}
          {children}
          {rightIcon && (
            <FontAwesomeIcon
              icon={rightIcon}
              className={cx("right-icon icon")}
            />
          )}
        </span>
        {loading && (
          <FontAwesomeIcon icon={faSpinner} className={cx("pending-icon")} />
        )}
      </button>
    );
  }
}
Button.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  href: PropTypes.string,
  navLink: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  bordered: PropTypes.bool,
  rounded: PropTypes.bool,
  primary: PropTypes.bool,
  loading: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  onClick: PropTypes.func,
  onChangeActive: PropTypes.func,
  onChangePending: PropTypes.func,
  leftIcon: PropTypes.object,
  rightIcon: PropTypes.object,
};
export default Button;
