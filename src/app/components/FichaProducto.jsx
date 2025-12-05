"use client";
import React from "react";
import styles from "./FichaProducto.module.css";

const FichaProducto = () => {
  return (
    <div className={styles.ficha}>
      <h2>Producto Destacado</h2>
      <p>Marca: Nike</p>
      <p>Modelo: Air Max</p>
      <p>Precio: $200</p>
    </div>
  );
};

export default FichaProducto;
