export interface DatabaseConfig {
  postgres: PostgresConfig;
  sqlite: SqliteConfig;
}

export interface PostgresConfig {
  url: string;
  port: number;
  database: string;
}

export interface SqliteConfig {
  database: string;
}
