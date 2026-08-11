
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  nome: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true // Impede dois usuários com o mesmo e-mail
  },
  senha: { 
    type: String, 
    required: true 
  },
  // Referência aos jogos comprados (Biblioteca do Jogador)
  biblioteca: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Game' 
  }]
}, { 
  timestamps: true // Cria automaticamente os campos createdAt e updatedAt
});

module.exports = mongoose.model('User', UserSchema);