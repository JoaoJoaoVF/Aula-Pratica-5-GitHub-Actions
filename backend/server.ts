import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const port = process.env.PORT || 3000;
const segredo = 'ohohohoh';
const saltRounds = 12; // Número de iterações para o bcrypt
const cors = require('cors');

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Simulando um "banco de dados" com um array
let alunos: any[] = [];

// Função para verificar se um email é válido
function isValidEmail(email: string): boolean {
  const emailRegex: RegExp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return emailRegex.test(email);
}

// Rota de registro
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

  console.log('Aluno cadastrado com sucesso');
  res.status(200).json({ mensagem: 'Cadastro bem-sucedido' });
});

// Rota de login
app.post('/login', async (req: Request, res: Response) => {
  const { email, senha } = req.body;

  const aluno = alunos.find(aluno => aluno.email === email);
  if (!aluno) {
    res.status(401).json({ mensagem: 'Credenciais inválidas' });
    return;
  }

  const passwordMatch = await bcrypt.compare(senha, aluno.senha);
  if (!passwordMatch) {
    res.status(401).json({ mensagem: 'Credenciais inválidas' });
    return;
  }

  const token = jwt.sign(
    { id: aluno.id, email },
    segredo,
    { expiresIn: '1h' }
  );
  res.status(200).json({ token });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});