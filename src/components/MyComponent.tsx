import React, { SFC } from 'react';

export interface IProps {
  title: string;
}

const MyComponent: SFC<IProps> = ({ title }) => <>{title}</>;

export default MyComponent;
