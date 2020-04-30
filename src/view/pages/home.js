export default () => {
  const viewHome = `
  <div class="header">
  <p>home</p>
  </div>
  <div class="homeContainer">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
  <div>10</div>
  <div>11</div>
  <div>12</div>
  </div>
  `




  /* `
  <h1>Bienvenidx!!!</h1>
  <form id="form-marcadores">
    <div>
      <label for="nombre-input">Nombre</label>
      <input name="nombre" type="text" id="nombre-input"/>
    </div>
    <div>
      <label for="descripcion-input">Descripcion</label>
      <input name="descripcion" type="text"id="descripcion-input"/>
    </div>
    <div>
      <label for="url-input">URLs</label>
      <input name="url" type="text" id="url-input">
    </div>
    <button type="submit">Añadir</button>
  </form>
  <div id="lista-marcadores"></div>`; */
  const divElemt = document.createElement('div');
  divElemt.innerHTML = viewHome;
  return divElemt;
};