# AMS

> This stand for Aaron's Maternity System

Dont ask me why is this name
(Probably Aaron is getting married)

# How to use

1. Ensure that NodeJS is installed (I'm using v16.15.0 but later versions should work)
2. Install the dependencies

```bash
npm install 
```

3. If you're just trying to see how it works, run

```bash
npm run dev
```

4. If you're trying to build for production, run,

```bash
# This would build the project and run the build
npm run prod 
```

Once the project runs, be on the lookout for the site link, that is display on the console output

# Database configuration

The project uses `SQLite` for its database configuration. The database is not included with this project, as it will be
automatically generated upon first launch of the project.

To ensure all the tables are properly configured, please run the commands in `sql_init_commands.sql`.

An editor such as [HeidiSQL](https://www.heidisql.com/) is required to run the commands.

# Credits

Team Sunway @ University Malaya 2023

Aaron Liew Jun Wei <br />
Carlson Tan Jian Xiang <br />
Elvyana Ee Yuet Suen <br />
Kho Zi Jian <br />
Khor Zun Xiong
