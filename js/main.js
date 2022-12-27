const passengers = [
    {
      id: 1,
      passengerName: "Freddie Mercury",
      isVegetarianOrVegan: false,
      connectedFlights: 2,
    },
    {
      id: 2,
      passengerName: "Amy Winehouse",
      isVegetarianOrVegan: true,
      connectedFlights: 4,
    },
      {
      id: 3,
      passengerName: "Kurt Cobain",
      isVegetarianOrVegan: true,
      connectedFlights: 3,
    },
       {
      id: 3,
      passengerName: "Michael Jackson",
      isVegetarianOrVegan: true,
      connectedFlights: 1,
    },
];
console.log(passengers);
let passenger=[];
for(i=0;i<Object.keys(passengers).length;i++){
    passenger[i]=passengers[i].passengerName;
}
console.log(passenger);

let veg=[];
let k=0;
for(j=0;j<Object.keys(passengers).length;j++){
    if(passengers[j].isVegetarianOrVegan==true){
        veg[k]=passengers[j].passengerName;
        k++;
    }
}
console.log(veg);
