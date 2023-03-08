import React, { useState, useEffect } from "react";

const IndexPage = () => {
  const [passwordInclude, setPasswordInclude] = useState({
    upperCase: "",
    lowerCase: "",
    numbers: "",
    symbols: "",
  });
  const [charLenght, setCharLenght] = useState(1);
  const [upperCase, setUpperCase] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [passwordStrenght, setPasswordStrenght] = useState(null);

  const onChangeCharLenght = (event) => {
    let value = event.target.value;
    setCharLenght(value);
  };

  const onChangeUpperCase = (event) => {
    let name = event.target.name;
    setUpperCase(!upperCase);
    if (!upperCase) {
      setPasswordInclude({
        ...passwordInclude,
        [name]: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      });
    } else {
      setPasswordInclude({
        ...passwordInclude,
        [name]: "",
      });
    }
  };

  const onChangeLowerCase = (event) => {
    let name = event.target.name;
    setLowerCase(!lowerCase);
    if (!lowerCase) {
      setPasswordInclude({
        ...passwordInclude,
        [name]: "abcdefghijklmnopqrstuvwxyz",
      });
    } else {
      setPasswordInclude({
        ...passwordInclude,
        [name]: "",
      });
    }
  };

  const onChangeNumbers = (event) => {
    let name = event.target.name;
    setNumbers(!numbers);
    if (!numbers) {
      setPasswordInclude({
        ...passwordInclude,
        [name]: "0123456789",
      });
    } else {
      setPasswordInclude({
        ...passwordInclude,
        [name]: "",
      });
    }
  };

  const onChangeSymbols = (event) => {
    let name = event.target.name;
    setSymbols(!symbols);
    if (!symbols) {
      setPasswordInclude({
        ...passwordInclude,
        [name]: "~`!@#$%^&*()_-+={[}]|:;'<,>.?/",
      });
    } else {
      setPasswordInclude({
        ...passwordInclude,
        [name]: "",
      });
    }
  };

  const onClickGeneratePassword = () => {
    var combinePasswordInclue = "";

    Object.keys(passwordInclude).map((key) => {
      return (combinePasswordInclue += passwordInclude[key]);
    });

    var password = "";

    for (
      var index = 0, n = combinePasswordInclue.length;
      index < charLenght;
      index++
    ) {
      password += combinePasswordInclue.charAt(Math.floor(Math.random() * n));
    }

    setGeneratedPassword(password);

    const validateCheckbox = document.querySelectorAll("input[type=checkbox]");
    if (
      Array.from(validateCheckbox).every((element) => element.checked === false)
    ) {
      alert("Make sure to check at least one box");
      setPasswordStrenght(null);
    }
    console.log(generatedPassword.length);
  };

  useEffect(() => {
    if (generatedPassword === "") {
      setPasswordStrenght(null);
    } else if (generatedPassword.length <= 5) {
      setPasswordStrenght(1);
    } else if (generatedPassword.length <= 8 && generatedPassword.length >= 6) {
      setPasswordStrenght(2);
    } else if (
      generatedPassword.length <= 14 &&
      generatedPassword.length >= 9
    ) {
      setPasswordStrenght(3);
    } else {
      setPasswordStrenght(4);
    }
  }, [generatedPassword]);

  return (
    <main>
      <h1>{generatedPassword}</h1>
      <h2>{passwordStrenght}</h2>
      <div className="character-lenght">
        <input
          type="range"
          min="1"
          max="20"
          value={charLenght}
          onChange={onChangeCharLenght}
        />
        <div className="character-lenght__label">{charLenght}</div>
      </div>
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            onChange={onChangeUpperCase}
            name="upperCase"
          />
          Include Uppercase Letters
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            onChange={onChangeLowerCase}
            name="lowerCase"
          />
          Include Lowercase Letters
        </label>
        <br />
        <label>
          <input type="checkbox" onChange={onChangeNumbers} name="numbers" />
          Include Numbers
        </label>
        <br />
        <label>
          <input type="checkbox" onChange={onChangeSymbols} name="symbols" />
          Include Symbols
        </label>
      </div>
      <button onClick={onClickGeneratePassword}>Generate Password</button>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Password Generator App</title>;
