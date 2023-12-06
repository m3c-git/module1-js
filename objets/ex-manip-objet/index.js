let voiture = {
    Marque: "Ford",
    AnneeBabrication: "1969",
    dateAchat: new Date("2010-11-5"),
    Passager: ["Pierre", "Harry"],
};

for(key in voiture){
    const valeur = voiture[key]
    console.log(key + ' : ' + valeur)
}
