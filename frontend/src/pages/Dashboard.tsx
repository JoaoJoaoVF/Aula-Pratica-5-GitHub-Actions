import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import DashboardLayout from '../layouts/dashboard';
import Cards from './components/CardsDashboard'
import 'chart.js/auto';

export default function Dashboard() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        }
    }, [navigate]);

    return (
        <DashboardLayout>
            <Cards />
        </DashboardLayout>
    );
}
