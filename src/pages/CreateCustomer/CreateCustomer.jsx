import { useState } from 'react';
import './CreateCustomer.css'

function CreateCustomer() {

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [homeAddress, setHomeAddress] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Datos: " + name, " " + lastName + " " + phoneNumber + " " + homeAddress)

    }

    return (
        <div className="right-side">
            <div className="top-menu" style={{ marginBottom: "20px" }}>
                <button
                    className="hamburger btn btn-toggle col-1"
                    data-bs-target="#menu-container"
                    data-bs-toggle="collapse"
                    aria-controls="menu-container"
                    aria-expanded="true">
                    <img
                        src="https://img.icons8.com/?size=100&id=8113&format=png&color=000000"
                        alt="toggle"
                        width="30" />
                </button>
                <h3 style={{ marginBottom: "0px" }}>
                    SISRENTA
                </h3>
            </div>
            {/*Aquí se inyectará el todo el contenido de la pagina */}
            <div className="main-content">
                <h1 style={{ marginBottom: "20px" }}>Crear Cliente</h1>
                <div className="formulario-container">
                    <div className="card shadow p-3" style={{ width: "70%", minWidth: "250px" }}>
                        <form onSubmit={handleSubmit}>

                            <label htmlFor='name' className="form-label">Nombre:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />

                            <label htmlFor='lastName' className="form-label">Apellidos:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="lastName"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                            />

                            <label htmlFor="phoneNumber" className="form-label"># de Celular:</label>
                            <input
                                type="number"
                                className="form-control"
                                id="phoneNumber"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                required
                                placeholder="321 XXX XXXX"
                            />

                            <label htmlFor="homeAddress" className="form-label">Direccion:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="homeAddress"
                                value={homeAddress}
                                onChange={(e) => setHomeAddress(e.target.value)}
                                required
                            />
                            <div style={{display: "flex", justifyContent: "center"}}>
                                <button className="btn btn-primary">Crear Cliente</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateCustomer