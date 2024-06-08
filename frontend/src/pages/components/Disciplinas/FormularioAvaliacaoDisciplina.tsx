import React, { useState } from 'react';

const FormularioAvaliacao = () => {
  const [formData, setFormData] = useState({
    nomeProfessor: '',
    disciplina: '',
    semestre: '',
    nota: 0,
    departamento: '',
    comentario: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="container-fluid">
      <div className="formulario-avaliacao">
        <div className="row">
          <div className="col-md-6">
            <div className="form-floating mb-1">
              <input
                type="text"
                className="form-control"
                id="nomeProfessor"
                name="nomeProfessor"
                placeholder="Nome do Professor"
                value={formData.nomeProfessor}
                onChange={handleChange}
                required
              />
              <label htmlFor="nomeProfessor">Nome do Professor</label>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-floating mb-1">
              <input
                type="text"
                className="form-control"
                id="disciplina"
                name="disciplina"
                placeholder="Disciplina"
                value={formData.disciplina}
                onChange={handleChange}
                required
              />
              <label htmlFor="disciplina">Disciplina</label>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="form-floating mb-1">
              <input
                type="text"
                className="form-control"
                id="semestre"
                name="semestre"
                placeholder="Semestre"
                value={formData.semestre}
                onChange={handleChange}
                required
              />
              <label htmlFor="semestre">Semestre</label>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-floating mb-1">
              <input
                type="number"
                className="form-control"
                id="nota"
                name="nota"
                placeholder="Nota"
                value={formData.nota}
                onChange={handleChange}
                min="0"
                max="5"
                required
              />
              <label htmlFor="nota">Nota</label>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="form-floating mb-1">
              <input
                type="text"
                className="form-control"
                id="departamento"
                name="departamento"
                placeholder="Departamento"
                value={formData.departamento}
                onChange={handleChange}
                required
              />
              <label htmlFor="departamento">Departamento</label>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-floating mb-1">
              <textarea
                className="form-control"
                id="comentario"
                name="comentario"
                placeholder="Comentário (Opcional)"
                value={formData.comentario}
                onChange={handleChange}
              />
              <label htmlFor="comentario">Comentário (Opcional)</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormularioAvaliacao;
