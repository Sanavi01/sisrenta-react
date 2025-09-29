import { useState } from 'react'

function InfoCustomer() {


    const [customer, setCustomer] = useState({
        name: "Nombre",
        lastName: "Apellido",
        phoneNumber: "32123999656",
        homeAddress: "Dg 66",
    })

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

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setCustomer((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault();
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
                        src="https://img.icons8.com/?size=100&id=8113&format=png&color=000000" alt="toggle" width="30" />

                </button>
                <h3 style={{ marginBottom: "0px" }}>
                    SISRENTA
                </h3>
            </div>
            {/* Aquí se inyectará el todo el contenido de la pagina */}
            <div className="main-content">
                <h1>Informacion Cliente</h1>
                <div className="row flex-column flex-md-row">
                    <div className="InfoCliente col">
                        <div className="card shadow p-3">

                            <p><b>Nombre</b></p>
                            <p className="card p-1">{customer.name}</p>

                            <p><b>Apellidos</b></p>
                            <p className="card p-1">{customer.lastName}</p>

                            <p><b># de Celular</b></p>
                            <p className="card p-1">{customer.phoneNumber}</p>

                            <p><b>Direccion</b></p>
                            <p className="card p-1">{customer.homeAddress}</p>

                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <a href="" className="btn btn-primary">Crear Factura</a>
                            </div>
                        </div>
                    </div>



                    <div className="FacturasCliente col pb-3">
                        <div className="card shadow p-3" style={{ gap: "20px" }}>
                            <h3>Facturas</h3>
                            {invoices.map((invoice) =>
                                <div className="card p-2 factura" key={invoice.id}>
                                    <div className="row">
                                        <div className="col-4 border-end">
                                            <p>Factura: {invoice.id}</p>
                                            <p>Fecha: {invoice.creationDate}</p>
                                            <p>Status: {invoice.status}</p>
                                        </div>
                                        <div className="col">
                                            <p><b>Resumen</b></p>
                                            <p>{invoice.description}</p>
                                            <div style={{display:"flex", justifyContent: "center"}}>
                                                <form onSubmit={handleSubmit}>
                                                    <button 
                                                    type="submit" 
                                                    className="btn btn-primary" 
                                                    value={invoice.id}
                                                    name="invoice_id">Factura</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCustomer