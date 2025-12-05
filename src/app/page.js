// page.js
import React from "react";
import "./globals.css";

import PerfilGlobal from "./components/PerfilGlobal";
import FichaProducto from "./components/FichaProducto";
import AvisoInline from "./components/AvisoInline";
import BadgeEstado from "./components/BadgeEstado";

const Page = () => (
  <div style={{ padding: "20px" }}>
    <h1>Mi Proyecto React</h1>
    <PerfilGlobal />
    <FichaProducto />
    <AvisoInline />
    <BadgeEstado />
  </div>
);

export default Page;
