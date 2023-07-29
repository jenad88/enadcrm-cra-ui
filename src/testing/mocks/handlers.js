import { rest } from "msw";
import { API_URL } from '../../config/constants';

export const handlers = [
  rest.get(`${API_URL}/healthcheck`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ healthy: true })
    );
  }),

  rest.get("/api/getTodos", (request, response, context) => {
    return response(
      context.status(200),
      context.json([
        { id: 1, todo: "Shop Groceries" },
        { id: 2, todo: "Send the parcels" },
      ])
    );
  }),
];