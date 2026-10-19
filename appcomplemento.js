function renderizarClima(data, nombreCiudad) {
  const temperatura = data.current.temperature_2m;
  const humedad = data.current.relative_humidity_2m;
  const viento = data.current.wind_speed_10m;
  const altitud = data.current.elevation;
  const hora = data.current.time.slice(11, 16);

  const html = `
    <article class="tarjeta-clima">
      <h2>${nombreCiudad}</h2>
      <p class="altitud">📍 ${altitud} m.s.n.m.</p>

      <p class="temperatura">${temperatura}°C</p>

      <div class="detalles">
        <div class="detalle-item">
          <span class="etiqueta">Humedad</span>
          <span class="valor">${humedad}%</span>
        </div>
        <div class="detalle-item">
          <span class="etiqueta">Viento</span>
          <span class="valor">${viento} km/h</span>
        </div>
        <div class="detalle-item">
          <span class="etiqueta">Actualizado</span>
          <span class="valor">${hora}</span>
        </div>
      </div>
    </article>
  `;

  resultado.innerHTML = html;
}