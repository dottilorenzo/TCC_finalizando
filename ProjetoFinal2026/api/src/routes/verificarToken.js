// middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  // Pega o token do cabeçalho da requisição
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ erro: 'Token não fornecido. Faça login.' });
  }

  // O padrão é "Bearer <token>", então dividimos a string
  const token = authHeader.split(' ')[1];

  try {
    // Valida o token (a chave 'SEGREDO_AQUI' deve vir de variáveis de ambiente, ex: process.env.JWT_SECRET)
    const decodificado = jwt.verify(token, 'SEGREDO_AQUI');
    
    // Injeta os dados do usuário na requisição para os Controllers usarem
    req.usuario = decodificado; 
    
    return next(); // Libera a passagem para o Controller
  } catch (erro) {
    return res.status(401).json({ erro: 'Token inválido ou expirado.' });
  }
};