import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  taskName: string;

  @Column({ nullable: true })
  taskDescription?: string;

  @Column({ default: false })
  isComplete: boolean;
}
