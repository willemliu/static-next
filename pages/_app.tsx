import React, { useState } from 'react';
import Router from 'next/router';
import { Menu } from '../src/components/Menu';
import { Footer } from '../src/components/Footer';
import { Spinner } from '../src/components/Spinner';

export default function App({ Component, pageProps }) {
    const [loading, setLoading] = useState(false);

    Router.events.on('routeChangeStart', () => {
        setLoading(true);
    });
    Router.events.on('routeChangeComplete', () => {
        setLoading(false);
    });

    return (
        <>
            <Menu />
            <Component {...pageProps} />
            <Footer />
            {loading && <Spinner />}
        </>
    );
}
