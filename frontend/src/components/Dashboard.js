import React, { useEffect, useState } from 'react';

const Dashboard = () => {
    const [cases, setCases] = useState([]);
    const [commission, setCommission] = useState(0);
    const [payouts, setPayouts] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const casesResponse = await fetch('/api/cases');
                const commissionResponse = await fetch('/api/commission');
                const payoutsResponse = await fetch('/api/payouts');

                const casesData = await casesResponse.json();
                const commissionData = await commissionResponse.json();
                const payoutsData = await payoutsResponse.json();

                setCases(casesData);
                setCommission(commissionData.total);
                setPayouts(payoutsData.total);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            <h2>Cases</h2>
            <ul>
                {cases.map((caseItem) => (
                    <li key={caseItem.id}>{caseItem.title}</li>
                ))}
            </ul>
            <h2>Commission</h2>
            <p>{commission}</p>
            <h2>Payouts</h2>
            <p>{payouts}</p>
        </div>
    );
};

export default Dashboard;