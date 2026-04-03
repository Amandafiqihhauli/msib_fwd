export default function Call() {
    return (

        <>
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
        </>
        
    )
}