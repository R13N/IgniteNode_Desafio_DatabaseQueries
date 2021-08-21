import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateGenres1623080025565 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "orders",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "user_id",
                        type: "uuid",
                    },
                    {
                        name: "description",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "games_id",
                        type: "uuid",
                    }
                ],
                foreignKeys: [
                    {
                      name: 'orders',
                      columnNames: ['user_id'],
                      referencedTableName: 'users',
                      referencedColumnNames: ['id'],
                      onUpdate: 'CASCADE',
                      onDelete: 'CASCADE'
                    },
                    {
                        name: 'orders',
                        columnNames: ['games_id'],
                        referencedTableName: 'games',
                        referencedColumnNames: ['id'],
                        onUpdate: 'CASCADE',
                        onDelete: 'CASCADE'
                    }
                  ]
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("genres");
    }

}
