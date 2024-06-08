import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from '@mui/material/Button';

interface DetalhesAvaliacaoProps {
    disciplina: Row;
    onClose: () => void;
    onAprovar: (avaliacaoId: number) => void;
    onReprovar: (avaliacaoId: number) => void;
}

const DetalhesAvaliacao: React.FC<DetalhesAvaliacaoProps> = ({ disciplina, onClose, onAprovar, onReprovar }) => {
    const token = localStorage.getItem('token');
    const [avaliacaoAprovada, setAvaliacaoAprovada] = useState(false);

    const handleAprovar = () => {
        const api_url = `http://localhost:3000/aprovar-avaliacao/${disciplina.id}`;

        fetch(api_url, {
            method: 'POST',
            headers: {
                'Authorization': token,
                'Content-Type': 'application.json',
            },
        })
            .then((response) => {
                if (response.ok) {
                    setAvaliacaoAprovada(true);
                    onAprovar(disciplina.id); // Mova esta chamada após a confirmação de sucesso
                } else {
                    console.error('Erro ao aprovar avaliação:', response);
                }
            });
    };

    const handleReprovar = () => {
    };

    const handleClose = () => {
        if (avaliacaoAprovada) {
            window.location.reload(); // Recarrega a página se a avaliação estiver aprovada
        } else {
            onClose(); // Fecha o modal normalmente
        }
    };
    return (
        <Modal show={true} centered onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Detalhes da Avaliação</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className="text-black">Nome do Professor: {disciplina.professor_nome}</p>
                <p className="text-black">Matéria: {disciplina.professor_materia}</p>
                <p className="text-black">Nota: {disciplina.nota}</p>
                <p className="text-black">Departamento: {disciplina.departamento}</p>
                <p className="text-black">Comentário: {disciplina.avaliacao_texto}</p>
            </Modal.Body>
            <Modal.Footer>
                {avaliacaoAprovada ? (
                    <p className='text-dark'>Avaliação aprovada com sucesso!</p>
                ) : (
                    <Button
                        variant="contained"
                        style={{ backgroundColor: 'green', color: 'white' }}
                        onClick={handleAprovar}
                    >
                        Aprovar
                    </Button>
                )}
                {!avaliacaoAprovada && (
                    <Button
                        variant="contained"
                        style={{ backgroundColor: 'red', color: 'white' }}
                        onClick={handleReprovar}
                    >
                        Reprovar
                    </Button>
                )}
            </Modal.Footer>
        </Modal>
    );
};

export default DetalhesAvaliacao;
