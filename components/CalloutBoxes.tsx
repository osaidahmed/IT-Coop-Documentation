import React from 'react';
import styles from './CalloutBoxes.module.css';

export function Tip({ title = 'Tip', children }) {
  return (
    <div className={styles['tip-box']}>
      <span className={styles['tip-icon']} role="img" aria-label="Tip">💡</span>
      <div>
        <span className={styles['tip-title']}>{title}</span>
        <div>{children}</div>
      </div>
    </div>
  );
}

export function Note({ title = 'Note', children }) {
  return (
    <div className={styles['note-box']}>
      <span className={styles['note-icon']} role="img" aria-label="Author's Note">📝</span>
      <div>
        <span className={styles['note-title']}>{title}</span>
        <div>{children}</div>
      </div>
    </div>
  );
}

export function Warning({ title = 'Warning', children }) {
  return (
    <div className={styles['warning-box']}>
      <span className={styles['warning-icon']} role="img" aria-label="Warning">⚠️</span>
      <div>
        <span className={styles['warning-title']}>{title}</span>
        <div>{children}</div>
      </div>
    </div>
  );
}
