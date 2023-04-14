import { useState } from 'react';
import '../assets/login.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  /* const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // handle form submission here
  }; */



  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("btj");
    try {
      const response = await fetch('http://localhost:3000/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: email,
          password: password
        })
      });
      if (response.redirected) {
        console.log("logged in");
        window.location.href = response.url;
        return;
      } else {
        const data = await response.json();
        console.log(data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <section className="vh-100" style={{ backgroundImage: "url('/background.jpg')"  }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100" style={{all: "unset"}}>
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0" style={{}} >
                <div className="col-md-6 col-lg-5 d-none d-md-block" >
                  <img
                    src='src/farmer.jpg'
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form onSubmit={ handleSubmit }>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i className="fas fa-cubes fa-2x me-3" style={{ color: "#ff6219" }}></i>
                        <span className="h1 fw-bold mb-0">Logo</span>
                      </div>
                      <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>
                        Prijavi se u sustav
                      </h5>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form2Example17"
                          className="form-control form-control-lg"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                        />
                        <label className="form-label" htmlFor="form2Example17">
                          Korisničko ime
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example27"
                          className="form-control form-control-lg"
                          value={password}
                          onChange={(event) => setPassword(event.target.value)}
                        />
                        <label className="form-label" htmlFor="form2Example27">
                          Lozinka
                        </label>
                      </div>
                      <div className="pt-1 mb-4">
                        <button className="submitBtn btn btn-dark " style={{width: "100%"}} type="submit">
                          Login
                        </button>
                      </div>
                      <a className="small text-muted" href="/test">
                        Zaboravljena lozinka?
                      </a>
                      <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                        Nemaš farmer račun? <a href="#!" style={{ color: "#393f81" }}>Registriraj se ovdje</a>
                      </p>
                      <a href="#!" className="small text-muted">
                        Terms of use.
                      </a>
                      <a href="#!" className="small text-muted">
                        Privacy policy
                      </a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
