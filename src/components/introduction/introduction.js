import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import readmePath from "./README.md";

const style = {
  marginTop: "8px",
  background: "#f9dcdd",
};

const IntroductionApp = () => {
  const [readme, setReadme] = useState(null);
  /**
   * Le Hook d’effet permet l’exécution d’effets de bord dans les fonctions composants :
   */
  // Similaire à componentDidMount et componentDidUpdate :
  useEffect(() => {
    // Met à jour le titre du document via l’API du navigateur
    fetch(readmePath)
      .then(response => response.text())
      .then(text => {
        setReadme(text);
      });
    // Indique comment nettoyer l'effet :
    return () => {
      return;
    };
  }, [readme]); // N’exécute l’effet que si count a changé

  return (
    <div>
      <div style={style}>
        {readme === null ? (
          "Chargement....."
        ) : (
          <ReactMarkdown source={readme} />
        )}
      </div>
    </div>
  );
};

export default IntroductionApp;
