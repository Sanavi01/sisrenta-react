import { useState } from 'react'

function Login() {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Usuario: " + user + "Contraseña: " + password) 
    };

  return (
    <div className="row flex-column flex-md-row h-100 gx-0" style={{ height: "100%" }}>
      {/* Lado izquierdo con imagen */}
      <div className="col image-side d-flex justify-content-center align-items-center">
        <img
          src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftrajesenrenta.com%2Fwp-content%2Fuploads%2FLogo_Oro.svg&sp=1758989929Tce45ecbc611c780889feb6492155e127ba4af3aa8f5d26c3bbca48af4bc3d064"
          alt="logo-sisrenta"
          className="img-fluid"
        />
      </div>

      {/* Lado derecho con login */}
      <div className="col login-side d-flex justify-content-center align-items-center">
        <div className="card shadow p-4" style={{ width: "100%", maxWidth: "400px" }}>
          <h2 className="text-center mb-4">Iniciar Sesión</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="user" className="form-label">
                Usuario
              </label>
              <input
                type="text"
                className="form-control"
                id="user"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button className="btn btn-primary w-100" type="submit">
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
    
}

export default Login