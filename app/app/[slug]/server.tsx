'use server';

interface Props {
    date: string;
}

function Server(props: Props) {
    return <>{props.date}</>;
}

export { Server };
