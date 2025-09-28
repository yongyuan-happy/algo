function multiply(A: number, B: number): number {
    let rep = 0;
    let base = 0;
    if (B === 0 || A === 0) return 0;
    if (A > B) {
        rep = B;
        base = A;
    } else {
        rep = A;
        base = B;
    }


    return multiply(rep - 1, base) + base;
};