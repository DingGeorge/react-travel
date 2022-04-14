import styles from './Footer.module.scss';
import React from 'react';

export const Footer: React.FC = (props) => {
    return (
      <div className={styles.footer}>
          <span>版权所有 @React 旅游网</span>
      </div>
    )
}
