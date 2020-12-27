export function levenshtein(chaineA, chaineB) {
  const distance = [];
  // Initialisation du tableau
  // Remplissage de la 1ere colonne (chaque valeur dans une ligne)
  for (let positionB = 0; positionB <= chaineB.length; positionB++) {
    distance[positionB] = [positionB];
  }
  // Remplissage de la 1ere ligne (chaque valeur dans une colonne)
  for (let positionA = 0; positionA <= chaineA.length; positionA++) {
    distance[0][positionA] = positionA;
  }
  // Processus
  // Remplissage du reste du tableau
  for (let positionA = 1; positionA <= chaineA.length; positionA++) {
    for (let positionB = 1; positionB <= chaineB.length; positionB++) {
      const cout = chaineA[positionA - 1] === chaineB[positionB - 1] ? 0 : 1;
      distance[positionB][positionA] = Math.min(
        distance[positionB - 1][positionA] + 1,
        distance[positionB][positionA - 1] + 1,
        distance[positionB - 1][positionA - 1] + cout
      );
    }
  }
  //console.log(distance);
  return distance[chaineB.length][chaineA.length];
}

export function similarite(chaineA, chaineB) {
  const levenshtein1 = levenshtein(chaineA, chaineB);
  let similarite = Math.floor((100-(levenshtein1/chaineA.length*100))*100)/100;
  //console.log(similarite);
  return similarite;
}