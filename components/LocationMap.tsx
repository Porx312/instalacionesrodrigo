"use client";

import { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 40.416775, // Replace with your company's latitude
  lng: -3.70379, // Replace with your company's longitude
};

export default function LocationMap() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Nuestra Ubicación
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Cómo Encontrarnos</h3>
            <p className="mb-4">
              Estamos ubicados en el corazón de la ciudad, fácilmente accesible
              por transporte público y coche.
            </p>
            <address className="not-italic mb-4">
              <strong>Dirección:</strong>
              <br />
              Calle de la Reforma, 123
              <br />
              28001 Madrid, España
            </address>
            <div className="mb-4">
              <strong>Teléfono:</strong> +34 91 234 5678
              <br />
              <strong>Email:</strong> info@tureforma.com
            </div>
            <div>
              <strong>Horario:</strong>
              <br />
              Lunes a Viernes: 9:00 - 18:00
              <br />
              Sábados: 10:00 - 14:00
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            {isClient && (
              <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  center={center}
                  zoom={14}
                >
                  <Marker position={center} />
                </GoogleMap>
              </LoadScript>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
