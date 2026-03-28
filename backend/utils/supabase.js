// backend/utils/supabase.js
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config(); // load .env locally (Render ignores this, which is fine)

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY; // match exactly with Render

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "Supabase environment variables are missing. " +
    "Please set SUPABASE_URL and SUPABASE_KEY in your environment."
  );
}

export const supabase = createClient(supabaseUrl, supabaseKey);