import { neon } from '@neondatabase/serverless';

const sql = neon('postgresql://neondb_owner:D5F2OKZVuXge@ep-shy-unit-a4q0p4tu.us-east-1.aws.neon.tech/neondb?sslmode=require');

export default sql