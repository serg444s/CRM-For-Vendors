import Label, { Status } from './components/Label';
import css from './page.module.css';

export default function Home() {
  return (
    <div className={css.page}>
      <main className={css.main}>
        <h2 className="text-xl">Home page</h2>
        <div>
          <Label status={Status.Active}>Active</Label>
          <Label status={Status.Pending}>Pending</Label>
          <Label status={Status.Suspended}>Suspended</Label>
          <Label status={Status.NotActive}>Not Active</Label>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
