import { createClient } from '@supabase/supabase-js'

// Replace these with your actual Supabase project URL and anon key
// from https://app.supabase.com -> Project Settings -> API
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co'
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

// ── APPOINTMENTS ──────────────────────────────────────────────
// Table: appointments
// Columns: id, created_at, name, phone, email, service, preferred_date, message, status
export async function submitAppointment(data) {
  const { error } = await supabase.from('appointments').insert([
    {
      name: data.name,
      phone: data.phone,
      email: data.email || null,
      service: data.service || null,
      preferred_date: data.preferred_date || null,
      message: data.message || null,
      status: 'pending',
    },
  ])
  if (error) throw error
  return true
}

// ── CONTACT MESSAGES ──────────────────────────────────────────
// Table: contact_messages
// Columns: id, created_at, name, phone, email, message
export async function submitContactMessage(data) {
  const { error } = await supabase.from('contact_messages').insert([
    {
      name: data.name,
      phone: data.phone,
      email: data.email || null,
      message: data.message,
    },
  ])
  if (error) throw error
  return true
}
