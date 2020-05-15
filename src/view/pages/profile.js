export default () => {
    const viewProfile = `
    <h1>PROFILE</h1>
    `
    const divProfileElement = document.createElement("div");
    divProfileElement.innerHTML = viewProfile;
    return divProfileElement;
};