import React, { FC } from 'react';
import classNames from 'classnames';

import { TypographyProps } from './models';
import { variantToComponentMapping } from './utils';

import './Typography.scss';

const Typography: FC<TypographyProps> = ({ variant, bold, align, grey, children, customClass }) => {
    
    const Component: string | React.ComponentClass<any, any> | React.FunctionComponent<any> = variant || variantToComponentMapping[variant];

    const componentClasses = classNames('typography', customClass, {
        [`typography--${variant}`]: variant,
        [`typography--${align}`]: align,
        'typography--bold': bold,
        'typography--grey': grey,
    });

    return (
        <Component
          className={componentClasses}
        >
          {children}
        </Component>
      );
}

export default Typography