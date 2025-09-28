import React from 'react'
import './Menu.css'


function Menu() {
  return (
    <div className="navbar row gx-0">
      {/* Nav */}
      <div className="nav">
        <div className="sidebar-heading mb-3">Navegacion</div>

        <ul className="list-unstyled">
          {/* Customers */}
          <li className="mb-1">
            <button className="btn btn-toggle d-inline-flex align-items-center" data-bs-toggle="collapse"
              data-bs-target="#customersMenu" aria-expanded="false" aria-controls="customersMenu">
              <img src="https://img.icons8.com/?size=100&id=22396&format=png&color=000000" alt="Clientes"
                width="30" />
              Clientes
            </button>
            {/* Collapsed List */}
            <ul className="collapse " id="customersMenu">
              <li><a href="../pages/CrearCliente.html" className="link-body-emphasis d-inline-flex text-decoration-none rounded mb-1">Crear
                Cliente</a></li>
              <li><a href="../pages/BuscarCliente.html" className="link-body-emphasis d-inline-flex text-decoration-none rounded mb-1">Buscar
                Cliente</a></li>
            </ul>
          </li>


          <li className="mb-1">
            <button
              className="btn btn-toggle"
              data-bs-toggle="collapse"
              data-bs-target="#alertCollapsed"
              aria-expanded="true"
              aria-controls="alertCollapsed">
              <img
                src="https://img.icons8.com/?size=100&id=40401&format=png&color=000000" alt="Notificaciones"
                width="24" />
              Alertas
            </button>
            <ul className="collapse" id="alertCollapsed">
              <li><a href="../pages/AlertasPreparacion.jsp" className="link-body-emphasis d-inline-flex text-decoration-none rounded mb-1">Alertas
                de Preparacion</a></li>
              <li><a href="../pages/AlertaDevolucion.jsp" className="link-body-emphasis d-inline-flex text-decoration-none rounded mb-1">Alertas
                de Devolucion</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Menu
