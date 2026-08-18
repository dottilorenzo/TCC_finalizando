import { useState } from 'react';
import api from '../services/api';

export function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/login', { email, senha });
      localStorage.setItem('token', response.data.token);
      alert('Login realizado com sucesso!');
    } catch (error) {
      alert('Erro ao autenticar: ' + (error.response?.data?.message || 'Verifique suas credenciais'));
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} required />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}