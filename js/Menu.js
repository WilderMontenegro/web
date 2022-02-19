class Menu extends HTMLElement {
    connectedCallback() {
      this.innerHTML 
      = 
      `
    <nav class="navbar navbar-expand-lg navbar-dark bg-gradient" style="background-color: #003558;">
      <div class="container-fluid">
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
                  <i class="fad fa-book"></i> CURSOS
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="/cursos/trigonometría-preuniversitaria.html"><i class="fas fa-ruler-triangle"></i> Trigonometría Pre</a></li>
                <li><a class="dropdown-item" href="/cursos/razonamiento-matematico-preuniversitario.html"><i class="fad fa-dice"></i> Raz. Matemático Pre</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#"> <i class="fab fa-youtube" style="color: #e92019;"></i> Canal YouTube</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown ">
              <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="fas fa-cog"></i> INGENIERÍA CIVIL
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#"> TRABAJOS DE INGENIERÍA</a></li>
                <li><a class="dropdown-item" href="#"> </a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#"> BLEAN S.A.C.</a></li>
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
            <button class="btn btn-outline-info" type="submit"><i class="fal fa-running"></i> SEGUIR </button>
          </form>
        </div>
      </div>
    </nav>

      `;
    }
  }
  
  customElements.define('mi-header', Menu);
