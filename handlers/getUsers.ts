// @ts-ignore
import { getUsers } from "../services/users.ts";

// @ts-ignore
export default async ({ response }) => {
  response.body = await getUsers();
};
