import { Options } from "@mikro-orm/core";
import { PostgreSqlDriver } from "@mikro-orm/postgresql";
import { TsMorphMetadataProvider } from "@mikro-orm/reflection";

export const config: Options = {
    type: 'postgresql',
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT as string),
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASS,
    dbName: process.env.POSTGRES_DB,
    entities: ["./dist/**/*Entity.js"],
    entitiesTs: ["./src/**/*Entity.ts"],
    driver: PostgreSqlDriver,
    metadataProvider: TsMorphMetadataProvider,
    debug: process.env.NODE_ENV !== "production"
}