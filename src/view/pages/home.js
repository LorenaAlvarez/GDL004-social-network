export default () => {
  const viewHome = `
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
  <div id="lista-marcadores"></div>`;
  const divElemt = document.createElement('div');
  divElemt.innerHTML = viewHome;
  return divElemt;
};