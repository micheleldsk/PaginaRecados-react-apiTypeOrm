import 'dotenv/config';
import { DataSourceOptions } from 'typeorm';
import { MessageEntity, UserEntity } from './entities';
import { CreateMessagesTable1685209720186, CreateUsersTable1685208989179 } from './migrations';

export const config: DataSourceOptions = {
	type: 'postgres',
	url: process.env.DATABASE_URL,
	entities: [ UserEntity, MessageEntity ],
	migrations: [ CreateUsersTable1685208989179, CreateMessagesTable1685209720186 ]  
    }