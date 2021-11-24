require('dotenv').config()
import { Options } from "@mikro-orm/core";
import { PostgreSqlDriver } from "@mikro-orm/postgresql";
import { TsMorphMetadataProvider } from "@mikro-orm/reflection";
import { __prod__ } from "./constants";

const config: Options = {
    type: 'postgresql',
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT as string),
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASS,
    dbName: process.env.POSTGRES_DB,
    entities: ["./dist/entities/*.js"],
    entitiesTs: ["./src/entities/*.ts"],
    driver: PostgreSqlDriver,
    metadataProvider: TsMorphMetadataProvider,
    debug: !__prod__,
    migrations: {
        tableName: "migrations",
        path: "./src/migrations"
    }
}

export default config