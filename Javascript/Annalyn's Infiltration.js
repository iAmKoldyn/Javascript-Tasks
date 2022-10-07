export function canExecuteFastAttack(knightIsAwake) {
    if(knightIsAwake) {
       return false;
    }  else {
       return true;
    }
   }
 
   export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
   if(knightIsAwake || archerIsAwake || prisonerIsAwake) {
     return true
   } 
     else {
     return false
     }
   }
 
   export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
     if(!archerIsAwake && prisonerIsAwake) {
       return true
     }
     else {
       return false
     }
   }
   
   export function canFreePrisoner(
     knightIsAwake,
     archerIsAwake, 
     prisonerIsAwake,
     petDogIsPresent
   ) {
     if ((petDogIsPresent && !archerIsAwake) || (!petDogIsPresent && (prisonerIsAwake && !knightIsAwake && !archerIsAwake))) {
       return true;
     } else {
       return false;
     }
   }