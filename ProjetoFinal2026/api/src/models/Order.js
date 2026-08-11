// models/Order.js
const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  usuarioId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  // Quais jogos foram comprados neste pedido
  jogos: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Game', 
    required: true 
  }],
  total: { 
    type: Number, 
    required: true // Preço total pago no momento da compra
  },
  status: { 
    type: String, 
    enum: ['APROVADO', 'PENDENTE', 'RECUSADO'], 
    default: 'PENDENTE' 
  },
  metodoPagamento: { 
    type: String, 
    required: true // Ex: "CARTAO_CREDITO", "PIX"
  }
}, { 
  timestamps: true 
});

module.exports = mongoose.model('Order', OrderSchema);