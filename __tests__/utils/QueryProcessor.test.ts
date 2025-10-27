import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return name', () => {
        const query = "What is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "Anurag"
          ));
    });

    test('responds to "What is your Andrew ID?" correctly', () => {
  expect(QueryProcessor("What is your Andrew ID?")).toBe("aaryal");
});

test('responds to "What is 1 plus 35?" correctly', () => {
  const response = QueryProcessor("What is 1 plus 35?");
  expect(response).toBe("36");
});
});