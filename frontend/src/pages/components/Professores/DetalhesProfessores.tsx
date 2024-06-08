import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

interface DetalhesProfessoresProps {
    disciplina: Row;
    comentarios: { texto: string; nota: number }[];
    notaMedia: number;
    onClose: () => void;
}

const DetalhesProfessores: React.FC<DetalhesProfessoresProps> = ({ disciplina, comentarios, notaMedia, onClose }) => {
    const comentarioStyle = {
        maxWidth: '100%',
        maxHeight: '200px',
        overflow: 'auto', 
        whiteSpace: 'normal', 
    };

    return (
        <Modal show={true} onHide={onClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Detalhes do Professor</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className="text-black">Nome do Professor: {disciplina.nomeProfessor}</p>
                <p className="text-black">Quantidade de Avaliações: {disciplina.quantidadeAvaliacoes}</p>
                <p className="text-black">Nota Média: {notaMedia}</p>
                <p className="text-black">Departamento: {disciplina.departamento}</p>
                {comentarios && comentarios.length > 0 && (
                    <div className="border-t border-gray-300 mt-3 pt-3">
                        <p className="font-weight-bold text-black">Comentários:</p>
                        <ul className="list-disc pl-4">
                            {comentarios.map((comentario, index) => (
                                <li key={index} className="text-black flex mb-2">
                                    <div className="mr-2" style={comentarioStyle}>
                                        <span className="font-weight-bold text-#173FBC">Texto:</span> {comentario.texto}
                                    </div>
                                    <div>
                                        <span className="font-weight-bold text-#173FBC">Nota:</span> {comentario.nota}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Fechar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DetalhesProfessores;
