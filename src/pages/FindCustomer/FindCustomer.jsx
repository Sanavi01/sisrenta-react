import { useState } from "react"

function FindCustomer() {

    const [phoneNumber, setPhoneNumber] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(phoneNumber)

    }
    return (
        <div className="right-side">
            <div className="top-menu" style={{ marginBottom: "20px" }}>
                <button
                    className=" hamburger btn btn-toggle col-1"
                    data-bs-target="#menu-container"
                    data-bs-toggle="collapse"
                    aria-controls="menu-container"
                    aria-expanded="true">
                    <img
                        src="https://img.icons8.com/?size=100&id=8113&format=png&color=000000" alt="toggle"
                        width="30" />
                </button>
                <h3 style={{ marginBottom: "0px" }}>
                    SISRENTA
                </h3>
            </div>
            {/*Aquí se inyectará el todo el contenido de la pagina */}
            <div className="main-content">
                <h1 style={{ marginBottom: "20px" }}>Buscar cliente</h1>
                <div className="card shadow p-2">
                    <h5>Ingrese aquí el numero de celular del cliente</h5>
                    <form className="d-flex" onSubmit={handleSubmit}>
                        <input
                            className="form-control me-2"
                            type="search"
                            id="phoneNumber"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            placeholder="Buscar..."
                            aria-label="Buscar" />
                        <button className="btn btn-outline-primary" type="submit">Buscar</button>
                    </form>
                </div>
            </div>
        </div >

    )
}

export default FindCustomer