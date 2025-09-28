import Menu from './Menu/Menu'
import Footer from './Footer/Footer'

function Layout({ children }) {
    return (
        <div className='wrapper' style={{ height: "100%" }}>
            <div className="row flex-nowrap gx-0 " style={{ height: "100%" }} >
                <div
                    id="menu-container"
                    className="col-1 collapsed show sidebar"
                    style={{ minWidth: "120px", height: "100%" }}>
                    <Menu />
                </div>
                <div className="col" style={{ height: "100%" }}>
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