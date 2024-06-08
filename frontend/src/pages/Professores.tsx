import { useState, useEffect } from 'react';
import DashboardLayout from '../layouts/dashboard';
import TabelaProfessores from './components/Professores/TabelaProfessores'
import 'chart.js/auto';
import { useNavigate } from 'react-router';

export default function Professores() {

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        }
    }, [navigate]);

    return (
        <DashboardLayout >
            <TabelaProfessores />
        </DashboardLayout>
    );
}