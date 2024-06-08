import { useState, useEffect } from 'react';
import DashboardLayout from '../layouts/dashboard';
import TabelaAprovacaoAvalicao from './components/Moderacao/TabelaAprovacaoAvalicao'
import 'chart.js/auto';
import { useNavigate } from 'react-router';

export default function AprovacaoAvalicao() {

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        }
    }, [navigate]);

    return (
        <DashboardLayout >
            <TabelaAprovacaoAvalicao />
        </DashboardLayout>
    );
}