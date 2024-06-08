import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableSortLabel from '@mui/material/TableSortLabel';
import TablePagination from '@mui/material/TablePagination';
import DetalhesAvaliacao from './DetalhesAvaliacao';

interface Row {
    id: number;
    aluno_id: number;
    professor_nome: string;
    professor_materia: string;
    professor_universidade: string;
    semestre: string;
    nota: number;
    departamento: string;
    avaliacao_texto: string;
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#7988b7',
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export default function TabelaAprovacaoAvalicao() {
    const [rows, setRows] = useState<Row[]>([]);
    const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'ascending' | 'descending' }>({
        key: '',
        direction: 'ascending',
    });

    const [showDetails, setShowDetails] = useState<Row | null>(null);

    const handleTableRowClick = (disciplina: Row) => {
        setShowDetails(disciplina);
    };

    const sortData = (key: string) => {
        let direction: 'ascending' | 'descending' = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });

        const sortedRows = [...rows].sort((a, b) => {
            if (key === 'professor_nome') {
                if (direction === 'ascending') {
                    return a.professor_nome.localeCompare(b.professor_nome);
                } else {
                    return b.professor_nome.localeCompare(a.professor_nome);
                }
            } else if (key === 'professor_materia') { // Alterado de 'nota' para 'professor_materia'
                if (direction === 'ascending') {
                    return a.professor_materia.localeCompare(b.professor_materia);
                } else {
                    return b.professor_materia.localeCompare(a.professor_materia);
                }
            } else {
                if (direction === 'ascending') {
                    return a[key] > b[key] ? 1 : -1;
                } else {
                    return a[key] < b[key] ? 1 : -1;
                }
            }
        });

        setRows(sortedRows);
    };

    useEffect(() => {
        const token = localStorage.getItem('token');

        const fetchAvaliacoesPendentes = () => {
            fetch('http://localhost:3000/avaliacoes-pendentes', {
                method: 'GET',
                headers: {
                    'Authorization': token,
                },
            })
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error('Erro ao buscar as avaliações pendentes');
                    }
                })
                .then((data) => {
                    setRows(data);
                })
                .catch((error) => {
                    console.error(error);
                });
        };

        fetchAvaliacoesPendentes();
    }, []);

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const rowsOnPage = rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (
        <div className='container-fluid'>
            <TableContainer component={Paper}>
                <Table aria-label="tabela-professores">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>
                                <TableSortLabel
                                    active={sortConfig.key === 'professor_nome'}
                                    direction={sortConfig.key === 'professor_nome' ? sortConfig.direction : 'ascending'}
                                    onClick={() => sortData('professor_nome')}
                                >
                                    Nome do Professor
                                </TableSortLabel>
                            </StyledTableCell>
                            <StyledTableCell>
                                <TableSortLabel
                                    active={sortConfig.key === 'professor_materia'}
                                    direction={sortConfig.key === 'professor_materia' ? sortConfig.direction : 'ascending'}
                                    onClick={() => sortData('professor_materia')}
                                >
                                    Matéria
                                </TableSortLabel>
                            </StyledTableCell>
                            <StyledTableCell>
                                <TableSortLabel
                                    active={sortConfig.key === 'departamento'}
                                    direction={sortConfig.key === 'departamento' ? sortConfig.direction : 'ascending'}
                                    onClick={() => sortData('departamento')}
                                >
                                    Departamento
                                </TableSortLabel>
                            </StyledTableCell>
                            <StyledTableCell>
                                <TableSortLabel
                                    active={sortConfig.key === 'semestre'}
                                    direction={sortConfig.key === 'semestre' ? sortConfig.direction : 'ascending'}
                                    onClick={() => sortData('semestre')}
                                >
                                    Semestre
                                </TableSortLabel>
                            </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rowsOnPage.map((row, index) => (
                            <StyledTableRow key={index} onClick={() => handleTableRowClick(row)}>
                                <TableCell>{row.professor_nome}</TableCell>
                                <TableCell>{row.professor_materia}</TableCell>
                                <TableCell>{row.departamento}</TableCell>
                                <TableCell>{row.semestre}</TableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                style={{ backgroundColor: '#7988b7', color: 'white', display: 'flex', justifyContent: 'center' }}
            />
            {showDetails && (
                <DetalhesAvaliacao 
                disciplina={showDetails} 
                onClose={() => setShowDetails(null)} />
            )}
        </div>
    );
}
