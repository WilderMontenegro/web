class MyFooter extends HTMLElement {
    connectedCallback() {
      this.innerHTML 
      = 
      `
      <div class=" text-center bg-black text-white py-2">
      <div>
          Contáctame
      </div>
      <div>
          Copyright © Todos los derechos reservados 2022.
      </div>
      </div>

      `;
    }
  }
  
  customElements.define('pie-de-pagina', MyFooter);