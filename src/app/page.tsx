import AddCompanyButton from './components/AddCompanyButton';
import ClientComponent from './components/ClientComponent';
import MagicButton from './components/magicButton';
import ServerComponent from './components/ServerComponent';
import ServerComponentCopy from './components/ServerComponentCopy';
import css from './page.module.css';

export default function Home() {
  return (
    <div className={css.page}>
      <main className={css.main}>
        <h2 className="text-xl">Home Page</h2>
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
