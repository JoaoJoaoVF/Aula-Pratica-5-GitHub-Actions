import React, { useState } from 'react';

const FormularioAvaliacaoProfessor = () => {
  const [formData, setFormData] = useState({
    nomeProfessor: '',
    disciplina: '',
    semestre: '',
    nota: 0,
    departamento: '',
    comentario: '',
    universidade: '',
  });

  const [mensagem, setMensagem] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const avaliacaoData = {
      professorNome: formData.nomeProfessor,
      professorMateria: formData.disciplina,
      professorUniversidade: formData.universidade,
      semestre: formData.semestre,
      nota: formData.nota,
      departamento: formData.departamento,
      avaliacaoTexto: formData.comentario,
    };

    console.log('Dados da avaliação a serem enviados:', avaliacaoData);
    const token = localStorage.getItem('token');

    fetch('http://localhost:3000/avaliar-professor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      },
      body: JSON.stringify(avaliacaoData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Resposta da API:', data);
        if (data.mensagem === 'Avaliação cadastrada com sucesso e aguardando aprovação') {
          setMensagem('Avaliação enviada com sucesso');
        } else {
          setMensagem('Erro ao enviar a avaliação');
        }
      })
      .catch((error) => {
        console.error('Erro na solicitação:', error);
        setMensagem('Erro ao enviar a avaliação');
      });
  };

  return (
    <div className="container-fluid">
      <div className="formulario-avaliacao">
        {mensagem && (
          <div className="alert alert-success" role="alert">
            {mensagem}
          </div>
        )}
        <form onSubmit={handleSubmit}>
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
                <input
                  type="text"
                  className="form-control"
                  id="universidade"
                  name="universidade"
                  placeholder="Universidade"
                  value={formData.universidade}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="universidade">Universidade</label>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="form-floating mb-1">
                <textarea
                  className="form-control"
                  id="comentario"
                  name="comentario"
                  placeholder="Comentário"
                  value={formData.comentario}
                  onChange={handleChange}
                />
                <label htmlFor="comentario">Comentário</label>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 text-center">
              <button type="submit" className="btn btn-primary">
                Enviar Avaliação
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormularioAvaliacaoProfessor;