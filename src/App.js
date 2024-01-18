import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">

      <Navbar />

      <div className="container mt-4">

        <div className="row">
          <div className="col-md-7">

            <Products />
          </div>

          <div className="col-md-5">
            <div className="bg-light p-3">
              <table className="table align-middle">
                <tbody>
                  <tr>
                    <td>
                      <a href="#">x</a>
                    </td>
                    <td>
                      <img src="https://media.istockphoto.com/id/182026106/fr/photo/d%C3%A9licieux-panna-cotta-aux-fruits-rouges.jpg?s=2048x2048&w=is&k=20&c=440cu-ORoRJOEYWpxgHZHGyFcwF9E0fOpkV6qy4CsQo=" className="table-image" alt="" />
                    </td>
                    <td>panna cotta
                      <br />
                      <small className="text-muted">8€</small>
                    </td>
                    <td>
                      <select name="" id="" className="form-select"></select>
                    </td>
                    <td className="text-end">
                      16€
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={5} className="text-end">Total 16€
                    </td>
                  </tr>
                </tfoot>
              </table>

            </div>


            <div className="row">
              <div className="col">
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
