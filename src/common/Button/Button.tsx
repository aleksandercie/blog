import React, { FC } from 'react';
import classNames from 'classnames';
import { ButtonProps } from './models';
import './Button.scss';

const Button: FC<ButtonProps> = ({ variant, customClass, children, onClick }) => {
    
    const buttonClasses = classNames('button', customClass, {
        [`button--${variant}`]: variant,
    })
    
    return (
        <button className={buttonClasses} onClick={onClick}>{children}</button>
    )
}

export default Button