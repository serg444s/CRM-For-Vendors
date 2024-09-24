import React from 'react';
import Header from './components/header';
import Toolbar from './components/toolbar';
import SearchInput from './components/search-input';
import CompanyTable from './components/company-table';
import CompanyRow from './components/company-row';
import AddCompanyButton from '@/app/components/AddCompanyButton/AddCompanyButton';
import { Status } from '@/app/components/Label/Label';

const Page = () => {
  return (
    <>
      <Header>Companies</Header>
      <Toolbar action={<AddCompanyButton />}>
        <SearchInput />
      </Toolbar>
      <CompanyTable>
        <CompanyRow
          id={1}
          category={'Products'}
          company={'CostCo'}
          status={Status.Active}
          promotion={true}
          country={'USA'}
          joinedDate={'12.02.2024'}
        />
      </CompanyTable>
    </>
  );
};

export default Page;
