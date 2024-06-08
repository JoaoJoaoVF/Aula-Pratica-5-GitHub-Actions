import { useState, useEffect } from 'react';
import DashboardLayout from '../layouts/dashboard';
import NaoImplementado from './components/NaoImplementado'
import 'chart.js/auto';
import { useNavigate } from 'react-router';

export default function Foruns() {

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        }
    }, [navigate]);

    return (
        <DashboardLayout >
            <NaoImplementado />
        </DashboardLayout>
    );
}