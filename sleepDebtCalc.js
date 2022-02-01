const getSleepHours = (day) =>{
 switch (day){
    case 'monday':
      return 8
      break;
    case 'tuesday':
      return 8
      break;
    case 'wednesday':
      return 5
      break;
    case 'thrusday':
      return 6
      break;
    case 'friday':
      return 7
      break;
    case 'saturday':
      return 8
      break;
    case 'sunday':
      return 8
      break;
      
    default:
      return 'error!'
      break;
  }
};

const getActualSleepHours = () =>{
return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday')
};

console.log(getSleepHours('monday'));

console.log(getActualSleepHours());
