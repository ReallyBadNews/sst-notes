import { describe, it, expect, vi } from "vitest";
import handler from "../src/handler";
import { APIGatewayProxyEvent, Context } from "aws-lambda";

describe("handler", () => {
  // Mock Context
  const context: Context = {} as Context;

  // Mock APIGatewayProxyEvent
  const event: APIGatewayProxyEvent = {} as APIGatewayProxyEvent;

  it("should return a 200 status code on successful lambda execution", async () => {
    // Mock lambda function that resolves successfully
    const lambda = vi.fn().mockResolvedValue("Success response");

    const handleLambda = handler(lambda);
    const response = await handleLambda(event, context);

    // Assertions
    expect(response.statusCode).toBe(200);
    expect(response.body).toBe("Success response");
    expect(lambda).toHaveBeenCalledWith(event, context);
  });

  it("should return a 500 status code when the lambda function throws an error", async () => {
    // Mock lambda function that throws an error
    const errorMessage = "Test error";
    const lambda = vi.fn().mockRejectedValue(new Error(errorMessage));

    const handleLambda = handler(lambda);
    const response = await handleLambda(event, context);

    // Assertions
    expect(response.statusCode).toBe(500);
    expect(response.body).toBe(JSON.stringify({ error: errorMessage }));
    expect(lambda).toHaveBeenCalledWith(event, context);
  });
});
