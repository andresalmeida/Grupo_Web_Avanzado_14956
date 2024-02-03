import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://grepmhfpwkegspspiwde.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdyZXBtaGZwd2tlZ3Nwc3Bpd2RlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY1NDY2NTksImV4cCI6MjAyMjEyMjY1OX0.XiU-zwoI_U3weeiQ1ZxZXMlkWcxB9kCUaT_g8w7IkMc')

export {
  supabase
}