import { useEffect, useState } from "react";

const DemoUseEffect = () => {
  const [toggle, setToggle] = useState(false);
  const [counter, setCounter] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [repos, setRepos] = useState([]);

  //   useEffect(() => {
  //     console.log("Effect works!");
  //   });
  //   useEffect(() => {
  //     console.log("Effect works!");
  //   }, [counter]);
  //   useEffect(() => {
  //     console.log("Effect works!");
  //     return () => {
  //       console.log("Clean Up!");
  //     };
  //   }, [counter]);

  useEffect(() => {
    let notifier = null;
    if (searchTerm !== "") {
      notifier = setTimeout(() => {
        fetch(`https://api.github.com/users/${searchTerm}/repos`)
          .then((response) => response.json())
          .then((repos) => setRepos(repos))
          .catch((error) => console.log(error));
      }, 2000);
    }
    return () => {
      clearTimeout(notifier);
    };
  }, [searchTerm]);

  // ivey
  return (
    <>
      <h1>Demo UseEffect Hook</h1>

      <button
        className="btn btn-primary"
        onClick={() => setCounter(counter + 1)}
      >
        {counter}
      </button>

      <button className="btn btn-secondary" onClick={() => setToggle(!toggle)}>
        Toggle
      </button>
      {toggle && <p>This paragraph will dynamically appear</p>}

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </>
  );
};

export default DemoUseEffect;
