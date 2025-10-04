import { useState } from "react";


function CreateInvoice() {


    const handleSubmit = (e) => {
        e.preventDefault();
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
                <h3 style={{ marginBottom: '0px' }}>
                    SISRENTA
                </h3>
            </div>
            {/*<!-- Aquí se inyectará el todo el contenido de la pagina --> */}
            <div className="main-content">
                <h1 className="mb-4">Crear Factura</h1>
                <div className="card shadow p-4 mb-4">
                    <form onSubmit={handleSubmit}>
                        <input
                            name="cliente_id"
                            value="Cliente ID" //Cliente ID que viene de la BBDD
                        />
                        <div className="mb-3">
                            <label
                                htmlFor="descripcion"
                                className="form-label">
                                <strong>Descripción</strong>
                            </label>
                            <textarea
                                className="form-control"
                                id="descripcion"
                                name="descripcion"
                                rows="3"
                                required>
                            </textarea>
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="recomendaciones"
                                className="form-label">
                                <strong>Recomendaciones</strong>
                            </label>
                            <textarea
                                className="form-control"
                                id="recomendaciones"
                                name="recomendaciones"
                                rows="2">
                            </textarea>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md">
                                <label
                                    htmlFor="valor"
                                    className="form-label">
                                    <strong>Valor de Renta</strong>
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="valor"
                                    name="valor"
                                    required
                                />
                            </div>
                            <div className="col-md">
                                <label
                                    htmlFor="valor"
                                    className="form-label">
                                    <strong>Credito</strong>
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="creditValue"
                                    name="creditValue"
                                    required
                                />
                            </div>
                            <div className="col-md">
                                <label
                                    htmlFor="depositValue"
                                    className="form-label">
                                    <strong>Depósito</strong>
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="depositValue"
                                    name="depositValue"
                                />
                            </div>
                        </div>

                        <div className="mb-3">
                            <label
                                htmlFor="status"
                                className="form-label">
                                <strong>Status</strong>
                            </label>
                            <select
                                className="form-select"
                                id="status"
                                name="status"
                                required>
                                <option value="Apartado">Apartado</option>
                                <option value="Entregado">Entregado</option>
                                <option value="Devuelto">Devuelto</option>
                            </select>
                        </div>

                        <div className="text-end">
                            <button
                                className="btn btn-success"
                                type="submit">Crear Factura
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateInvoice