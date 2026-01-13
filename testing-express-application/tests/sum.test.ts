import { describe, expect, it } from "@jest/globals";
import request from "supertest";
import { app } from "../src";

describe("sum module",  () => {
    it("should add two positive numbers", async () => {
        const response = await request(app).post("/sum").send({
            a: 2,
            b: 3
        })
        expect(response.body.sum).toBe(5);
    })

    it("should add a positive and a negative number", async () => {
        const response = await request(app).post("/sum").send({
            a: 2, 
            b: -2
        })
        expect(response.body.sum).toBe(0);
    })

    it("should add two negative numbers", async () => {
        const response = await request(app).post("/sum").send({
            a: -2, 
            b: -2
        })
        expect(response.body.sum).toBe(-4);
    })

    it("should fail when a number is too big", async () => {
        const response = await request(app).post("/sum").send({
            a: 1000000000, 
            b: 2
        })
        expect(response.statusCode).toBe(422);
        expect(response.body.message).toBe("Input data can't be processed");
    })
})

describe("product module", () => {
    it("should multiply two positive numbers", async () => {
        const response = await request(app).post("/multiply").send({
            a: 2, 
            b: 4
        })
        expect(response.body.product).toBe(8);
    })

    it("should multiply two positive numbers", async () => {
      const response = await request(app).post("/multiply").send({
        a: 2,
        b: 4,
      });
      expect(response.body.product).toBe(8);
    });

    it("should multiply two positive numbers", async () => {
      const response = await request(app).post("/multiply").send({
        a: 2,
        b: 4,
      });
      expect(response.body.product).toBe(8);
    });
})