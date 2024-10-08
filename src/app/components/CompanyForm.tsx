'use client';

import React from 'react';
import { Form, Formik } from 'formik';
import LogoUploader from './LogoUploader';
import Button from './Button';
import { Input } from './Input';

export type CompanyFieldValues = {
  name: string;
  status: string;
  country: string;
  category: string;
  date: string;
  description: string;
};

const initialValues: CompanyFieldValues = {
  name: '',
  status: '',
  country: '',
  category: '',
  date: '',
  description: '',
};

export interface CompanyFormProps {
  onSubmit: (values: CompanyFieldValues) => void | Promise<void>;
}

export default function CompanyForm({ onSubmit }: CompanyFormProps) {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form className="flex flex-col gap-10">
        <p className="mb-0.5 text-xl">Add new company</p>
        <div className="flex gap-6">
          <div className="flex flex-col flex-1 gap-5">
            <LogoUploader
              label="Logo"
              placeholder="Upload photo"
              id="uploader"
            />
            <Input
              label="Status"
              placeholder="Status"
              name="status"
              id="status"
            />
            <Input
              label="Country"
              placeholder="Country"
              name="country"
              id="country"
            />
          </div>
          <div className="flex flex-col flex-1 gap-5">
            <Input label="Name" placeholder="Name" name="name" id="name" />
            <Input
              label="Category"
              placeholder="Category"
              name="category"
              id="category"
            />
            <Input label="Joined date" type="date" name="date" id="date" />
            <Input
              label="Description"
              placeholder="Description"
              name="description"
              id="description"
            />
          </div>
        </div>
        <Button type="submit">Add company</Button>
      </Form>
    </Formik>
  );
}
