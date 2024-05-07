import { people } from "../data.js";

function Avatar({ src, alt }) {
  const listItems = people.map((person) => (
    <li key={person.id}>
      <img src="https://picsum.photos/200/300" alt={person.name} />
      <p>
        <b>{person.name}</b>, {person.age}
      </p>
    </li>
  ));
  return <ul>{listItems}</ul>;
}

export default Avatar;
