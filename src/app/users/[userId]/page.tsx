import React from 'react';

interface PageProps {
    params: {
      userId: string;
    };
  }

const page = ( {params}: PageProps) => {

  return (
    <div>
       <h1>User ID: {params?.userId}</h1>
    </div>
  )
}

export default page
