import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const port = process.env.PORT || 3000;
const segredo = 'ohohohoh';
const saltRounds = 12; 
const cors = require('cors');

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let alunos: any[] = [];
let avaliacoes: any[] = [];
let tiposUsuario: any[] = [];


function isValidEmail(email: string): boolean {
  const emailRegex: RegExp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return emailRegex.test(email);
}

app.post('/registro', async (req: Request, res: Response) => {
  const { nome, email, senha, curso, universidade } = req.body;

  if (!nome || !email || !senha || !curso || !universidade) {
    res.status(400).json({ mensagem: 'Todos os campos são obrigatórios' });
    return;
  }

  if (!isValidEmail(email)) {
    res.status(400).json({ mensagem: 'O email fornecido não é válido' });
    return;
  }

  const alunoExistente = alunos.find(aluno => aluno.email === email);
  if (alunoExistente) {
    res.status(409).json({ mensagem: 'Este email já está cadastrado' });
    return;
  }

  const hashedPassword = await bcrypt.hash(senha, saltRounds);
  const novoAluno = { id: alunos.length + 1, nome, email, senha: hashedPassword, curso, universidade };
  alunos.push(novoAluno);

  res.status(200).json({ mensagem: 'Cadastro bem-sucedido' });
});

app.post('/login', async (req: Request, res: Response) => {
  const { email, senha } = req.body;

  const aluno = alunos.find(aluno => aluno.email === email);
  if (!aluno) {
    res.status(400).json({ mensagem: 'Credenciais inválidas' });
    return;
  }

  const passwordMatch = await bcrypt.compare(senha, aluno.senha);
  if (!passwordMatch) {
    res.status(400).json({ mensagem: 'Credenciais inválidas' });
    return;
  }

  const token = jwt.sign(
    { id: aluno.id, email },
    segredo,
    { expiresIn: '1h' }
  );
  res.status(200).json({ token });
});

app.post('/avaliar-professor', (req: Request, res: Response) => {
  const { professorNome, professorMateria, professorUniversidade, semestre, nota, departamento, avaliacaoTexto } = req.body;

  if (!professorNome || !professorMateria || !professorUniversidade || !semestre || !nota || !departamento || !avaliacaoTexto) {
    res.status(400).json({ mensagem: 'Todos os campos são obrigatórios' });
    return;
  }

  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({ mensagem: 'Token não fornecido' });
  }

  jwt.verify(token, segredo, (err, decoded) => {
    if (err) {
      return res.status(401).json({ mensagem: 'Token inválido' });
    }

    const alunoId = (decoded as any).id;
    if (alunoId === undefined) {
      return res.status(401).json({ mensagem: 'Token inválido' });
    }

    const nota = Number(req.body.nota);
    if (nota < 1 || nota > 5) {
      return res.status(400).json({ mensagem: 'A nota deve ser um número entre 1 e 5' });
    }

    const avaliacao = {
      alunoId,
      professorNome,
      professorMateria,
      professorUniversidade,
      semestre,
      nota,
      departamento,
      avaliacaoTexto,
      aprovada: false
    };
    avaliacoes.push(avaliacao);

    console.log('Avaliação do professor cadastrada com sucesso e aguardando aprovação');
    res.status(200).json({ mensagem: 'Avaliação cadastrada com sucesso e aguardando aprovação' });
  });

});

app.get('/avaliacoes-aprovadas', (req: Request, res: Response) => {
  res.status(200).json(avaliacoes);
});


app.get('/aluno', (req: Request, res: Response) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({ mensagem: 'Token não fornecido' });
  }

  jwt.verify(token, segredo, (err, decoded) => {
    if (err) {
      return res.status(401).json({ mensagem: 'Token inválido' });
    }

    const alunoId = (decoded as any).id;
    if (alunoId === undefined) {
      return res.status(401).json({ mensagem: 'Token inválido' });
    }
    console.log(" :) ", alunoId);
    const aluno = alunos.find(aluno => aluno.id === alunoId);
    if (!aluno) {
      return res.status(404).json({ mensagem: 'Aluno não encontrado' });
    } else {
      res.status(200).json(aluno);
    }
  });
});

export default app;
