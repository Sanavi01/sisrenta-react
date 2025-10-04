import React from 'react'

function InfoInvoice() {


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
                <h3 style={{ marginBottom: '0px' }}>
                    SISRENTA
                </h3>
            </div>
            {/*<!-- Aquí se inyectará el todo el contenido de la pagina --> */}
            <div className="main-content">
                <h1 style={{ marginBottom: "20px" }}>Facturas</h1>
                <div className="card shadow p-3">
                    <div className="">
                        <p>
                            <b>Cliente:</b> Nombre + Apellido
                        </p> {/* Insertar Nombre y Apellido */}
                        <p>
                            <b>Celular:</b> Celular
                        </p> {/* Insertar celular*/}
                    </div>
                    <div className="border-bottom">
                        <p><b>Descripcion:</b></p>
                        <p>Descripcion</p> {/* Insertar Descripcion */}
                    </div>
                    <div className="border-bottom">
                        <p><b>Recomendaciones</b></p>
                        <p>Recomendaciones {/* Insertar Recomendaciones*/}</p>
                    </div>
                    <div className="row border-bottom mb-2">
                        <div className="col">
                            <p><b>Valor</b></p>
                            <p>$$$ {/* Insertar Valor*/} </p>
                        </div>
                        <div className="col">
                            <p><b>Credito</b></p>
                            <p>$$$ {/* Insertar Credito*/}</p>
                        </div>
                        <div className="col">
                            <p><b>Deposito</b></p>
                            <p>$$$ {/* Insertar Deposito*/}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col"><p><b>Fecha Creacion</b></p></div>
                        <div className="col"><p><b>Fecha Entrega</b></p></div>
                        <div className="col"><p><b>Fecha Devolucion</b></p></div>
                    </div>
                    <div className="row">
                        <div className="col"><p>{/* Insertar Fecha de Creacion*/}</p></div>
                        <div className="col"><p>{/* Insertar Fecha de Entrega*/}</p></div>
                        <div className="col"><p>{/* Insertar Fecha de Devolucion*/}</p></div>
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column'
                        }}>
                        <p><b>Status:</b></p>
                        <button
                            className="btn btn-primary"
                            disabled>{/* Insertar Estado de la Factura */}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoInvoice