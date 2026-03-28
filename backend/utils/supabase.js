// backend/utils/supabase.js
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config(); // load .env variables

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY; // or service key for server-side
export const supabase = createClient(supabaseUrl, supabaseKey);