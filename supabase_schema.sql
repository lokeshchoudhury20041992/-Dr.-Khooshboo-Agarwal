-- Supabase Database Schema for Dr. Khooshboo Agarwal
-- Run this directly in the Supabase SQL Editor to create your tables

-- 1. Create the `appointments` table
CREATE TABLE public.appointments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  service TEXT,
  preferred_date DATE,
  message TEXT,
  status TEXT DEFAULT 'pending'
);

-- Enable Row Level Security (RLS) to enforce safety
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to INSERT rows (so anyone visiting the site can submit an appointment)
CREATE POLICY "Allow anonymous inserts to appointments"
  ON public.appointments FOR INSERT
  TO anon
  WITH CHECK (true);

-- 2. Create the `contact_messages` table (if you ever need a simple contact form vs a full appointment form)
CREATE TABLE public.contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  message TEXT NOT NULL
);

-- Enable RLS
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to INSERT
CREATE POLICY "Allow anonymous inserts to contact_messages"
  ON public.contact_messages FOR INSERT
  TO anon
  WITH CHECK (true);
