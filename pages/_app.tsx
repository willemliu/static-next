import React from "react";
import { Menu } from "../src/components/Menu";
import { Footer } from "../src/components/Footer";
export default function App({ Component, pageProps }) {
    return (
        <>
            <Menu />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}
