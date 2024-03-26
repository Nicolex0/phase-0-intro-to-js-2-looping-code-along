function countDown(number) {
    
    if (typeof number !== 'number' || number <= 0 || !Number.isInteger(number)) {
      console.log("Please provide a positive integer.");
      return;
    }
    
    
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }

  function writeCards(names) {
    let thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
      thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return thankYouMessages;
  }
  
