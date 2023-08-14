import { Repository } from 'typeorm'
import { User } from '../entities/user.entity'

type tUserRepo = Repository<User>

export {
	tUserRepo
}
