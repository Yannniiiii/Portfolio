import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config(); // load .env variables

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY; // match the Render env variable
if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase environment variables are missing.');
}

export const supabase = createClient(supabaseUrl, supabaseKey);