import './index.css';

function App() {
  return (
    <div className="App">
      <form action="form">
        {/* Nome + Cognome */}
        <div className="form-row">
          <div className="form-section half">
            <label htmlFor="name">Nome</label>
            <input type="text" name="name" id="name" placeholder="Mario" />
          </div>
          <div className="form-section half">
            <label htmlFor="surname">Cognome</label>
            <input type="text" name="surname" id="surname" placeholder="Rossi" />
          </div>
        </div>
        {/* Password + Specialistica + Anni */}
        <div className="form-row">
          <div className="form-section third">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder="••••••••" />
          </div>
          <div className="form-section third">
            <label htmlFor="specialistica">Specialistica</label>
            <select name="specializzato" id="specializzato">
              <option value="1">Frontend</option>
              <option value="2">Backend</option>
              <option value="3">Full stack</option>
            </select>
          </div>
          <div className="form-section third">
            <label htmlFor="anni">Anni di esperienza</label>
            <input
              type="number"
              name="anni"
              id="anni"
              min="1"
              placeholder="3"
              onKeyDown={(e) => {
                if (e.key === '-' || e.key === '+') {
                  e.preventDefault();
                }
              }}
            />
          </div>
        </div>

        {/* Descrizione */}
        <div className="form-section">
          <label htmlFor="descrizione">Descrizione</label>
          <textarea
            name="descrizione"
            id="descrizione"
            placeholder="Scrivi qualcosa su di te..."
            cols="30"
            rows="6"
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">
          Invia
        </button>
      </form>
    </div>
  );
}

export default App;
