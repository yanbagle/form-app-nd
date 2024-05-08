import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [formErr, setFormErr] = useState(null);
  const [genderOpts, setGenderOtps] = useState({
    all: true,
    m: false,
    f: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setFormErr("missing name");
    }
  };

  const btnOption = (btnText, key) => {
    return (
      <input
        type="button"
        className={`base-btn ${
          genderOpts[btnText] ? "active-btn" : "inactive-btn"
        }`}
        key={key}
        value={btnText}
        onClick={(e) => {
          const key = e.target.value;
          const optsCopy = { ...genderOpts };
          optsCopy[key] = !optsCopy[key];
          if (optsCopy["m"] && optsCopy["f"]) {
            optsCopy["all"] = true;
          } else if (optsCopy["all"] && (optsCopy["m"] || optsCopy["f"])) {
            optsCopy["all"] = false;
          }
          setGenderOtps(optsCopy);
        }}
      />
    );
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <section>Name:</section>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        {formErr && <p className="form-error">name missing</p>}
        <section>Audiences</section>
        <label>gender</label>
        <section className="options">
          {Object.keys(genderOpts).map((btnText, key) =>
            btnOption(btnText, key)
          )}
        </section>
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
