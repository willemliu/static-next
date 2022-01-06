import React from 'react';
import styles from './Spinner.module.scss';

function Spinner() {
    return (
        <section className={styles.container}>
            <div className={styles.ellipsis}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </section>
    );
}

export { Spinner };
