import React from "react";
import styles from "./Footer.module.scss";

function Footer() {
    return (
        <footer className={styles.footer}>
            <a
                href="https://github.com/willemliu/static-next"
                target="_blank"
                rel="noopener noreferrer"
                title="Github"
            >
                <img src="/images/github.svg" alt="Github" />
            </a>
        </footer>
    );
}

export { Footer };
