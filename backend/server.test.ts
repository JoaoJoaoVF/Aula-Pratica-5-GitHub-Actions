
import app from './server';

const request = require('supertest');

let server: any;

const userData = {
  nome: 'Teste',
  email: 'teste@teste.com',
  senha: '123456',
  curso: 'Sistemas de Informação',
  universidade: 'Universidade Federal de Minas Gerais'
}; 

beforeAll(() => {
  server = app.listen();
});

afterAll(() => {
  return new Promise<void>((resolve, reject) => {
    server.close((err: Error | null) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
});

describe('Testes da rota de registro', () => {
  it('Deve responder com status 200 para a rota de registro', async () => {
    const res = await request(app).post('/registro').send(userData);
    expect(res.statusCode).toEqual(200);
  });

  it('Deve responder com status 400 se o email for inválido', async () => {
    const res = await request(app)
      .post('/registro')
      .send({ ...userData, email: 'email_invalido' });
    expect(res.statusCode).toEqual(400);
  });

  it('Deve responder com status 409 se o email já estiver cadastrado', async () => {
    await request(app).post('/registro').send(userData);

    const res = await request(app).post('/registro').send(userData);
    expect(res.statusCode).toEqual(409);
  });
});

describe('Testes da rota de login', () => {
  it('Deve responder com status 200 para a rota de login', async () => {
    const res = await request(app).post('/login').send(userData);
    expect(res.statusCode).toEqual(200);
  });

  it('Deve responder com status 401 se as credenciais forem inválidas', async () => {
    const res = await request(app)
      .post('/login')
      .send({ ...userData, senha: 'senha_incorreta' });
    expect(res.statusCode).toEqual(400);
  });

  it('Deve responder com status 401 se o email não estiver cadastrado', async () => {
    const res = await request(app)
      .post('/login')
      .send({ ...userData, email: 'email_nao_cadastrado@test.com' });
    expect(res.statusCode).toEqual(400);
  });
});

describe('Testes da rota de avaliar professor', () => {
  it('Deve responder com status 200 para a rota de avaliar professor', async () => {
    const res = await request(app)
      .post('/avaliar-professor')
      .set('Authorization', `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhQGEuY29tIiwiaWF0IjoxNzE3ODczMjIxLCJleHAiOjE3MTc4NzY4MjF9.7Y6hXCDjgvzPESRee0rYNpmu83VyQ6ahdzzvxPT_Js8`)
      .send({
        professorNome: 'Professor Teste',
        professorMateria: 'Teste de Software',
        professorUniversidade: 'Universidade Teste',
        semestre: '2021/1',
        nota: 5,
        departamento: 'Departamento de Teste',
        avaliacaoTexto: 'Professor muito bom'
      });
    expect(res.statusCode).toEqual(200);
  });

  it('Deve responder com status 400 se algum campo estiver faltando', async () => {
    const res = await request(app)
      .post('/avaliar-professor')
      .send({
        professorNome: 'Professor Teste',
        professorMateria: 'Teste de Software',
        professorUniversidade: 'Universidade Teste',
        semestre: '2021/1',
        nota: 5,
        departamento: 'Departamento de Teste'
      });
    expect(res.statusCode).toEqual(400);
  });

  it('Deve responder com status 400 se a nota for inválida', async () => {
    const res = await request(app)
      .post('/avaliar-professor')
      .set('Authorization', `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhQGEuY29tIiwiaWF0IjoxNzE3ODczMjIxLCJleHAiOjE3MTc4NzY4MjF9.7Y6hXCDjgvzPESRee0rYNpmu83VyQ6ahdzzvxPT_Js8`)
      .send({
        professorNome: 'Professor Teste',
        professorMateria: 'Teste de Software',
        professorUniversidade: 'Universidade Teste',
        semestre: '2021/1',
        nota: 6,
        departamento: 'Departamento de Teste',
        avaliacaoTexto: 'Professor muito bom'
      });
    expect(res.statusCode).toEqual(400);
  });

  it('Deve responder com status 401 se o token não for fornecido', async () => {
    const res = await request(app)
      .post('/avaliar-professor')
      .send({
        professorNome: 'Professor Teste',
        professorMateria: 'Teste de Software',
        professorUniversidade: 'Universidade Teste',
        semestre: '2021/1',
        nota: 5,
        departamento: 'Departamento de Teste',
        avaliacaoTexto: 'Professor muito bom'
      });
    expect(res.statusCode).toEqual(401);
  });

  it('Deve responder com status 401 se o token for inválido', async () => {
    const res = await request(app)
      .post('/avaliar-professor')
      .set('Authorization', 'token_invalido')
      .send({
        professorNome: 'Professor Teste',
        professorMateria: 'Teste de Software',
        professorUniversidade: 'Universidade Teste',
        semestre: '2021/1',
        nota: 5,
        departamento: 'Departamento de Teste',
        avaliacaoTexto: 'Professor muito bom'
      });
    expect(res.statusCode).toEqual(401);
  });
});

describe('Teste da rota de avaliações aprovadas', () => {
  it('Deve responder com status 200 para a rota de avaliações aprovadas', async () => {
    const res = await request(app).get('/avaliacoes-aprovadas');
    expect(res.statusCode).toEqual(200);
  });
});

describe('Testes da rota de aluno', () => {
  it('Deve responder com status 200 para a rota de aluno', async () => {
    const res = await request(app)
      .get('/aluno')
      .set('authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhQGEuY29tIiwiaWF0IjoxNzE3ODczMjIxLCJleHAiOjE3MTc4NzY4MjF9.7Y6hXCDjgvzPESRee0rYNpmu83VyQ6ahdzzvxPT_Js8'); 
    expect(res.statusCode).toEqual(200);
  });

  it('Deve responder com status 401 se o token não for fornecido', async () => {
    const res = await request(app).get('/aluno');
    expect(res.statusCode).toEqual(401);
  });

  it('Deve responder com status 401 se o token for inválido', async () => {
    const res = await request(app)
      .get('/aluno')
      .set('authorization', 'token_invalido');
    expect(res.statusCode).toEqual(401);
  });
});

describe('Testes de rotas gerais', () => {
  it('Deve responder com status 404 para uma rota inexistente', async () => {
    const res = await request(app).get('/rota-inexistente');
    expect(res.statusCode).toEqual(404);
  });
});
