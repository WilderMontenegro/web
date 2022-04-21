class RedSocial extends HTMLElement {
    connectedCallback() {
      this.innerHTML 
      = 
      `
      <div class="container-fluid  bg-gradient"  >
        <div class="container" >
          <h2 class="text-center">MIS REDES SOCIALES</h2>
          <hr>
          <!--Fila-->
          <div class="row text-center ">
            <!--Columna Facebook-->
            <div class="col-6 col-md-3 p-2  "  
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
                <div class="fs-1" style="color: #3b5998;">
                  <i class="fab fa-facebook-square"></i>
                </div>
                <h3>Facebook</h3>
                <div>
                    Más de <span class="fw-bold fs-3">120 </span> Seguidores
                </div>
                <div >
                  <hr>
                  <a class="btn btn-outline-success fw-bold" href="https://web.facebook.com/wildermontenegro22" role="button" Target="_blank" >Seguir <i class="fad fa-user-check"></i></a>
                </div>
            </div>
            <!--Columna Youtube-->
            <div class="col-6 col-md-3 p-2 "    
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
                <div class="fs-1" style="color: #bb0000;">
                    <i class="fab fa-youtube"></i>
                </div>
                <h3>Youtube</h3>
                <div>
                    Más de <span class="fw-bold fs-3">280 </span> Subscriptores.
                </div>
                <div class="mt-2">
                  <hr>
                    <a class="btn btn-outline-success fw-bold" href="https://www.youtube.com/c/WilderMontenegro" role="button" Target="_blank" >Suscribirse <i class="fas fa-sign-in-alt"></i></a>
                </div>
                
            </div>
            <!--Columna-->
            <div class="col-6 col-md-3 p-2 "   
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
                <div class="fs-1" style="color: #a00f52;">
                  <i class="fab fa-instagram"></i>
                </div>
                <h3>Instagram</h3>
                <div>
                    Más de <span class="fw-bold fs-3">50 </span> Seguidores.
                </div>
                <div class="mt-2">
                  <hr>
                    <a class="btn btn-outline-success fw-bold" href="https://www.instagram.com/wildermontenegro22" role="button" Target="_blank" >Seguir <i class="fad fa-user-check"></i></a>
                </div>
            </div>
            <!--Columna-->
            <div class="col-6 col-md-3 p-2 "   
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
                <div class="fs-1" style="color: #3b5998;">
                    <i class="far fa-globe"></i>
                </div>
                <h3>Página Web</h3>
                <div>
                    Comparte nuestra página web.
                <div class="mt-2">
                  <hr>
                    <a class="btn btn-outline-success fw-bold" href="https://api.whatsapp.com/send?text=https://web.facebook.com/wildermontenegro22" role="button" Target="_blank">Compartir <i class="fas fa-share-all"></i></a>
                </div>
                </div>
            </div>
        </div>
        </div>
          
      </div>

      `;
    }
  }
  
  customElements.define('redes-sociales', RedSocial);