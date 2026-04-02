function App() {
  
  return (
    <>
      <div class="container">

        {/* HEADER */}
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          
          <div className="col-md-3 mb-2 mb-md-0">
            <a href="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
              <i className="fa-solid fa-book fa-2xl" style={{ color: "#74c0fc" }}></i>
              <span className="ms-2 fs-4">bookstore</span>
            </a>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" className="nav-link px-2">Home</a></li>
            <li><a href="#book" className="nav-link px-2">Book</a></li>
            <li><a href="#team" className="nav-link px-2">Team</a></li>
            <li><a href="#contact" className="nav-link px-2">Contact</a></li>

          </ul>

          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">Login</button>
            <button type="button" className="btn btn-primary">Register</button>
          </div>

        </header>

        {/* HERO/KONTEN */}
        <div className="container my-5">
          <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            
            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
              <h1 className="display-4 fw-bold lh-1">Atomic Habits: Perubahan kecil yang memberikan hasil luar biasa</h1>
              
              <p className="lead">
                Cara mudah dan terbukti untuk membentuk kebiasaan baik dan menghentikan kebiasaan buruk. Buku ini memberikan strategi praktis untuk merancang lingkungan yang mendukung perubahan positif, mengatasi rintangan, dan mencapai tujuan jangka panjang dengan konsistensi.
              </p>

              <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">
                  Buy Now
                </button>

                <button type="button" className="btn btn-outline-secondary btn-lg px-4">
                  Detail
                </button>
              </div>
            </div>

            <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
              <img className="rounded-lg-3" src="https://picsum.photos/720/600" alt="" width="720" />
            </div>

          </div>
        </div>

        {/* PRODUCTS LIST */}
        <main>

          {/* JUDUL / HERO */}
          <section className="py-5 text-center container" id="book">
            <div className="row py-lg-5">
              <div className="col-lg-6 col-md-8 mx-auto">

                <h1 className="fw-light">Best Selling Book</h1>

                <p className="lead text-body-secondary">
                  Something short and leading about the collection below—its contents,
                  the creator, etc. Make it short and sweet, but not too short so folks
                  don’t simply skip over it entirely.
                </p>

                <p>
                  <a href="#" className="btn btn-primary my-2 m-2">Views</a>
                  <a href="#" className="btn btn-secondary my-2">Other Book</a>
                </p>

              </div>
            </div>
          </section>

          {/* PRODUCT SECTION */}
          <section className="py-5 bg-body-tertiary">
            <div className="container">

              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">

                {/* PRODUCT 1 */}
                <div className="col">
                  <div className="card shadow-sm h-100">
                    <img 
                      src="https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL.jpg"
                      className="card-img-top"
                      height="300"
                      style={{objectFit:"cover"}}
                    />

                    <div className="card-body">
                      <h5 className="card-title">Atomic Habits</h5>
                      <p className="card-text">
                        Buku karya James Clear tentang bagaimana perubahan kecil
                        dalam kebiasaan sehari-hari dapat menghasilkan hasil yang
                        luar biasa dalam jangka panjang.
                      </p>

                      <div className="btn-group">
                        <button className="btn btn-sm btn-outline-primary me-2">View</button>
                        <button className="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* PRODUCT 2 */}
                <div className="col">
                  <div className="card shadow-sm h-100">
                    <img 
                      src="https://images-na.ssl-images-amazon.com/images/I/71UwSHSZRnS.jpg"
                      className="card-img-top"
                      height="300"
                      style={{objectFit:"cover"}}
                    />

                    <div className="card-body">
                      <h5 className="card-title">Rich Dad Poor Dad</h5>
                      <p className="card-text">
                        Buku finansial terkenal karya Robert Kiyosaki yang
                        mengajarkan perbedaan pola pikir orang kaya dan orang
                        miskin dalam mengelola uang dan investasi.
                      </p>

                      <div className="btn-group">
                        <button className="btn btn-sm btn-outline-primary me-2">View</button>
                        <button className="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* PRODUCT 3 */}
                <div className="col">
                  <div className="card shadow-sm h-100">
                    <img 
                      src="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                      className="card-img-top"
                      height="300"
                      style={{objectFit:"cover"}}
                    />

                    <div className="card-body">
                      <h5 className="card-title">The Psychology of Money</h5>
                      <p className="card-text">
                        Buku karya Morgan Housel yang menjelaskan bagaimana
                        perilaku manusia mempengaruhi cara kita mengelola uang
                        dan membuat keputusan finansial.
                      </p>

                      <div className="btn-group">
                        <button className="btn btn-sm btn-outline-primary me-2">View</button>
                        <button className="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* PRODUCT 4 */}
                <div className="col">
                  <div className="card shadow-sm h-100">
                    <img 
                      src="https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg"
                      className="card-img-top"
                      height="300"
                      style={{objectFit:"cover"}}
                    />

                    <div className="card-body">
                      <h5 className="card-title">Think and Grow Rich</h5>
                      <p className="card-text">
                        Buku klasik pengembangan diri oleh Napoleon Hill
                        yang membahas mindset sukses, motivasi, dan cara
                        mencapai kekayaan melalui pola pikir yang benar.
                      </p>

                      <div className="btn-group">
                        <button className="btn btn-sm btn-outline-primary me-2">View</button>
                        <button className="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* PRODUCT 5 */}
                <div className="col">
                  <div className="card shadow-sm h-100">
                    <img 
                      src="https://images-na.ssl-images-amazon.com/images/I/71tbalAHYCL.jpg"
                      className="card-img-top"
                      height="300"
                      style={{objectFit:"cover"}}
                    />

                    <div className="card-body">
                      <h5 className="card-title">Deep Work</h5>
                      <p className="card-text">
                        Buku karya Cal Newport yang menjelaskan pentingnya
                        fokus mendalam untuk menghasilkan pekerjaan berkualitas
                        tinggi di era penuh distraksi.
                      </p>

                      <div className="btn-group">
                        <button className="btn btn-sm btn-outline-primary me-2">View</button>
                        <button className="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* PRODUCT 6 */}
                <div className="col">
                  <div className="card shadow-sm h-100">
                    <img 
                      src="https://images-na.ssl-images-amazon.com/images/I/71-4MkLN5jL.jpg"
                      className="card-img-top"
                      height="300"
                      style={{objectFit:"cover"}}
                    />

                    <div className="card-body">
                      <h5 className="card-title">Start With Why</h5>
                      <p className="card-text">
                        Buku karya Simon Sinek yang mengajarkan bahwa
                        pemimpin hebat selalu memulai dengan "mengapa"
                        untuk menginspirasi orang lain.
                      </p>

                      <div className="btn-group">
                        <button className="btn btn-sm btn-outline-primary me-2">View</button>
                        <button className="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </section>


        </main>

        {/* TEAM SECTION */}
        <section className="py-5 container" id="team">
          <div className="row text-center mb-5">
            <div className="col">
              <h2 className="fw-bold">Our Team</h2>
              <p className="text-body-secondary">
                Meet the people behind our bookstore
              </p>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-md-3 g-4 text-center">

            {/* TEAM MEMBER 1 */}
            <div className="col">
              <div className="card shadow-sm border-0 p-4">
                <img
                  src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
                  className="rounded-circle mx-auto d-block mb-3 shadow"
                  style={{ width: "150px", height: "150px", objectFit: "cover" }}
                  alt="team"
                />
                <div className="card-body">
                  <h5 className="card-title mb-1">Amanda Fiqih Hauli</h5>
                  <p className="text-body-secondary">Founder & Developer</p>
                </div>
              </div>
            </div>

            {/* TEAM MEMBER 2 */}
            <div className="col">
              <div className="card shadow-sm border-0 p-4">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
                  className="rounded-circle mx-auto d-block mb-3 shadow"
                  style={{ width: "150px", height: "150px", objectFit: "cover" }}
                  alt="team"
                />
                <div className="card-body">
                  <h5 className="card-title mb-1">John Doe</h5>
                  <p className="text-body-secondary">UI/UX Designer</p>
                </div>
              </div>
            </div>

            {/* TEAM MEMBER 3 */}
            <div className="col">
              <div className="card shadow-sm border-0 p-4">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
                  className="rounded-circle mx-auto d-block mb-3 shadow"
                  style={{ width: "150px", height: "150px", objectFit: "cover" }}
                  alt="team"
                />
                <div className="card-body">
                  <h5 className="card-title mb-1">Jane Smith</h5>
                  <p className="text-body-secondary">Marketing Manager</p>
                </div>
              </div>
            </div>

          </div>
        </section>



        {/* CONTACT SECTION */}
        <section className="py-5 bg-body-tertiary" id="contact">
          <div className="container">

            <div className="row text-center mb-4">
              <div className="col">
                <h2 className="fw-bold">Contact Us</h2>
                <p className="text-body-secondary">
                  If you have any questions feel free to contact us
                </p>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-md-6">

                <form>

                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" placeholder="Your name"/>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" placeholder="Your email"/>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea className="form-control" rows="4" placeholder="Your message"></textarea>
                  </div>

                  <button className="btn btn-primary w-100">
                    Send Message
                  </button>

                </form>

              </div>
            </div>

          </div>
        </section>



        {/* FOOTER */}
        <div className="container">
          <footer className="py-3 my-4">

            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-body-secondary">Home</a>
              </li>
              <li className="nav-item">
                <a a href="#book" className="nav-link px-2">Book</a>
              </li>
              <li><a href="#team" className="nav-link px-2">Team</a></li>
              <li><a href="#contact" className="nav-link px-2">Contact</a></li>
            </ul>

            <p className="text-center text-body-secondary">
              &copy; 2026 Amanda Fiqih Hauli
            </p>



          </footer>
        </div>





      </div>

    </>
  )
}

export default App
