import React from "react";

const TechnicalDetails = ({ product }) => {
  return (
    <div className="container">
      <div className="row pe-5 ps-5 justify-content-center mt-5">
        <h1 className="text-center mb-4">Technische Daten</h1>
        <div className="col-lg-8 col-12">
          <img src={product.image.Product5} className="w-100 h-auto" />
        </div>
      </div>
      <div className="">
        <div className="row justify-content-center mt-5">
          <div className="col-8">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td colSpan={1} className="fw-600 bg-dark text-light">
                    Maße
                  </td>
                </tr>
                <tr>
                  <td className="">Breite</td>
                  <td>{product?.description?.width}</td>
                </tr>
                <tr>
                  <td>Länge</td>
                  <td>{product?.description?.length}</td>
                </tr>
                <tr>
                  <td>Höhe</td>
                  <td>{product?.description?.height}</td>
                </tr>
                <tr>
                  <td>Quadratmeter</td>
                  <td>{product?.description?.Area}</td>
                </tr>
                <tr>
                  <td colSpan={1} className="fw-600 bg-dark text-light">
                    Beschreibung
                  </td>
                </tr>
                <tr>
                  <td>Besonderheiten</td>
                  <td>{product?.description?.Features}</td>
                </tr>
                <tr>
                  <td>Isolation</td>
                  <td>{product?.description?.Isolation}</td>
                </tr>
                <tr>
                  <td>BodenStärke</td>
                  <td>{product?.description?.strength}</td>
                </tr>
                <tr>
                  <td>Kranösen</td>
                  <td>{product?.description?.CraneSlot}</td>
                </tr>
                <tr>
                  <td>Transportkosten</td>
                  <td>{product?.description?.TransportCost}</td>
                </tr>
                <tr>
                  <td>Raumausstattung</td>
                  <td>{product?.description?.customization}</td>
                </tr>
                <tr>
                  <td>Zusätzliches Zubehör</td>
                  <td>{product?.description?.ExtraAccesories}</td>
                </tr>
                <tr>
                  <td>Rollladen</td>
                  <td>{product?.description?.Shutar}</td>
                </tr>
                <tr>
                  <td>Warmwasser für Dusche</td>
                  <td>{product?.description?.heater}</td>
                </tr>
                <tr>
                  <td>Wasserboiler</td>
                  <td>{product?.description?.geaser}</td>
                </tr>
                <tr>
                  <td>Heizung</td>
                  <td>{product?.description?.cables}</td>
                </tr>
                <tr>
                  <td>Frostwächter</td>
                  <td>{product?.description?.fridge}</td>
                </tr>
                <tr>
                  <td>Urinal</td>
                  <td>{product?.description?.Urinate}</td>
                </tr>
                <tr>
                  <td>Farbauswahl - 1</td>
                  <td>{product?.description?.ColorSelection}</td>
                </tr>
                <tr>
                  <td>Farbauswahl - 2</td>
                  <td>Container komplett Lackierung (inkl. Verarbeitung) 950 €</td>
                </tr>
                <tr>
                  <td>Preis Plus KDV</td>
                  <td>{product?.description?.PricePlusKDV}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalDetails;
