import { useState } from "react";

function DeliveryInvoice() {

    const [invoices, setInvoices] = useState([
        {
            id: 1,
            creationDate: "22/04/2002",
            status: "Apartado",
            description: "Traje Elegante",
        },
        {
            id: 2,
            creationDate: "15/06/2003",
            status: "Pagado",
            description: "Alquiler de vehículo",
        },
        {
            id: 3,
            creationDate: "10/09/2004",
            status: "Pendiente",
            description: "Servicio de catering",
        },
    ]);

    const handleSubmit = (e) => {
        console.log("Funciono")
    }


    return (
        <div className="right-side">
            <div className="top-menu">
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
            {/* <!-- Aquí se inyectará el todo el contenido de la pagina --> */}
            <div className="main-content">
                <h1>Alertas - Por Entregar</h1>
                <div className="card shadow" style={{ gap: "20px" }}>

                    {invoices.map((invoice) =>
                        <div
                            className="card border-warning p-3 factura border-start"
                            key={invoice.id}>
                            <div className="row">
                                <div className="col-4 border-end">
                                    <p><b>Factura</b> {invoice.id}</p>
                                    <p><b>Fecha Creacion</b>{invoice.creationDate}</p>
                                    <p><b>Status:</b>{invoice.status}</p>
                                </div>
                                <div className="col">
                                    <p><b>Resumen</b></p>
                                    <p>{invoice.description}</p>
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        <form onSubmit={handleSubmit}>
                                            <button
                                                type="submit"
                                                className="btn btn-warning"
                                                value={invoice.id}
                                                name="factura_id">
                                                {/* Insertar el id de la factura para enviarlo para buscarlo */}
                                                Factura
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default DeliveryInvoice