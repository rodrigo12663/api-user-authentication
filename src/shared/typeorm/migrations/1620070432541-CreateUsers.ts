import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateUsers1620070432541 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(new Table({
      name: 'users',
      columns: [
        {
          name: 'id',
          type: 'varchar',
          isPrimary: true,
          generationStrategy: 'uuid',
          default: 'uuid_generate_v4()'
        },
        {
          name: 'name',
          type: 'varchar'
        },
        {
          name: 'cpf',
          type: 'varchar',
          isUnique: true
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
        },
        {
          name: 'roleId',
          type: 'varchar'
        }
      ],
      foreignKeys: [
        {
          columnNames: ['roleId'],
          referencedColumnNames: ['id'],
          referencedTableName: 'roles'
        }
      ]
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users')
  }
}
