import React, { useState } from "react";

import avatar from "./avatar.png";
import "./App.sass";

/**
 * Returns a React component that displays a person's information.
 *
 * @param person - the person to display
 * @returns a React component
 */
function App() {
  const person = {
    avatar: avatar,
    name: "Eugene Balashov",
    email: "alivedd@icloud.com",
    income: 30,
    skills: ["manage", "design", "react", "node", "elixir"],
  };

  const [isOpen, set_isOpen] = useState(false);

  const toggleModal = () => {
    set_isOpen(!isOpen);
  };

  return (
    <>
      {isOpen && (
        <div className="modal-layer">
          <p>skills</p>

          {person.skills.map((thisSkill, index) => (
            <li key={index}>{thisSkill}</li>
          ))}

          <button type="button" onClick={toggleModal}>
            close
          </button>
        </div>
      )}

      <div className="app">
        <header className="header">
          <img src={person.avatar} className="avatar" alt="avatar" />
          <h1>{person.name}</h1>
        </header>

        <main>
          {/* income portfolio */}
          <section>
            <div>
              <h2>expected income</h2>
              <span>{person.income} $ / hour — web dev</span>
            </div>

            <br />

            <div>
              <span>skills:</span>

              {person.skills.length > 0 && (
                <ul className="skills-list">
                  {person.skills.map((thisSkill, index) => (
                    <li key={index}>{thisSkill}</li>
                  ))}

                  <li>
                    <button type="button" onClick={toggleModal}>
                      show all
                    </button>
                  </li>
                </ul>
              )}
            </div>
          </section>

          {/* growth portfolio */}
          <section>
            <h2>growth portfolio</h2>
            <i>data-chart coming soon, last 10y</i>
          </section>
          {/* </header> */}
        </main>

        <footer className="footer">
          <a
            className="link"
            href="https://github.com/alivedd"
            target="_blank"
            rel="noreferrer"
          >
            github
          </a>

          <a
            href="mailto:${person.mail}?subject=Заказ из интернета"
            className="link"
          >
            email
          </a>
        </footer>
      </div>
    </>
  );
}

export default App;
