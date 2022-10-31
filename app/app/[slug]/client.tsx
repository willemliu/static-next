'use client';
import { getPretendApiData } from '@api/test';
import { DebugArea } from '@components/DebugArea';
import { useEffect, useState } from 'react';

function Client() {
    const [testData, setTestData] = useState(null);

    useEffect(() => {
        getPretendApiData().then((data) => {
            setTestData(data.date);
        });
    }, []);

    return <DebugArea value={testData} />;
}

export { Client };
