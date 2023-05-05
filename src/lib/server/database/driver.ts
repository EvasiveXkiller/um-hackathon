import Database from 'better-sqlite3';

const {NODE_ENV} = process.env;
const dev = NODE_ENV === 'development';

const database = new Database('./database.db', {
	verbose: dev ? console.log : null,
});

export { database }
