import React, { useState } from "react";

/* Import Style */
import "../scss/layout/index.scss";
import "../scss/components/main.scss";

const IndexPage = () => {
  // const [passwordInclude, setPasswordInclude] = useState({
  //   upperCase: "",
  //   lowerCase: "",
  //   numbers: "",
  //   symbols: "",
  // });
  const [charLenght, setCharLenght] = useState(1);
  const [rangeLength, setRangeLength] = useState(0);
  // const [upperCase, setUpperCase] = useState(false);
  // const [lowerCase, setLowerCase] = useState(false);
  // const [numbers, setNumbers] = useState(false);
  // const [symbols, setSymbols] = useState(false);
  // const [generatedPassword, setGeneratedPassword] = useState("");
  // const [passwordStrenght, setPasswordStrenght] = useState(null);

  const onChangeCharLenght = (event) => {
    let value = event.target.value;
    let min = event.target.min;
    let max = event.target.max;

    setRangeLength(Math.floor(((value - min) * 100) / (max - min)));
    setCharLenght(value);
  };

  // const onChangeUpperCase = (event) => {
  //   let name = event.target.name;
  //   setUpperCase(!upperCase);
  //   if (!upperCase) {
  //     setPasswordInclude({
  //       ...passwordInclude,
  //       [name]: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  //     });
  //   } else {
  //     setPasswordInclude({
  //       ...passwordInclude,
  //       [name]: "",
  //     });
  //   }
  // };

  // const onChangeLowerCase = (event) => {
  //   let name = event.target.name;
  //   setLowerCase(!lowerCase);
  //   if (!lowerCase) {
  //     setPasswordInclude({
  //       ...passwordInclude,
  //       [name]: "abcdefghijklmnopqrstuvwxyz",
  //     });
  //   } else {
  //     setPasswordInclude({
  //       ...passwordInclude,
  //       [name]: "",
  //     });
  //   }
  // };

  // const onChangeNumbers = (event) => {
  //   let name = event.target.name;
  //   setNumbers(!numbers);
  //   if (!numbers) {
  //     setPasswordInclude({
  //       ...passwordInclude,
  //       [name]: "0123456789",
  //     });
  //   } else {
  //     setPasswordInclude({
  //       ...passwordInclude,
  //       [name]: "",
  //     });
  //   }
  // };

  // const onChangeSymbols = (event) => {
  //   let name = event.target.name;
  //   setSymbols(!symbols);
  //   if (!symbols) {
  //     setPasswordInclude({
  //       ...passwordInclude,
  //       [name]: "~`!@#$%^&*()_-+={[}]|:;'<,>.?/",
  //     });
  //   } else {
  //     setPasswordInclude({
  //       ...passwordInclude,
  //       [name]: "",
  //     });
  //   }
  // };

  // const onClickGeneratePassword = () => {
  //   var combinePasswordInclue = "";

  //   Object.keys(passwordInclude).map((key) => {
  //     return (combinePasswordInclue += passwordInclude[key]);
  //   });

  //   var password = "";

  //   for (
  //     var index = 0, n = combinePasswordInclue.length;
  //     index < charLenght;
  //     index++
  //   ) {
  //     password += combinePasswordInclue.charAt(Math.floor(Math.random() * n));
  //   }

  //   setGeneratedPassword(password);

  //   const validateCheckbox = document.querySelectorAll("input[type=checkbox]");
  //   if (
  //     Array.from(validateCheckbox).every((element) => element.checked === false)
  //   ) {
  //     alert("Make sure to check at least one box");
  //     setPasswordStrenght(null);
  //   }
  //   console.log(generatedPassword.length);
  // };

  // useEffect(() => {
  //   if (generatedPassword === "") {
  //     setPasswordStrenght(null);
  //   } else if (generatedPassword.length <= 5) {
  //     setPasswordStrenght(1);
  //   } else if (generatedPassword.length <= 8 && generatedPassword.length >= 6) {
  //     setPasswordStrenght(2);
  //   } else if (
  //     generatedPassword.length <= 14 &&
  //     generatedPassword.length >= 9
  //   ) {
  //     setPasswordStrenght(3);
  //   } else {
  //     setPasswordStrenght(4);
  //   }
  // }, [generatedPassword]);

  return (
    <main className="password-generator">
      <h1>Password Generator</h1>
      <div className="password-generator__container">
        <div className="password-generator__container-header">
          <h2>P4$5W0rD!</h2>
          <button type="button">
            <img
              src="https://ik.imagekit.io/csdesigner/password_generator/icon_copy_u96WQ4TwF.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1678426067754"
              alt="copy-password"
            ></img>
          </button>
        </div>
        <div className="password-generator__container-settings">
          <div className="character-length">
            <div className="length-label">
              <small>Character Length</small>
              <strong>{charLenght}</strong>
            </div>
            <div className="length-input">
              <input
                aria-label="Password length"
                className="input-range"
                type="range"
                min="1"
                max="20"
                value={charLenght}
                onChange={onChangeCharLenght}
                style={{ backgroundSize: rangeLength + "% 100%" }}
              ></input>
            </div>
          </div>
          <div className="password-menu">
            <label className="checkbox-container">
              Include Uppercase Letters
              <input type="checkbox" name="uppercase" />
              <span class="checkmark"></span>
            </label>
            <label className="checkbox-container">
              Include Lowercase Letters
              <input type="checkbox" name="lowercase" />
              <span class="checkmark"></span>
            </label>
            <label className="checkbox-container">
              Include Numbers
              <input type="checkbox" name="numbers" />
              <span class="checkmark"></span>
            </label>
            <label className="checkbox-container">
              Include Symbols
              <input type="checkbox" name="symbols" />
              <span class="checkmark"></span>
            </label>
          </div>
          <div className="password-strength">
            <strong>STRENGTH</strong>
            <div className="strength-validation">
              <div className="strength-status">TOO WEAK!</div>
              <div className="strength-bar">
                <div className="bar-indicator weak"></div>
                <div className="bar-indicator"></div>
                <div className="bar-indicator"></div>
                <div className="bar-indicator"></div>
              </div>
            </div>
          </div>
          <div className="generate-button">
            <button>
              GENERATE{" "}
              <svg
                width="12"
                height="12"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  fill="#24232C"
                  d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* <h1>{generatedPassword}</h1>
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
      <button onClick={onClickGeneratePassword}>Generate Password</button> */}
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Password Generator App</title>;
