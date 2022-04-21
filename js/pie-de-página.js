class MyFooter extends HTMLElement {
    connectedCallback() {
      this.innerHTML 
      = 
      `
      <div class=" text-center  text-white py-2 " style="background-color: #000f18;">


        <div >
            <span > <a href="/sobre-mi.html" class="text-decoration-none"> Contáctame </a>  </span>  - <span> <a href="/terminos-y-condiciones.html" class="text-decoration-none"> Términos y Condiciones</a> </span> 
        </div>
        <div>
            Copyright © All rights reserved 2022.
        </div>
      </div>



      `;
    }
  }
  
  customElements.define('pie-de-pagina', MyFooter);