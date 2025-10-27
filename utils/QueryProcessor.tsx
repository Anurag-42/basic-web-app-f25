export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "Anurag";
  }

  if (query.toLowerCase().includes("age")) {
    return "67";
  }

  if (query.toLowerCase().trim() === "what is your andrew id?") {
  return "aaryal";
}

if (query.toLowerCase().includes("1 plus 35")) {
    return (1 + 35).toString();
  }

const arithmeticMatch = query.toLowerCase().match(/what is (\d+) (plus|minus|multiplied by|times|divided by) (\d+)\?/);
if (arithmeticMatch) {
  const num1 = parseInt(arithmeticMatch[1], 10);
  const operator = arithmeticMatch[2];
  const num2 = parseInt(arithmeticMatch[3], 10);

  switch (operator) {
    case "plus":
      return (num1 + num2).toString();
    case "minus":
      return (num1 - num2).toString();
    case "multiplied by":
    case "times":
      return (num1 * num2).toString();
    case "divided by":
      return (num1 / num2).toString();
    default:
      return "";
  }
}

const primesMatch = query.toLowerCase().match(/which of the following numbers are primes: ([\d, ]+)\?/);
if (primesMatch) {
  const numbers = primesMatch[1].split(",").map(n => parseInt(n.trim(), 10));

  const isPrime = (n: number) => {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  };

  return numbers.filter(isPrime).join(", ");
}

const sqCubeMatch = query.toLowerCase().match(/which of the following numbers is both a square and a cube: ([\d, ]+)\?/);
if (sqCubeMatch) {
  const numbers = sqCubeMatch[1].split(",").map(n => parseInt(n.trim(), 10));

  const isSixthPower = (n: number) => {
    const sixthRoot = Math.round(Math.pow(n, 1/6));
    return sixthRoot ** 6 === n;
  };

  const result = numbers.filter(isSixthPower);
  return result.join(", ");
}

const scrabbleMatch = query.toLowerCase().match(/what is the scrabble score of (\w+)\?/);
if (scrabbleMatch) {
  const word = scrabbleMatch[1].toUpperCase();
  const scores: Record<string, number> = {
    A:1, B:3, C:3, D:2, E:1, F:4, G:2, H:4,
    I:1, J:8, K:5, L:1, M:3, N:1, O:1, P:3,
    Q:10, R:1, S:1, T:1, U:1, V:4, W:4, X:8, Y:4, Z:10
  };
  let total = 0;
  for (const char of word) {
    total += scores[char] || 0;
  }
  return total.toString();
}

const arithmeticExprMatch = query.toLowerCase().match(/what is (.+)\?/);
if (arithmeticExprMatch) {
  let expr = arithmeticExprMatch[1];

  // Replace words with symbols
  expr = expr
    .replace(/plus/g, '+')
    .replace(/minus/g, '-')
    .replace(/multiplied by|times/g, '*')
    .replace(/divided by/g, '/');

  try {
    // Evaluate expression
    const result = eval(expr);
    return result.toString();
  } catch {
    return "";
  }
}


  return "";
}
