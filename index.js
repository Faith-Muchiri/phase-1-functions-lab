// Code your solution in this file!

function distanceFromHqInBlocks(d) {
  if(d>42){
    return d -42 ;
  }else{
    return 42-d;
  }
    //returns the number of blocks given a value
  }

function distanceFromHqInFeet(d) {
  if(d>42){
    return (d -42)*264 ;
  }else{
    return (42-d)*264;
  }
   

}
function distanceTravelledInFeet(start, destination) {
  let d;
  if(destination > start){
    return d=(destination-start)*264 ;
  }else{
    return d=(start-destination)*264;
  }
    //returns the number of feet traveled
  }

  function calculatesFarePrice(start, destination) {
    const d=distanceTravelledInFeet(start, destination);
    if(d<=400){
      return 0;
    }else if((d>400) && (d<=2000)){
      return (d-400)*.02;
    }else if((d>2000) && (d<=2500)){
      return 25;
    }else{
      return 'cannot travel that far';
    }
  }