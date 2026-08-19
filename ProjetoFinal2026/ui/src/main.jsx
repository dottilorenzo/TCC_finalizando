import React, { useState, useEffect } from 'react';
import './CompareGames.css';


const MOCK_GAMES = [
  {
    id: 1,
    title: "Elden Ring",
    cover: "https://via.placeholder.com/200x260/1e293b/ffffff?text=Elden+Ring",
    price: 229.90,
    rating: 96,
    genre: "Action RPG",
    platforms: "PC, PS5, Xbox Series",
    duration: "55h",
    multiplayer: "Co-op / PvP"
  },
  {
    id: 2,
    title: "The Witcher 3",
    cover: "https://via.placeholder.com/200x260/1e293b/ffffff?text=The+Witcher+3",
    price: 79.99,
    rating: 93,
    genre: "RPG",
    platforms: "PC, PS4, PS5, Switch",
    duration: "50h",
    multiplayer: "Singleplayer"
  },
  {
    id: 3,
    title: "Cyberpunk 2077",
    cover: "https://via.placeholder.com/200x260/1e293b/ffffff?text=Cyberpunk+2077",
    price: 199.90,
    rating: 86,
    genre: "Action RPG",
    platforms: "PC, PS5, Xbox Series",
    duration: "30h",
    multiplayer: "Singleplayer"
  }
];

export default function CompareGames() {
  const [gamesList, setGamesList] = useState(MOCK_GAMES);
  const [game1Id, setGame1Id] = useState(1);
  const [game2Id, setGame2Id] = useState(2);


  const game1 = gamesList.find(g => g.id === Number(game1Id));
  const game2 = gamesList.find(g => g.id === Number(game2Id));

  return (
    <div className="compare-container">
      <header className="compare-header">
        <h1>Comparador de Jogos</h1>
        <p>Selecione dois títulos para comparar especificações, preços e avaliações.</p>
      </header>

      {/* Seletor de Jogos */}
      <div className="selectors-bar">
        <div className="selector-group">
          <label>Jogo 1:</label>
          <select value={game1Id} onChange={(e) => setGame1Id(e.target.value)}>
            {gamesList.map(game => (
              <option key={game.id} value={game.id}>{game.title}</option>
            ))}
          </select>
        </div>

        <div className="vs-badge">VS</div>

        <div className="selector-group">
          <label>Jogo 2:</label>
          <select value={game2Id} onChange={(e) => setGame2Id(e.target.value)}>
            {gamesList.map(game => (
              <option key={game.id} value={game.id}>{game.title}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Tabela de Comparação */}
      {game1 && game2 && (
        <div className="comparison-table-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Métrica</th>
                <th>
                  <img src={game1.cover} alt={game1.title} className="game-thumb" />
                  <h3>{game1.title}</h3>
                </th>
                <th>
                  <img src={game2.cover} alt={game2.title} className="game-thumb" />
                  <h3>{game2.title}</h3>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Preço</strong></td>
                <td className={game1.price <= game2.price ? "highlight" : ""}>
                  R$ {Number(game1.price).toFixed(2)}
                  {game1.price <= game2.price && <span className="badge-best">Melhor Preço</span>}
                </td>
                <td className={game2.price <= game1.price ? "highlight" : ""}>
                  R$ {Number(game2.price).toFixed(2)}
                  {game2.price <= game1.price && <span className="badge-best">Melhor Preço</span>}
                </td>
              </tr>
              <tr>
                <td><strong>Avaliação (Metacritic)</strong></td>
                <td className={game1.rating >= game2.rating ? "highlight" : ""}>
                  ⭐ {game1.rating}/100
                </td>
                <td className={game2.rating >= game1.rating ? "highlight" : ""}>
                  ⭐ {game2.rating}/100
                </td>
              </tr>
              <tr>
                <td><strong>Gênero</strong></td>
                <td>{game1.genre}</td>
                <td>{game2.genre}</td>
              </tr>
              <tr>
                <td><strong>Duração Média</strong></td>
                <td>{game1.duration}</td>
                <td>{game2.duration}</td>
              </tr>
              <tr>
                <td><strong>Modos de Jogo</strong></td>
                <td>{game1.multiplayer}</td>
                <td>{game2.multiplayer}</td>
              </tr>
              <tr>
                <td><strong>Plataformas</strong></td>
                <td>{game1.platforms}</td>
                <td>{game2.platforms}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}