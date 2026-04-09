import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type ServiceRequest = {
  id?: string;
  name: string;
  email: string;
  service: string;
  message: string;
  created_at?: string;
};

export type NewsletterSubscriber = {
  id?: string;
  email: string;
  subscribed_at?: string;
};

export async function submitServiceRequest(data: Omit<ServiceRequest, 'id' | 'created_at'>) {
  const { error } = await supabase.from('service_requests').insert([data]);
  if (error) throw error;
}

export async function subscribeNewsletter(email: string) {
  const { error } = await supabase
    .from('newsletter_subscribers')
    .upsert([{ email }], { onConflict: 'email' });
  if (error) throw error;
}
