import React from "react";

const TechnicalDetails = ({ product }) => {
  return (
    <div className="container">
      <div className="row pe-5 ps-5 justify-content-center mt-5">
        <h1 className="text-center mb-4">Technische Daten</h1>
        <div className="col-lg-8 col-12">
          <img src={product.image.ima5} className="w-100" height={470} />
        </div>
      </div>
      <div className="ow pe-5 ps-5 justify-content-center mt-5">
      <table className="table table-bordered">
        <tbody>
          <tr>
            <td colSpan={2} width={500} >
            Länge
            </td>
            <td className="bg-dark text-light">{product.description.width}</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td colSpan={2}>
            Breite
            </td>
            <td>{product.description.length}</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td colSpan={2} >
            Höhe	
            </td>
            <td>{product.description.height}</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td colSpan={2} >
            Area	
            </td>
            <td>{product.description.Area}</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td colSpan={2} >
            Features
            </td>
            <td>{product.description.Features}</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td colSpan={2} >
            Isolation
            </td>
            <td>{product.description.Isolation}</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td colSpan={2} >
            Strength
            </td>
            <td>{product.description.strength}</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td colSpan={2} >
            CraneSlot
            </td>
            <td>{product.description.CraneSlot}</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td colSpan={2} >
            TransportCost
            </td>
            <td>{product.description.TransportCost}</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td colSpan={2} >
            Customization
            </td>
            <td>{product.description.TransportCost}</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td colSpan={2} >
            ExtraAccesories
            </td>
            <td>{product.description.ExtraAccesories}</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td colSpan={2} >
            Shutar
            </td>
            <td>{product.description.Shutar}</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td colSpan={2} >
            Heater
            </td>
            <td>{product.description.heater}</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td colSpan={2}>
            Geaser
            </td>
            <td>{product.description.geaser}</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td colSpan={2}>
            Cables
            </td>
            <td>{product.description.Cables}</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td colSpan={2} >
            Fridge
            </td>
            <td>{product.description.fridge}</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td colSpan={2} >
            Urinate
            </td>
            <td>{product.description.Urinate}</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td colSpan={2} >
            ColorSelection
            </td>
            <td>{product.description.ColorSelection}</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td colSpan={2} >
            PricePlusKDV
            </td>
            <td>{product.description.PricePlusKDV}</td>
          </tr>
        </tbody>
      
      </table>
      </div>
    </div>
  );
};

export default TechnicalDetails;
