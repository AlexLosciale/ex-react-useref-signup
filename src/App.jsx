import { useState } from 'react';
import './index.css';

function App() {
  const [nome, setNome] = useState('');
  const [cognome, setCognome] = useState('');
  const [password, setPassword] = useState('');
  const [specializzazione, setSpecializzazione] = useState('');
  const [anniEsperienza, setAnniEsperienza] = useState('');
  const [descrizione, setDescrizione] = useState('');

  const [errori, setErrori] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuoviErrori = {};

    if (!nome.trim()) nuoviErrori.nome = 'Il nome è richiesto.';
    if (!cognome.trim()) nuoviErrori.cognome = 'Il cognome è richiesto.';
    if (!password.trim()) nuoviErrori.password = 'La password è richiesta.';
    if (!specializzazione) nuoviErrori.specializzazione = 'Seleziona una specializzazione.';
    if (!anniEsperienza || Number(anniEsperienza) <= 0) {
      nuoviErrori.anniEsperienza = 'Inserisci un numero.';
    }
    if (!descrizione.trim()) nuoviErrori.descrizione = 'La descrizione è richiesta.';

    setErrori(nuoviErrori);

    if (Object.keys(nuoviErrori).length === 0) {
      const resultString = `
        Nome: ${nome}
        Cognome: ${cognome}
        Password: ${password}
        Specializzazione: ${specializzazione}
        Anni di esperienza: ${anniEsperienza}
        Descrizione: ${descrizione}
      `;
      console.log(resultString.trim());

      setNome('');
      setCognome('');
      setPassword('');
      setSpecializzazione('');
      setAnniEsperienza('');
      setDescrizione('');
      setErrori({});
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit} noValidate>
        {/* Nome + Cognome */}
        <div className="form-row">
          <div className="form-section half">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Mario"
            />
            {errori.nome && <p className="error">{errori.nome}</p>}
          </div>
          <div className="form-section half">
            <label htmlFor="cognome">Cognome</label>
            <input
              type="text"
              id="cognome"
              value={cognome}
              onChange={(e) => setCognome(e.target.value)}
              placeholder="Rossi"
            />
            {errori.cognome && <p className="error">{errori.cognome}</p>}
          </div>
        </div>
        {/* Password + Specializzazione + Anni */}
        <div className="form-row">
          <div className="form-section third">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
            {errori.password && <p className="error">{errori.password}</p>}
          </div>
          <div className="form-section third">
            <label htmlFor="specializzazione">Specializzazione</label>
            <select
              id="specializzazione"
              value={specializzazione}
              onChange={(e) => setSpecializzazione(e.target.value)}
            >
              <option value="">-- Seleziona --</option>
              <option value="Full Stack">Full Stack</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
            </select>
            {errori.specializzazione && <p className="error">{errori.specializzazione}</p>}
          </div>
          <div className="form-section third">
            <label htmlFor="anniEsperienza">Anni di esperienza</label>
            <input
              type="number"
              id="anniEsperienza"
              value={anniEsperienza}
              min="1"
              onChange={(e) => setAnniEsperienza(e.target.value)}
              placeholder="3"
              onKeyDown={(e) => {
                if (e.key === '-' || e.key === '+') e.preventDefault();
              }}
            />
            {errori.anniEsperienza && <p className="error">{errori.anniEsperienza}</p>}
          </div>
        </div>

        {/* Descrizione */}
        <div className="form-section">
          <label htmlFor="descrizione">Descrizione</label>
          <textarea
            id="descrizione"
            value={descrizione}
            onChange={(e) => setDescrizione(e.target.value)}
            placeholder="Scrivi qualcosa su di te..."
            rows="5"
          />
          {errori.descrizione && <p className="error">{errori.descrizione}</p>}
        </div>

        <button type="submit" className="submit-btn">
          Invia
        </button>
      </form>
    </div>
  );
}

export default App;
