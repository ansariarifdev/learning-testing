import { describe, expect, it, vi } from "vitest";
import request from "supertest";

import { app } from "../src";
import { client } from "../lib/client";



describe("sum module", () => {
  
    vi.mock("../lib/client.ts", () => {
        return {
          
      }
  })
  it("sum of 2 and 3 should be 5", async () => {
    const response = await request(app).post("/sum").send({
      a: 2,
      b: 3,
    });
    expect(response.body.sum).toBe(5);
    expect(response.statusCode).toBe(200);
  });

  it("should given a wrong input message when one number is too much bigger", async () => {
    const response = await request(app).post("/sum").send({
      a: 2000000000000000,
      b: 2,
    });
    expect(response.statusCode).toBe(422);
    expect(response.body.message).toBe("Input can't be processed");
  });
});
