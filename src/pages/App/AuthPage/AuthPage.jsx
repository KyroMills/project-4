import './App.css';
import React, { useState } from 'react';
import SignUpForm from '../../../components/SignUpForm/SignUpForm';


export default function AuthPage() {
  const [user, setUser] = useState(null)
  return (
    <main>
   <h1>AuthPage</h1>
   <SignUpForm />
   <LoginForm />
   </main>
  );
}

