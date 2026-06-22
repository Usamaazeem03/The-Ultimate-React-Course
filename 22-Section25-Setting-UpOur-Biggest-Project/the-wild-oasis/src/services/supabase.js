import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://zdwwfphkgaikhhkaeerl.supabase.co";
const supabaseKey = "sb_publishable_u5fY7-IrcnKCNxDjNHEpIg_eWckCP9a";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
