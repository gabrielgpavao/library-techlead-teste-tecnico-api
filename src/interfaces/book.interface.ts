import { Repository } from 'typeorm'
import { Book } from '../entities/book.entity'

type tBookRepo = Repository<Book>

export {
	tBookRepo
}
