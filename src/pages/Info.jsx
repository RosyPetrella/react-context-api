import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Info() {
  return (
    <>
      <main>
        <div className="container mt-3 pt-3 marketing">
          <div className="row">
            <div className="col-lg-4">
              <svg
                className="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>🐾 Orion</title>
                <rect
                  width="100%"
                  height="100%"
                  fill="var(--bs-secondary-color)"
                ></rect>
              </svg>
              <h2 className="fw-normal mt-3">🐾 Orion</h2>
              <p>
                Il più antico dei gatti guardiani, ha osservato la Terra per
                millenni. Si dice che abbia viaggiato attraverso i buchi neri e
                conosca i segreti dell’universo.
              </p>
            </div>
            <div className="col-lg-4">
              <svg
                className="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect
                  width="100%"
                  height="100%"
                  fill="var(--bs-secondary-color)"
                ></rect>
              </svg>
              <h2 className="fw-normal mt-3">✨ Bastet</h2>
              <p>
                Figlia dell’antico Egitto, Bastet ha guidato i faraoni con la
                sua saggezza. Oggi, continua a proteggere i gatti terrestri e a
                tramandare la loro conoscenza.
              </p>
            </div>
            <div className="col-lg-4">
              <svg
                className="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect
                  width="100%"
                  height="100%"
                  fill="var(--bs-secondary-color)"
                ></rect>
              </svg>
              <h2 className="fw-normal mt-3">🌙 Nyx</h2>
              <p>
                Un enigma avvolto nell’ombra. Si dice che Nyx possa viaggiare
                tra le dimensioni e comunicare con gli esseri di energia pura.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
