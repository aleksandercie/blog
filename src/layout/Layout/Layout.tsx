import React, { FC } from 'react';
import { LayoutProps } from './models';
import './Layout.scss';


const Layout: FC<LayoutProps> = ({ children }) => (
    <>
        {children}
    </>
)

export default Layout 