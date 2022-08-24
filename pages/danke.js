import React from "react";
import Image from "next/image";
const Danke = () => {
  return (
    <div className="danke mt-17 ">
      <div className="danke-page ">
        <div className="">
          <Image width={80} height={80} src="/assets/img/danke.svg" />
        </div>
        <p className="fw-600 fz-20">Vielen danke!</p>
        <p className="fw-300 fz-18 text-center danke-text">
          Ihre Nachricht wurde erfolgreich gesendet. <br/> Unsere zuständigen Abteilungen werden sich so schnell wie möglich mit Ihnen in Verbindung setzen.{" "}{" "}
        </p>
        <p className="fw-300 fz-18">
        
        </p>
      </div>
    </div>
  );
};

export default Danke;
