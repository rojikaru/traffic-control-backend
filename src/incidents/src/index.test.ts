import { describe, expect, test } from 'bun:test';

describe('incidents', () => {
    test('Server should be up and running', async () => {
        const response = await fetch('http://localhost:3000');
        const data = await response.text();
        expect(data).toBe('Hello Elysia');
    });
});
