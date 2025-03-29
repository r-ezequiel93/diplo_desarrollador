import Juan from './f.elconfidencial.com_original_62c_e5d_314_62ce5d3141c0b670144a692b7f6a21fa.jpg';
import './../styles/nosotros.css';
const NosotrosPage = (props) => {
    return (
        <main className="holder">
            <div className="historia">
                <h2>Historia</h2>

                <p>lorem impsun dolor sit; amet consectetur
                    adipisicing elit. consequuntur, rem saepe. A
                    enim qui facilis consectetur. Tempora dolores
                    culpa libero a natus fugit ea ratione
                    reprehenderit,
                    consequuntur, dibitis corrpti asperiores</p>
                <p>lorem impsun dolor sit; amet consectetur
                    adipisicing elit. consequuntur, rem saepe. A
                    enim qui facilis consectetur. Tempora dolores
                    culpa libero a natus fugit ea ratione
                    reprehenderit,
                    consequuntur, dibitis corrpti asperiores</p>

            </div>
            <div className="staff">
                <h2>staff</h2>
                <div className="personas">
                    <div className="persona">
                        <img src={Juan} alt="Juan Gomez" style={{ width: '50%'}} />
                        <h5>Juan Gomez</h5>
                        <h6>Grente General</h6>
                        <p>loremlorem impsun dolor sit; amet consectetur
                            adipisicing elit. consequuntur, rem saepe. A
                            enim qui facilis consectetur. Tempora dolores
                            culpa libero a natus fugit ea ratione
                            reprehenderit,
                            consequuntur, dibitis corrpti asperiores </p>

                    </div>
                </div>
            </div>
        </main>
    );
}
export default NosotrosPage;