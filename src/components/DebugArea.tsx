import React from "react";
import styles from "./DebugArea.module.scss";

interface Props {
    value: string;
}

function DebugArea(props: Props) {
    return (
        <section className={styles.debugArea}>
            <label htmlFor="debugArea">3rd party API perf test</label>
            <textarea
                id="debugArea"
                defaultValue={props.value}
                disabled={true}
            />
        </section>
    );
}

export { DebugArea };
