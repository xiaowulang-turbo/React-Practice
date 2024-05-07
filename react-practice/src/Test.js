import Avatar from "./components/Avatar";
import "./data";

function Test() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>This is a test component.</p>
      <button onClick={() => alert("Button clicked!")}>Click me</button>
      <Avatar src="https://picsum.photos/200/300" alt="Profile Picture" />
      <a href="https://www.example.com">Visit Example.com</a>
      <input type="text" placeholder="Enter your name" />
    </div>
  );
}

export default Test;
