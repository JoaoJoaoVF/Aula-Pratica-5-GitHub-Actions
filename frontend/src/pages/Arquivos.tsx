import { useState, useEffect } from 'react';
import DashboardLayout from '../layouts/dashboard';
import 'chart.js/auto';
import NaoImplementado from './components/NaoImplementado';

export default function Arquivos() {

    return (
        <DashboardLayout >
            <NaoImplementado />
        </DashboardLayout>
    );
}