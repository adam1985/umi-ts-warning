import React from 'react';

import { MyComponent } from '@/components';

import styles from './index.less';

export default () => {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <MyComponent title="标题" />
    </div>
  );
};
