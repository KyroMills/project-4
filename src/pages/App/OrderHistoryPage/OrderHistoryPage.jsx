import './App.css';
import React, { useState } from 'react';


export default function AuthPage() {
  async function handleCheckToken() {
    alert('clicked');
  }
  const [user, setUser] = useState(null)
  return (
    <>
   <h1>Order History</h1>
   <button onClick={handleCheckToken}>Check When My Login Expires</button>
   </>
  );
}
