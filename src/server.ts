import app from './app'
import { AppDataSource } from './data-source'
import 'dotenv/config'

AppDataSource.initialize().then(() => {
	console.log('Database connected!')

	const PORT = process.env.APP_PORT || 3333

	app.listen(PORT, () => {
		console.log('Server is running!')
	})
}).catch(error => {
	console.log(error)
})
