
class atm{
       input=2000
        input=500
}

const atmBankNotes = {100: 20, 500: 4};
function getMoneyFormAtm(amount, atmBankNotes) {
  // Check amount greater than zero
  if(amount <= 0){
    return "Please enter an amount greater than zero"
  }

  // Сonverting an object to an array with sorting
  const atmBankNotesArr = Object.entries(atmBankNotes).map(([nominal, num]) => [Number(nominal), num]).sort((a, b) => b[0] - a[0]);

  const result = [];
  
  // Iteration of array bankNotes
  for (let i = 0; i < atmBankNotesArr.length; i++) {
    const [nominal, num] = atmBankNotesArr[i];
    let availableAmount = nominal * num;

    // Check available Amount, reducing the amount and write banknotes to the result
    while (availableAmount && amount >= nominal) {
      amount -= nominal;
      availableAmount -= nominal;
      result.push(nominal);
    }
  } 

  // Check if not full amount was searched
  if(amount > 0) {
    return `Failed to issue this amount, try another`
  }

  return result
}

getMoneyFormAtm(500,2000,atmBankNotes)
module.exports=atm;