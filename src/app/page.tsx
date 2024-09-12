import AddCompanyButton from './components/AddCompanyButton/AddCompanyButton';
import Label, { Status } from './components/Label/Label';
import css from './page.module.css';

export default function Home() {
  return (
    <div className={css.page}>
      <main className={css.main}>
        <h2 className="text-xl">Home page</h2>
        <div>
          <Label status={Status.Active} disabled={false}>
            Active
          </Label>
          <Label status={Status.Pending} disabled={false}>
            Pending
          </Label>
          <Label status={Status.Suspended} disabled={false}>
            Suspended
          </Label>
          <Label status={Status.NotActive} disabled={true}>
            Not Active
          </Label>
        </div>
      </main>
      <AddCompanyButton />
      <footer></footer>
    </div>
  );
}
