import React from 'react'

function Landing() {

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
                        src="https://img.icons8.com/?size=100&id=8113&format=png&color=000000" alt="toggle" 
                        width="30" 
                    />

                </button>
                <h3 style={{marginBottom: "0px"}}>SISRENTA</h3>
            </div>


            {/*Aquí se inyectará el todo el contenido de la pagina */}
        <div className="main-content">
            <div className="container-fluid ">
                <div className="card shadow p-2 welcome" >
                    <h1 style={{textAlign: "center"}}>Bienvenido a SISRENTA</h1>
                    <h2 style={{marginBottom:"30px", textAlign:"center"}}>Tu software de renta online</h2>
                    <h3 style={{textAlign: "center"}}>En el menu de navegacion a la izquierda podra acceder a las diferentes funciones del sistema</h3>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Landing