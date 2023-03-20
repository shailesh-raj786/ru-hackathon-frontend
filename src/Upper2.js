import "./upper2.css";

function upper2() {
  return (
    <div className="upper2">
      <div className="sidediv"></div>
      <div >
        <a href="/" className="links">Home</a>
      </div>
      <div >
        <a href="/auth" className="links">SignUp/SignIn</a>
      </div>
      <div >
        <a href="/prices" className="links">Crop Prices</a>
      </div>
      <div >
        <a href="/posts"className="links" >Posts</a>
      </div>
      <div >
        <a href="/market" className="links">Market</a>
      </div>

      <div className="sidediv"></div>
    </div>
  );
}

export default upper2;
