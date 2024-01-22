import { useContext } from "react"
import { CartContext } from "../store"

export default function Navbar() {

    const [state] = useContext(CartContext);
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <span className="navbar-brand">Delices du Monde</span>
                <button className="btn btn-outline-dark position-relative" type="submit">Ajouter dans le panier
                    <span className="badge rounded-pill text-bg-danger position-absolute top-0 start-100 translate-middle">{state.cartList.length}</span>
                </button>
            </div>
        </nav>
    )
};

