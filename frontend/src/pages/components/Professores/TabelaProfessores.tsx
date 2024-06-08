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
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import TablePagination from '@mui/material/TablePagination';

import FiltroProfessores from './FiltroProfessores';
import NovaAvaliacaoProfessor from './NovaAvaliacaoProfessor';
import DetalhesProfessores from './DetalhesProfessores';

interface Row {
    nomeProfessor: string;
    quantidadeAvaliacoes: number;
    notaMedia: number;
    departamento: string;
    comentarios: { texto: string; nota: number }[];
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

export default function TabelaProfessores() {
    const [rows, setRows] = useState<Row[]>([]);
    const [initialRows, setInitialRows] = useState<Row[]>([]);
    const [showDetails, setShowDetails] = useState<Row | null>(null);
    const [comentarios, setComentarios] = useState<string[]>([]);

    const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'ascending' | 'descending' }>({
        key: '',
        direction: 'ascending',
    });

    const handleTableRowClick = (disciplina: Row) => {
        setShowDetails(disciplina);
    };


    useEffect(() => {
        const token = localStorage.getItem('token');

        const fetchAvaliacoesPendentes = () => {
            fetch('http://localhost:3000/avaliacoes-aprovadas', {
                method: 'GET',
                headers: {
                    'Authorization': token,
                },
            })
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error('Erro ao buscar as avaliações aprovadas');
                    }
                })
                .then((data) => {
                    const professorMap = new Map<string, { notas: number[] }>();
                    const professorComentariosMap = new Map<string, string[]>();

                    data.forEach((item) => {
                        const nomeProfessor = item.professor_nome;
                        const nota = item.nota;
                        const comentario = item.avaliacao_texto;

                        if (!professorMap.has(nomeProfessor)) {
                            professorMap.set(nomeProfessor, { notas: [nota] });
                            professorComentariosMap.set(nomeProfessor, [comentario]);
                        } else {
                            professorMap.get(nomeProfessor)!.notas.push(nota);
                            professorComentariosMap.get(nomeProfessor)!.push(comentario);
                        }
                    });

                    const consolidatedRows: Row[] = [];
                    professorMap.forEach((value, key) => {
                        const quantidadeAvaliacoes = value.notas.length;
                        const notaMedia = value.notas.reduce((a, b) => a + b, 0) / quantidadeAvaliacoes;

                        const departamento = data.find((item) => item.professor_nome === key)?.departamento || 'Departamento Desconhecido';

                        const comentarios = professorComentariosMap.get(key) || [];
                        const professoresComNotas = comentarios.map((comentario, index) => ({
                            texto: comentario,
                            nota: value.notas[index], // Associando a nota ao comentário
                        }));

                        consolidatedRows.push({
                            nomeProfessor: key,
                            quantidadeAvaliacoes,
                            notaMedia,
                            departamento,
                            comentarios: professoresComNotas, // Usando o array com notas associadas
                        });
                    });

                    setRows(consolidatedRows);
                    setInitialRows(consolidatedRows);
                })
                .catch((error) => {
                    console.error(error);
                });
        };

        fetchAvaliacoesPendentes();
    }, []);


    const [openFilterDialog, setOpenFilterDialog] = useState(false);

    const handleOpenFilterDialog = () => {
        setOpenFilterDialog(true);
    };

    const handleCloseFilterDialog = () => {
        setOpenFilterDialog(false);
    };

    const handleApplyFilters = (filteredRows: Row[]) => {
        setRows(filteredRows);
        handleCloseFilterDialog();
    };

    const clearFilters = () => {
        setRows(initialRows);
        handleCloseFilterDialog();
    };

    const sortData = (key: string) => {
        let direction: 'ascending' | 'descending' = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });

        const sortedRows = [...rows].sort((a, b) => {
            if (key === 'nomeProfessor') {
                if (direction === 'ascending') {
                    return a.nomeProfessor.localeCompare(b.nomeProfessor);
                } else {
                    return b.nomeProfessor.localeCompare(a.nomeProfessor);
                }
            } else if (key === 'notaMedia') {
                if (direction === 'ascending') {
                    return a.notaMedia - b.notaMedia;
                } else {
                    return b.notaMedia - a.notaMedia;
                }
            } else if (key === 'quantidadeAvaliacoes') {
                if (direction === 'ascending') {
                    return a.quantidadeAvaliacoes - b.quantidadeAvaliacoes;
                } else {
                    return b.quantidadeAvaliacoes - a.quantidadeAvaliacoes;
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

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchQuery(query);

        const filteredRows = initialRows.filter((row) => {
            return (
                row.nomeProfessor.toLowerCase().includes(query.toLowerCase()) ||
                row.departamento.toLowerCase().includes(query.toLowerCase())
            );
        });

        setRows(filteredRows);
    };

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
            <div className='text-right mb-1'>
                <TextField
                    className='col-md-10'
                    id="filled-basic"
                    label="Pesquise por nome do professor ou departamento"
                    variant="outlined"
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                />
                <Button
                    variant="contained"
                    onClick={handleOpenFilterDialog}
                    className='col-md-2 mt-2'
                    style={{ backgroundColor: '#7988b7', color: 'white' }}
                >
                    Filtrar
                </Button>
            </div>
            <TableContainer component={Paper}>
                <Table aria-label="tabela-professores">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>
                                <TableSortLabel
                                    active={sortConfig.key === 'nomeProfessor'}
                                    direction={sortConfig.key === 'nomeProfessor' ? sortConfig.direction : 'ascending'}
                                    onClick={() => sortData('nomeProfessor')}
                                >
                                    Nome do Professor
                                </TableSortLabel>
                            </StyledTableCell>
                            <StyledTableCell>
                                <TableSortLabel
                                    active={sortConfig.key === 'notaMedia'}
                                    direction={sortConfig.key === 'notaMedia' ? sortConfig.direction : 'ascending'}
                                    onClick={() => sortData('notaMedia')}
                                >
                                    Nota média
                                </TableSortLabel>
                            </StyledTableCell>
                            <StyledTableCell>
                                <TableSortLabel
                                    active={sortConfig.key === 'quantidadeAvaliacoes'}
                                    direction={sortConfig.key === 'quantidadeAvaliacoes' ? sortConfig.direction : 'ascending'}
                                    onClick={() => sortData('quantidadeAvaliacoes')}
                                >
                                    Quantidade de avaliações
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
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rowsOnPage.map((row, index) => (
                            <StyledTableRow key={index} onClick={() => handleTableRowClick(row)}>
                                <TableCell>{row.nomeProfessor}</TableCell>
                                <TableCell>{row.notaMedia.toFixed(0)}</TableCell>
                                <TableCell>{row.quantidadeAvaliacoes}</TableCell>
                                <TableCell>{row.departamento}</TableCell>
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
            <FiltroProfessores
                open={openFilterDialog}
                onClose={handleCloseFilterDialog}
                onApplyFilters={handleApplyFilters}
                onClearFilters={clearFilters}
                rows={initialRows}
            />
            {showDetails && (
                <DetalhesProfessores
                    disciplina={showDetails}
                    comentarios={showDetails.comentarios}
                    notaMedia={showDetails.notaMedia}
                    onClose={() => setShowDetails(null)}
                /* Comentário aqui */
                />
            )}

            <NovaAvaliacaoProfessor rows={rows} />
        </div>
    );
}
