import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { supabase } from '../lib/supabaseClient'

export default function AuthPage() {
  return (
    <div style={{ width: '400px', margin: 'auto', paddingTop: '5rem' }}>
      <h2 style={{ textAlign: 'center' }}>Login or Sign Up</h2>
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={['google', 'github']}
      />
    </div>
  )
}
