export default function Expert() {
    return (

        <>
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
        </>
    )
}