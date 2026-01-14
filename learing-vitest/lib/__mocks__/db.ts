import { vi } from "vitest";

export const client = {
    request: {
        create: vi.fn(),
        update: vi.fn()
    }
}