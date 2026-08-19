const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const JWT_SECRET = process.env.JWT_SECRET || 'sua_chave_secreta_aqui';


const usuariosDB = [];

class AuthService {
 
  
  
  async criarUsuario({ nome, email, senha }) {
  
    const usuarioExistente = usuariosDB.find(user => user.email === email);
    if (usuarioExistente) {
      throw new Error('E-mail já está em uso.');
    }


    const senhaHash = await bcrypt.hash(senha, 10);


    const novoUsuario = {
      id: usuariosDB.length + 1,
      nome,
      email,
      senha: senhaHash,
      criadoEm: new Date()
    };

    usuariosDB.push(novoUsuario);


    const { senha: _, ...usuarioSemSenha } = novoUsuario;
    return usuarioSemSenha;
  }

  
  async autenticar(email, senha) {

    const usuario = usuariosDB.find(user => user.email === email);
    if (!usuario) {
      return null;
    }


    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) {
      return null;
    }

  
    const token = jwt.sign(
      { id: usuario.id, email: usuario.email },
      JWT_SECRET,
      { expiresIn: '1d' }
    );

   
    const { senha: _, ...usuarioSemSenha } = usuario;
    return {
      usuario: usuarioSemSenha,
      token
    };
  }
}

module.exports = new AuthService();