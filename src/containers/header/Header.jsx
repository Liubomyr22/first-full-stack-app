import "./header.css";
export default function Header() {
  return (
    <header className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React and Node</span>
        <span className="headerTitleLg">Luco Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://images.unsplash.com/photo-1551244072-5d12893278ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        alt="headerImage"
      />
    </header>
  );
}
