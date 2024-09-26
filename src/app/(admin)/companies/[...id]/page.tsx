'use client';

import React, { useEffect } from 'react';
import Header from '../components/header';
import notFoundComponent from './not-found';
import { notFound } from 'next/navigation';

export interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  useEffect(() => {
    const id = Number.parseInt(params.id);
    if (Number.isNaN(id)) {
      notFound();
    }
  }, [params.id]);

  return (
    <>
      <Header>Company ({String(params.id)})</Header>
    </>
  );
}
