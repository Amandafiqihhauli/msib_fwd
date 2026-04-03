export default function Main() {
    return (

        <>
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
        </>
        
    )
}