// @ts-ignore
import { DB_PATH } from "../config.ts";
// @ts-ignore
import { User } from "../models/user.ts";

export const fetchData = async (): Promise<User[]> => {
  // @ts-ignore
  const data = await Deno.readFile(DB_PATH);

  const decoder = new TextDecoder();
  const decodedData = decoder.decode(data);

  return JSON.parse(decodedData);
};

// @ts-ignore
export const persistData = async (data): Promise<void> => {
  const encoder = new TextEncoder();
  // @ts-ignore
  await Deno.writeFile(DB_PATH, encoder.encode(JSON.stringify(data)));
};
