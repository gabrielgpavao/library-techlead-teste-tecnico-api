import { UUID } from 'node:crypto'
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { User } from './user.entity'
import { Book } from './book.entity'

@Entity('borrowings')
export class Borrowing {
	@PrimaryGeneratedColumn('uuid')
		id: UUID

	@OneToOne(() => Book)
	@JoinColumn()
		book: Book

	@ManyToOne(() => User)
		user: User

	@CreateDateColumn({ type: 'date' })
		borrowedAt: Date | string

	@Column({ type: 'date', default: false })
		returnDate: Date | string
}
