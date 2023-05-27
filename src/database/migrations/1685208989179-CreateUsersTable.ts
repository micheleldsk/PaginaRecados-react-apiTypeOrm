import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUsersTable1685208989179 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "users",
            columns: [{
                name: "id",
                type: "uuid",
                isPrimary: true,
            },{
                name: "nome",
                type: "varchar",
                length: "100",
                isNullable: false
            },{
                name: "email",
                type: "varchar",
                length: "100",
                isUnique: true,
                isNullable: false 
            },{
                name: "senha",
                type: "varchar",
                length: "100",
                isUnique: true,
                isNullable: false  
            }, {
                name: "created_at",
                type: "timestamp",
                isNullable: false   
            }, {
                name: "updated_at",
                type: "timestamp",
                isNullable: false 
            }],

        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users", true, true, true)
    }

}
