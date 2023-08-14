import { Repository } from 'typeorm'
import { Borrowing } from '../entities/borrowing.entity'

type tBorrowingRepo = Repository<Borrowing>

export {
	tBorrowingRepo
}
