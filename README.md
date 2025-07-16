
## Database Setup Instructions

1. **Create a `.env` file in the project root** (you can copy from `.env.sample`):
   ```
   cp .env.sample .env
   ```
   Fill in your database credentials:
   ```
   DB_USERNAME=your_db_username
   DB_PASSWORD=your_db_password
   DB_NAME=your_db_name
   DB_HOST=localhost
   DB_PORT=5432
   DB_DIALECT=postgres
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run database migrations** (creates tables):
   ```
   npx sequelize-cli db:migrate
   ```

4. **Seed the database with demo data:**
   ```
   npx sequelize-cli db:seed:all
   ```

After these steps, your database will be ready with the required tables and demo job data. You can now start the backend and frontend servers as described above. # job-board
