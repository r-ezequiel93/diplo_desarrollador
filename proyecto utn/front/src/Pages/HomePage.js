const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="images/home/img01.jpg" alt="avion" />
            </div>
            <div className="columnas">
            <div className="bienvenidos left">
                <h2>bienvenidos</h2>
                <p> lorem ipsun dolor sit amet, consectur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venian, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillumdolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  </p>
            </div>
            <div className="testimonios rigth">
                <h2>testimonios</h2>
                <div className="testimonios">
                    <span className="cita">siimplemente exelente
                    </span>

                    <span className="autor">juan perez</span>
                </div>
            </div>
        </div>
</main >

    );
}
export default HomePage;