import React from "react";
import styles from "./Footer.module.scss";

function Footer() {
    return (
        <footer className={styles.footer}>
            <a
                href="https://github.com/willemliu/static-next"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src="/images/github.svg" />
            </a>
        </footer>
    );
}

export { Footer };
