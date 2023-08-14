import { UUID } from 'node:crypto'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Book } from './book.entity'

@Entity('users')
export class User {
	@PrimaryGeneratedColumn('uuid')
		id: UUID

	@Column({ type: 'varchar', length: 127 })
		name: string

	@Column({ type: 'varchar', length: 127, unique: true })
		email: string

	@Column({ type: 'varchar', select: false })
		password: string

	@Column({ type: 'boolean', default: false })
		isAdmin: boolean

	@OneToMany(() => Book, (book) => book.registeredBy)
		registeredBooks: Book[]
}
