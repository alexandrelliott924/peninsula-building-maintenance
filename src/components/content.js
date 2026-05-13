import '../styles/content.css';

function Content({ title, children }) {
  return (
    <main className="content">
      <h2 className="content-title">{title}</h2>
      <div className="content-body">
        {children}
      </div>
    </main>
  );
}

export default Content;