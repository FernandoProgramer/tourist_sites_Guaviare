import { Link } from "react-router-dom"
import "../css/card_style.css"

export const Cards = ({ title_card, body_card, link_card, url_img }) => {
    return (
        <>
            <div className="col-md-3 my-2">
                <div className="card">
                    <img src={url_img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title_card}</h5>
                        <p className="card-text"><b>Direccion:</b>{body_card}</p>
                        <Link to={link_card}>Ver mas... </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
