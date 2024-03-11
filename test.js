export const tests = [
    [1, 2, 3, 4, 5],
    [1, 1, 2, 2, 3, 3, 4, 4, 5, 5],
    Array.from({ length: 50 }, (_, i) => 1),
    Array.from({ length: 100 }, (_, i) => i % 100),
    Array.from({ length: 500 }, (_, i) => i % 300),
    Array.from({ length: 1000 }, (_, i) => i % 300),
];