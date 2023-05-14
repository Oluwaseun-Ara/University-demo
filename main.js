class MyNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
  
        @media screen and (max-width: 372px) {
          #formb {
            margin-top: 15px;
          }
        }
      </style>
    </head>
  
    <body>
      <!-- nav bar -->
      <div class="bg-top navbar-light">
        <div class="container-fluid">
          <div
            class="row no-gutters d-flex align-items-center align-items-stretch"
          >
            <div class="col-md-4 d-flex align-items-center py-4 fw-bold fs-3">
              <a
                class="navbar-brand"
                href=""
                >Divine. &nbsp;<span class="fs-5 pt-0 mt-0">University</span></a
              >
            </div>
            <div class="col-lg-8 d-block">
              <div class="row d-flex">
                <div
                  class="col-md d-flex topper align-items-center align-items-stretch py-md-4 pb-3"
                >
                  <div
                    class="icon d-flex justify-content-center align-items-center pe-3"
                  >
                    <span id="orangeicon"
                      ><i class="fa-solid fa-paper-plane"></i
                    ></span>
                  </div>
                  <div class="text fw-bold">
                    <span>Email</span><br />
                    <span>*********@email.com</span>
                  </div>
                </div>
                <div
                  class="col-md d-flex topper align-items-center align-items-stretch py-md-4"
                >
                  <div
                    class="icon d-flex justify-content-center align-items-center pe-3"
                  >
                    <span id="orangeicon"><i class="fa-solid fa-phone"></i></span>
                  </div>
                  <div class="text fw-bold">
                    <span>Call</span><br />
                    <span>Call Us: +234 000 000 0000</span>
                  </div>
                </div>
                <div
                  class="col-md topper d-flex align-items-center justify-content-end"
                >
                  <p class="mb-0">
                    <a
                      href=""
                      class="btn py-2 px-3 text-dark d-flex align-items-center justify-content-center fw-semibold"
                      id="orange"
                    >
                      <span>Apply now</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- nav 2 -->
      <nav
        class="navbar navbar-expand-lg w-100 mx-auto"
        id="nav"
      >
        <div class="container-fluid">
          <button
            class="navbar-toggler bg-secondary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>Menu
          </button>
          <div class="formb">
            <form
              class="d-flex"
              role="search"
              id="formb"
            >
              <input
                class="form-control me-1 bg-transparent text-light"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="btn bg-transparent text-light"
                type="submit"
              >
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>
          <div
            class="collapse navbar-collapse text-light"
            id="navbarTogglerDemo03"
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-light">
              <li class="nav-item">
                <a
                  class="nav-link active text-light"
                  aria-current="page"
                  href="./index.html"
                  >Home</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active text-light"
                  aria-current="page"
                  href="./about.html"
                  >About</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active text-light"
                  aria-current="page"
                  href="./courses.html"
                  >Courses</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active text-light"
                  aria-current="page"
                  href="./contact.html"
                  >Contact</a
                >
              </li>
            </ul>
            <div class="forma">
              <form
                class="d-flex"
                role="search"
                id="forma"
              >
                <input
                  class="form-control me-1 bg-transparent text-light"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  class="btn bg-transparent text-light"
                  type="submit"
                >
                  <i class="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
      <MyNav></MyNav>`;
  }
}

customElements.define("nav-bar", MyNav);

class MyFoot extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
    .card-footer {
        display: flex;
        justify-content: space-evenly;
    }
    
    footer li {
        list-style-type: square;
        margin-bottom: 10px;
        margin-left: -20px;
        font-size: 13px;
        color: white;
    }
    
    footer li:hover {
        color: #422057ff;
    }
    
    footer a {
        text-decoration: none;
        color: white;
    }
    
    footer input {
        background-color: transparent;
        font-weight: bold;
        font-size: 18px;
        text-align: center;
        margin-bottom: 20px;
        color: white;
        padding: 8px;
    }
    
    footer #email::placeholder {
        background-color: transparent;
    }
    
    footer button {
        border: 1px solid white;
        background-color: transparent;
        text-align: center;
        width: 258px;
        padding: 8px;
        color: white;
    }
    
    footer button:hover {
        background-color: #422057ff;
        border: transparent;
    }
    
    footer #icon1,
    footer #icon2,
    footer #icon3 {
        padding: 5px 10px;
        color: white;
    }
    
    footer #icon1:hover {
        color: blueviolet;
    }
    
    footer #icon2:hover {
        color: #fcf951ff;
    }
    
    footer #icon3:hover {
        color: teal;
    }
    
    @media screen and (max-width:970px) {
        .card-footer {
            display: grid;
            gap: 50px;
            padding: 0px 30px;
            grid-template-columns: auto auto;
        }
    }
    
    @media screen and (max-width:620px) {
        .card-footer {
            display: grid;
            grid-template-columns: auto;
        }
    }
    
    @media screen and (max-width:310px) {
        footer button {
            width: 220px;
        }
        footer input {
            width: 220px;
        }
    }
</style>

<body>
    <footer class="bg-dark container-fluid p-0 m-0 w-100 text-light">
        <section class="card-footer pt-5 mx-auto px-3">
            <!-- have a question -->
            <div class="col1">
                <h2 class="fs-5 mb-4">Have a Questions?</h2>
                <div class="row mb-4">
                    <div class="col d-flex">
                        <i class="fa fa-map-marker" id="callicon" aria-hidden="true"></i>
                        <h4 class="fs-6 ps-4">Lorem, ipsum dolor.<br> Lorem ipsum dolor sit amet.</h4>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col d-flex">
                            <i class="fa fa-phone" aria-hidden="true"></i>
                            <h4 class="fs-6 ps-4">+234 *** *** ****</h4>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col d-flex">
                            <i class="fa fa-envelope" aria-hidden="true"></i>
                            <h4 class="fs-6 ps-4">info@yourdomain.com</h4>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col d-flex">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                        <h4 class="fs-6 ps-4">info@yourdomain.com</h4>
                    </div>
                </div>
            </div>
            <!-- recent blog -->
            <div class="col2">
                <h2 class="fs-5 mb-4">Recent Blog</h2>
                <h4 class="fs-6">God is the Greatest of all.</h4>
                <br />
                <div class="row">
                    <div class="col d-flex">
                        <i class="fa fa-calendar" aria-hidden="true"></i>
                        <h6 class="fs-6 ps-2 text-secondary">June 27, 2019</h6>
                    </div>
                </div>
                <div class="row">
                    <div class="col d-flex">
                        <i class="fa fa-user" aria-hidden="true"></i>
                        <h6 class="fs-6 ps-2 text-secondary">Admin <span><i class="fa-thin fa fa-message ps-2" aria-hidden="true"></i></span class="text-secondary">19</h6>
                    </div>
                </div>
                <h4 class="fs-6 mt-3">God is the Greatest of all.</h4>
                <br />
                <div class="row">
                    <div class="col d-flex">
                        <i class="fa fa-calendar" aria-hidden="true"></i>
                        <h6 class="fs-6 ps-2 text-secondary">June 27, 2019</h6>
                    </div>
                </div>
                <div class="row">
                    <div class="col d-flex">
                        <i class="fa fa-user" aria-hidden="true"></i>
                        <h6 class="fs-6 ps-2 text-secondary">Admin <span><i class="fa-thin fa fa-message ps-2" aria-hidden="true"></i></span class="text-secondary">19</h6>
                        </div>
                </div>
            </div>
<!-- links -->
            <div class="col3 text-light">
                <h2 class="fs-5 mb-4">Links</h2>
                <ul>
                    <li><a href="./index.html">Home</a></li>
                    <li><a href="./about.html">About</a></li>
                    <li><a href="./courses.html">Courses</a></li>
                    <li><a href="./contact.html">Contact</a></li>
                </ul>
            </div>
<!-- suscribe -->
            <div class="col4">
                <h2 class="fs-5 mb-4">Subscribe Us!</h2>
                <form action="#">
                    <input type="email" name="email" id="email" placeholder="Enter Email" required>
                    <br />
                    <button type="submit">Subscribe</button>
                </form>
                <div class="connect">
                    <h2 class="fs-5 mt-4">Connect With Us</h2>
                    <div class="icon mt-4">
                        <a href="#"><i id="icon1" class="bi bi-facebook fs-4"></i></a>
                        <a href="#"><i id="icon2" class="bi bi-instagram fs-4"></i></a>
                        <a href="#"><i id="icon3" class="bi bi-twitter fs-4"></i></a>
                    </div>
                </div>
            </div>
        </section>
        <p class="card-footer text-light text-center pt-5 mb-0 pb-4 mx-auto">Copyright &copy;2019 All rights reserved | This Website is made by the Designer Team</p>
    </footer>
</body>
`;
  }
}

customElements.define("foot-er", MyFoot);
