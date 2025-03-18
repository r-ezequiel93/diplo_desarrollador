const ContactoPage = (props) => {
    return (
        <main className="holder contacto">
            <div>
                <h2>Contacto Rapido</h2>
                <form className="formulario" action=""
                    method="">
                    <p>
                        <label for="nombre">nombre</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label for="email">email</label>
                        <input text="text" />
                    </p>
                    <p>
                        <label for="telefono">telefono</label>
                        <input text="text" />
                    </p>

                    <p>
                        <label for="mensaje">mensaje</label>
                        <textarea></textarea>
                    </p>
                    <p className="acciones"><input type="submit"
                        value="enviar" /></p>


                </form>

            </div>
            <div className="datos">
                <h2>otras vias de comunicacion</h2>
                <p>tambien puede conectarse con  nosotros usando los siguientes medios</p>

                <ul>
                    <li>telefono: 43242388</li>
                    <li>email: contacto@transportes.com.ar</li>
                    <li>facebook:</li>
                    <li>twitter:</li>
                    <li>skype:</li>
                </ul>

            </div>

        </main>
    );
}
export default ContactoPage;