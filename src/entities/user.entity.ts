import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('users')
export class User {
	@PrimaryGeneratedColumn('increment')
		id: number

	@Column({ type: 'varchar', length: 127 })
		name: string

	@Column({ type: 'varchar', length: 127, unique: true })
		email: string

	@Column({ type: 'varchar', select: false })
		password: string

	@Column({ type: 'boolean', default: false })
		isAdmin: boolean
}
