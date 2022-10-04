import f from "../problems/142-LinkedListCycle2";
import { LLMaker } from "../lib";

describe("main", () => {
  it("core", () => {
    const a = [3,2,0,-4];
    const A = LLMaker(a);
    A[3].next = A[1];
    expect(f(A[0])).toBe(1);

    // const b = [1,2];
    // const B = LLMaker(b);
    // B[1].next = B[0];
    // expect(f(B[0])).toBe(0);

    const c = [1];
    const C = LLMaker(c);
    console.log(`C`, C)
    
    expect(f(C[0])).toBe(null);
  });
});
