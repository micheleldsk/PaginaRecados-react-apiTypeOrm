import { DataSource } from "typeorm";
import { config } from "./orm-config";

export const dataSource = new DataSource(config)