import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateUsers1618959582383 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(new Table({
      name: 'users',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          generationStrategy: 'uuid'
        },
        {
          name: 'name',
          type: 'varchar'
        },
        {
          name: 'cpf',
          type: 'varchar',
          isNullable: true
        },
        {
          name: 'password',
          type: 'varchar'
        },
        {
          name: 'createdAt',
          type: 'timestamp',
          default: 'now()'
        },
        {
          name: 'updateAt',
          type: 'timestamp',
          default: 'now()'
        }
      ]
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users')
  }
}
