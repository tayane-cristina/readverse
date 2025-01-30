import React from "react";

const TextLimited = ({ text, limit }) => {
  // Corta o texto com base no limite e adiciona reticências, se necessário
  const textUpdate = text.length > limit ? text.slice(0, limit) + "..." : text;

  return <p className="text-limited">{textUpdate}</p>;
};

export default TextLimited