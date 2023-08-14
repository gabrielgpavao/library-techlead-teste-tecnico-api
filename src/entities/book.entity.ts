import { UUID } from 'node:crypto'
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { User } from './user.entity'

@Entity('books')
export class Book {
	@PrimaryGeneratedColumn('uuid')
		id: UUID

	@Column({ type: 'varchar', length: 127 })
		name: string

	@Column({ type: 'varchar', length: 127 })
		author: string

	@Column({ type: 'boolean', default: false })
		isBorrowed: boolean

	@CreateDateColumn({ type: 'date' })
		registeredAt: Date | string

	@ManyToOne(() => User)
		registeredBy: User
}
