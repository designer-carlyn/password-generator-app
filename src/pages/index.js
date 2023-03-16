import React, { useState, useEffect } from "react";

/* Import Style */
import "../scss/layout/index.scss";
import "../scss/components/main.scss";

const IndexPage = () => {
  const [passwordInclude, setPasswordInclude] = useState({
    upperCase: "",
    lowerCase: "",
    numbers: "",
    symbols: "",
  });
  const [charLenght, setCharLenght] = useState(1);
  const [rangeLength, setRangeLength] = useState(0);
  const [upperCase, setUpperCase] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(null);

  const onChangeCharLenght = (event) => {
    let value = event.target.value;
    let min = event.target.min;
    let max = event.target.max;

    setRangeLength(Math.floor(((value - min) * 100) / (max - min)));
    setCharLenght(value);
  };

  const onChangeCheckox = (event) => {
    let name = event.target.name;

    switch (name) {
      case "upperCase":
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
        break;
      case "lowerCase":
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
        break;
      case "numbers":
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
        break;
      case "symbols":
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
        break;
      default:
        setPasswordInclude({
          upperCase: "",
          lowerCase: "",
          numbers: "",
          symbols: "",
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
      setCharLenght(1);
      setRangeLength(0);
      setPasswordStrength(null);
      alert("Make sure to check at least one box");
    }
  };

  const onClickClipboard = () => {
    navigator.clipboard.writeText(generatedPassword);

    const copiedIndicator = document.querySelector(".copied-indicator");
    copiedIndicator.textContent = "COPIED";

    setTimeout(() => {
      copiedIndicator.textContent = "";
    }, 1000);
  };

  useEffect(() => {
    if (generatedPassword === "") {
      setPasswordStrength(null);
    } else if (generatedPassword.length <= 5) {
      setPasswordStrength(1);
    } else if (generatedPassword.length <= 8 && generatedPassword.length >= 6) {
      setPasswordStrength(2);
    } else if (
      generatedPassword.length <= 14 &&
      generatedPassword.length >= 9
    ) {
      setPasswordStrength(3);
    } else {
      setPasswordStrength(4);
    }
  }, [generatedPassword, passwordStrength]);

  return (
    <main className="password-generator">
      <h1>Password Generator</h1>
      <div className="password-generator__container">
        <div className="password-generator__container-header">
          <h2>{generatedPassword === "" ? "P4$5W0rD!" : generatedPassword}</h2>
          <div className="copy-wrapper">
            <small className="copied-indicator"></small>
            <button type="button" onClick={onClickClipboard}>
              <img
                src="https://ik.imagekit.io/csdesigner/password_generator/icon_copy_u96WQ4TwF.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1678426067754"
                alt="copy-password"
              ></img>
            </button>
          </div>
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
              <input
                type="checkbox"
                name="upperCase"
                onChange={onChangeCheckox}
              />
              <span className="checkmark"></span>
            </label>
            <label className="checkbox-container">
              Include Lowercase Letters
              <input
                type="checkbox"
                name="lowerCase"
                onChange={onChangeCheckox}
              />
              <span className="checkmark"></span>
            </label>
            <label className="checkbox-container">
              Include Numbers
              <input
                type="checkbox"
                name="numbers"
                onChange={onChangeCheckox}
              />
              <span className="checkmark"></span>
            </label>
            <label className="checkbox-container">
              Include Symbols
              <input
                type="checkbox"
                name="symbols"
                onChange={onChangeCheckox}
              />
              <span className="checkmark"></span>
            </label>
          </div>
          <div className="password-strength">
            <strong>STRENGTH</strong>
            <div className="strength-validation">
              {(() => {
                switch (passwordStrength) {
                  case 1:
                    return <div className="strength-status">TOO WEAK!</div>;
                  case 2:
                    return <div className="strength-status">WEAK</div>;
                  case 3:
                    return <div className="strength-status">MEDIUM</div>;
                  case 4:
                    return <div className="strength-status">STRONG</div>;
                  default:
                    return null;
                }
              })()}
              {(() => {
                switch (passwordStrength) {
                  case 1:
                    return (
                      <div className="strength-bar">
                        <div className="bar-indicator too-weak"></div>
                        <div className="bar-indicator"></div>
                        <div className="bar-indicator"></div>
                        <div className="bar-indicator"></div>
                      </div>
                    );
                  case 2:
                    return (
                      <div className="strength-bar ">
                        <div className="bar-indicator weak"></div>
                        <div className="bar-indicator weak"></div>
                        <div className="bar-indicator"></div>
                        <div className="bar-indicator"></div>
                      </div>
                    );
                  case 3:
                    return (
                      <div className="strength-bar ">
                        <div className="bar-indicator medium"></div>
                        <div className="bar-indicator medium"></div>
                        <div className="bar-indicator medium"></div>
                        <div className="bar-indicator"></div>
                      </div>
                    );
                  case 4:
                    return (
                      <div className="strength-bar ">
                        <div className="bar-indicator strong"></div>
                        <div className="bar-indicator strong"></div>
                        <div className="bar-indicator strong"></div>
                        <div className="bar-indicator strong"></div>
                      </div>
                    );
                  default:
                    return (
                      <div className="strength-bar ">
                        <div className="bar-indicator"></div>
                        <div className="bar-indicator"></div>
                        <div className="bar-indicator"></div>
                        <div className="bar-indicator"></div>
                      </div>
                    );
                }
              })()}
            </div>
          </div>
          <div className="generate-button">
            <button onClick={onClickGeneratePassword}>
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
    </main>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>Password Generator App</title>
    <meta property="og:title" content="Password Generator App" />
    <meta property="og:type" content="website" />
    <meta
      property="og:description"
      content="Generate your password now for your own security."
    />
    <meta
      property="og:image"
      content="https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/password-generator_NHud31vNn.webp?updatedAt=1678863890907"
    />
  </>
);
