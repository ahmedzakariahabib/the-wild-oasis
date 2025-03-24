import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://jqftpizhzbkmhneznuan.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpxZnRwaXpoemJrbWhuZXpudWFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAzMjI0MzcsImV4cCI6MjA1NTg5ODQzN30.KsGAlD57MRVgiV5zCql5GvgtY5ywsraWqY70zkbvyUk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
