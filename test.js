require("dotenv/config");

function test(expectedSecret) {
    const secretMatches = process.env.MEANING_OF_LIFE == expectedSecret;
    console.log(`The meaning of life is ${process.env.MEANING_OF_LIFE}`);
    console.log(`The variable is ${process.env.VARIABLE}`);
    console.log(`The secret is ${process.env.SECRET}`);
    console.log(`The secret does${secretMatches ? "" : " not"} match!`);
    return secretMatches;
  }
  
  test(42)