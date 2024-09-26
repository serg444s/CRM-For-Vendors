import AddCompanyButton from './components/AddCompanyButton';
import ClientComponent from './components/ClientComponent';
import Label, { Status } from './components/Label';
import MagicButton from './components/magicButton';
import ServerComponent from './components/ServerComponent';
import ServerComponentCopy from './components/ServerComponentCopy';
import css from './page.module.css';

export default function Home() {
  return (
    <div className={css.page}>
      <main className={css.main}>
        <h2 className="text-xl">Home Page</h2>

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
      <ServerComponent />
      <ClientComponent>
        <ServerComponentCopy />
      </ClientComponent>
      <footer>
        <MagicButton />
      </footer>
    </div>
  );
}
