import React, { FC } from 'react';
import { ContainerProps } from './models';

const Container: FC<ContainerProps> = ({ customClass, element, children }) => {

    const Tag = element || 'div';

    return (
        <Tag className={customClass}>{children}</Tag>
    )
}

export default Container