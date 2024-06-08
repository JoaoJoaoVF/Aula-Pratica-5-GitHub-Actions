import { useState, useEffect } from 'react';
import DashboardLayout from '../layouts/dashboard';
import TabelaDisciplinas from './components/Disciplinas/TabelaDisciplinas'
import 'chart.js/auto';
import { useNavigate } from 'react-router';

export default function Disciplinas() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        }
    }, [navigate]);


    return (
        <DashboardLayout >
            <TabelaDisciplinas />
        </DashboardLayout>
    );
}