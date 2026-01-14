import "dotenv/config";

import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = `{process.env.CONNECTION_STRING}`;
const adapter = new PrismaPg({ connectionString });

export const client = new PrismaClient({ adapter })

