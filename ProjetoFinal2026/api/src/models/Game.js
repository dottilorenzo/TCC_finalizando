// models/Game.js
const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
  titulo: { 
    type: String, 
    required: true 
  },
  descricao: { 
    type: String, 
    required: true 
  },
  preco: { 
    type: Number, 
    required: true 
  },
  categoria: { 
    type: String, 
    required: true 
  },
  imagemUrl: { 
    type: String 
  },
  desenvolvedora: { 
    type: String 
  }
}, { 
  timestamps: true 
});

module.exports = mongoose.model('Game', GameSchema);