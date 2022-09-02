import React from "react";
import referenzen from "../data/referenzen.json";
import Image from "next/image";
const Referenzen = () => {
  const cloudflareImagesLoader = ({ src, width }) => {
    // Note that `width` might be larger than you're expecting because of a device pixel ratio (DPR)

    // Next.js expects to see the width somewhere in the URL,
    // so we add the no-op `width` query parameter to suppress the warning
    // https://nextjs.org/docs/messages/next-image-missing-loader-width
    return `https://imagedelivery.net/Hd6PfXQgWuxwOTKaoptnYw/${src}/public`;
  };
  return (
    <div className="container pl-5 pr-5">
      <div className="col-12">
        <div className=" pl-5 pr-5 justify-content-center">
          <div className="pages-head mt-3 ps-2">
            <span>Referenzen</span>
          </div>
        </div>
      </div>
      <div className="row pl-5 pr-5 mt-3 mb-4">
        {referenzen.map((refe) => (
          <div key={refe.id} className="col-lg-4 col-md-6 col-12">
            <div className="border mb-3">
              <img className="w-100 shadow"  src={`https://imagedelivery.net/PadbDhNfBOcxGIOgnEMBuA/${refe.image.ima1}/public`} />
              <h3 className="referenzen-title mt-3 ms-3">{refe.title}</h3>

              <button className="mt-1 button-dark-small mb-4 ms-3">
                Zur Referenz
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Referenzen;
