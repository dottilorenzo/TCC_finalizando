// models/Cart.js
const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
  // Relaciona o carrinho a um usuário específico
  usuarioId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true, 
    unique: true 
  },
  // Lista de jogos adicionados ao carrinho
  itens: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Game' 
  }]
}, { 
  timestamps: true 
});

module.exports = mongoose.model('Cart', CartSchema);