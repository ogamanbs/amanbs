'use client'; // Add this directive to make the component a Client Component

import { useSearchParams } from 'next/navigation';

export default function ErrorPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  return (
    <div>
      <h1>Authentication Error</h1>
      <p>{error ? `Error: ${error}` : 'An unknown error occurred.'}</p>
    </div>
  );
}