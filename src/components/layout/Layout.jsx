import Menu from './Menu/Menu'
import Footer from './Footer/Footer'

function Layout({ children }) {
    return (
        <div className='wrapper'>
            <div className="row flex-nowrap gx-0 " style={{ minHeight: "100vh" }} >
                <div
                    id="menu-container"
                    className="col-1 collapsed show sidebar"
                    style={{ minWidth: "120px",  minHeight: "100vh" }}>
                    <Menu />
                </div>
                <div className="col" style={{ minHeight: "100vh" }}>
                    <main>{children} </main>
                </div>

            </div>
            <div className="row gx-0 footer" style={{ width: "100%" }}>
                <Footer />
            </div>
        </div>
    )
}

export default Layout