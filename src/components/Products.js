import { useContext } from 'react';
import productsData from '../assets/productsData.js';
import { CartContext } from '../store'


export default function Products() {
const [state, dispatch] = useContext (CartContext);

    return (
        <div className="row row-cols-3 g-3">

            {productsData.map((product)=> {

         return (

            <div className="col" key={product.id}>
             <div className="card">
                <img src={product.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h6 className="card-title">{product.title}
                        <span className="float-end">{product.price} €</span>
                    </h6>
                    <button type="button" className="btn btn-outline-primary w-100" onClick={()=>{
                        dispatch({
                            type: 'ADD_TO_CART',
                            payload: {
                            ...product,
                            quantity: 1
                            },
                        })
                    }}>Ajouter dans le panier</button>
                </div>
             </div>
           </div>
        )
        })}

            {/* <div className="col">

                <div className="card">
                    <img src="https://plus.unsplash.com/premium_photo-1700590072681-3267b66e53c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h6 className="card-title">Panna cotta
                            <span className="float-end">8€</span>
                        </h6>
                        <button type="button" className="btn btn-outline-primary w-100">Ajouter dans la panier</button>
                    </div>

                </div>
            </div> */}

            {/* <div className="col">

                <div className="card">
                    <img src="https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h6 className="card-title">Panna cotta
                            <span className="float-end">8€</span>
                        </h6>
                        <button type="button" className="btn btn-outline-primary w-100">Ajouter dans la panier</button>
                    </div>

                </div>

            </div>

            <div className="col">

                <div className="card">
                    <img src="https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h6 className="card-title">Panna cotta
                            <span className="float-end">8€</span>
                        </h6>
                        <button type="button" className="btn btn-outline-primary w-100">Ajouter dans la panier</button>
                    </div>

                </div>
            </div>

            <div className="col">

                <div className="card">
                    <img src="https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h6 className="card-title">Panna cotta
                            <span className="float-end">8€</span>
                        </h6>
                        <button type="button" className="btn btn-outline-primary w-100">Ajouter dans la panier</button>
                    </div>

                </div>
            </div>

            <div className="col">

                <div className="card">
                    <img src="https://images.unsplash.com/photo-1549876919-88b8fa42ac7e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h6 className="card-title">Panna cotta
                            <span className="float-end">8€</span>
                        </h6>
                        <button type="button" className="btn btn-outline-primary w-100">Ajouter dans la panier</button>
                    </div>

                </div>
            </div>

            <div className="col">

                <div className="card">
                    <img src="https://images.unsplash.com/photo-1469533778471-92a68acc3633?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h6 className="card-title">Panna cotta
                            <span className="float-end">8€</span>
                        </h6>
                        <button type="button" className="btn btn-outline-primary w-100">Ajouter dans la panier</button>
                    </div>

                </div>
            </div>

            <div className="col">

                <div className="card">
                    <img src="https://images.unsplash.com/photo-1600002415506-dd06090d3480?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h6 className="card-title">Panna cotta
                            <span className="float-end">8€</span>
                        </h6>
                        <button type="button" className="btn btn-outline-primary w-100">Ajouter dans la panier</button>
                    </div>

                </div>
            </div> */}




        </div>






    )
};


