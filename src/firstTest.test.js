import calculator from "./calculator";

describe("Add tests", () => {
  test("first", () => {
    const res = calculator(1, 2, "+");
    expect(res).toBe(3);
  });

  test("second", () => {
    const res = calculator(8, 20, "+");
    expect(res).toBe(28);
  });

  test("third", () => {
    const res = calculator(9, 99, "+");
    expect(res).not.toBe(100);
  });
});

describe("Division tests", () => {
  test("first", () => {
    const res = calculator(10, 2, "/");
    expect(res).toBe(5);
  });

  test("second", () => {
    const res = calculator(30, 20, "/");
    expect(res).toBe(1.5);
  });

  test("third", () => {
    const res = calculator(0, 0, "/");
    expect(res).not.toBe(1);
  });

  test("fourth", () => {
    const res = calculator(10, 10, "p");
    expect(res).toBe("Invalid operator");
  });
});
