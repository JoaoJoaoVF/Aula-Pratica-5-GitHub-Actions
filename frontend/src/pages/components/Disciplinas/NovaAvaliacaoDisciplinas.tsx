import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

import FormularioAvaliacaoDisciplina from './FormularioAvaliacaoDisciplina';

const NovaAvaliacaoProfessor = () => {
    const [open, setOpen] = useState(false);

    const abrirFormulario = () => {
        setOpen(true);
    };

    const fecharFormulario = () => {
        setOpen(false);
    };

    const handleEnviarClick = () => {

    };

    return (
        <div className="nova-avaliacao-professor">
            <Button onClick={abrirFormulario}>Nova Avaliação</Button>

            {open && (
                <Dialog
                    open={open}
                    onClose={fecharFormulario}
                    aria-labelledby="modal-dialog-title"
                    aria-describedby="modal-dialog-description"
                >
                    <DialogTitle id="modal-dialog-title">
                        Formulário de Avaliação
                    </DialogTitle>
                    <DialogContent id="modal-dialog-description">
                        <FormularioAvaliacaoDisciplina />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={fecharFormulario}>Fechar</Button>
                        <Button onClick={handleEnviarClick}>Enviar</Button>
                    </DialogActions>
                </Dialog>
            )}
        </div>
    );
};

export default NovaAvaliacaoProfessor;
