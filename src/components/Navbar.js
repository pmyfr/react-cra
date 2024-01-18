
export default function Navbar() {
    return (
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <span class="navbar-brand">Delices du Monde</span>
                <button class="btn btn-outline-dark position-relative" type="submit">Ajouter dans le panier
                    <span class="badge rounded-pill text-bg-danger position-absolute top-0 start-100 translate-middle">99</span>
                </button>
            </div>
        </nav>
    )
};

