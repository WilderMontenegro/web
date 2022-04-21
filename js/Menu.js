class Menu extends HTMLElement {
    connectedCallback() {
      this.innerHTML 
      = 
      `
      <nav class="navbar navbar-expand-lg navbar-dark " style="background-color: #002136;">
      <div class="container-fluid ">
        <a class="navbar-brand" href="/index.html">
          <i class="fad fa-user-hard-hat"></i> MONTENEGRO
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/index.html"> <i class="fad fa-home"></i> INICIO</a>
            </li>

            <li class="nav-item dropdown ">
              <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="fas fa-cog"></i> INGENIERÍA CIVIL
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="/servicios"> <i class="fas fa-user-hard-hat"></i> Servicios</a></li>
                <li><a class="dropdown-item" href="/publicaciones"> <i class="fas fa-globe-americas"></i> Publicaciones</a></li>
                <li><a class="dropdown-item" href="/cursos-civil"> <i class="fas fa-tv"></i> Cursos</a></li>
              </ul>
            </li>
            
            <li class="nav-item dropdown ">
              <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="fad fa-book"></i> PREUNIVERSITARIO
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="/cursos/trigonometría-preuniversitaria"><i class="fas fa-ruler-triangle"></i> Trigonometría Pre</a></li>
                <li><a class="dropdown-item" href="/cursos/razonamiento-matematico-preuniversitario"><i class="fad fa-dice"></i> Raz. Matemático Pre</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="https://www.youtube.com/c/WilderMontenegro" Target="_blank"> <i class="fab fa-youtube" style="color: #e92019;"></i> Canal YouTube</a></li>
                <li><a class="dropdown-item" href="/Cermat-Shool.html" Target="_blank"> <i class="fad fa-school"  style="color: #030a64;"></i> Cermat School</a></li>
              </ul>
            </li>

            
          
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/sobre-mi.html"> <i class="fas fa-user-alt"></i> SOBRE MI</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">V.1.0.0</a>
            </li>
          </ul>
          <form class="d-flex">
            <a class="btn btn-outline-light" href="https://web.facebook.com/wildermontenegro22" role="button" Target="_blank" >Seguir <i class="fad fa-user-check"></i></a>
          </form>
        </div>
      </div>
    </nav>

      `;
    }
  }
  
  customElements.define('mi-header', Menu);
