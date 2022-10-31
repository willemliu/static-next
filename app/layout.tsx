import { Footer } from '@components/Footer';
import { Menu } from '@components/Menu';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <head></head>
            <body>
                <Menu />

                {children}

                <Footer />
            </body>
        </html>
    );
}
