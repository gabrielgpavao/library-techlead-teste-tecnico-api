import { UUID } from 'node:crypto'
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Book } from './book.entity'
import { getRounds, hashSync } from 'bcryptjs'

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

	@BeforeInsert()
	@BeforeUpdate()
	hashPassword () {
		const isEncrypted = !!getRounds(this.password)
		if (!isEncrypted) {
			this.password = hashSync(this.password, 10)
		}
	}
}
