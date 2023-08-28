import { useState } from "react";

export default function LoginForm() {
  //state
  const [nouveauNom, setNouveauNom] = useState("");

  //comportements
  const handleSubmit = (event) => {
    event.preventDefault;
    alert("bonjour " + nouveauNom);
    setNouveauNom("");
  };

  const handleChange = (event) => {
    setNouveauNom(event.target.value);
    console.log(nouveauNom);
  };

  //affichage
  return (
    <div>
      <h1>Bienvenue chez nous</h1>
      <h2>Connectez-vous</h2>
      <form action="submit" onSubmit={handleSubmit}>
        <label>
          <input
            value={nouveauNom}
            type="text"
            name="name"
            placeholder="Entrez votre prénom"
            onChange={handleChange}
          />
        </label>
        <button label="Accédez à votre espace">Accédez à votre espace</button>
      </form>
    </div>
  );
}
