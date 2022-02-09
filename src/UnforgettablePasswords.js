import React, { useEffect, useState } from "react";
import { getEnglishLetters, getIdeaPrompts } from "./api";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";

const Generator = () => {
  return (
    <section id="generator__block" className="form__block">
      <PasswordIdeaPrompts />
      <section id="generator-result__block">
        <p className="password-result__text">PASSWORD RESULT HERE</p>
        <button id="clear-form__button" className="generator__button">
          Start Over
        </button>
      </section>
      <form id="generator__form" action="">
        <section id="password-options__block">
          <section id="password-length-options__block">
            {" "}
            <p id="password-length__label">Password Length:</p>
            <div>
              {" "}
              <input type="radio" name="password-length" id="length8" />
              <label htmlFor="length8">8</label>
            </div>
            <div>
              {" "}
              <input type="radio" name="password-length" id="length12" />
              <label htmlFor="length12">12</label>
            </div>
            <div>
              <input type="radio" name="password-length" id="length16" />
              <label htmlFor="length16">16</label>
            </div>
            <div>
              <input type="radio" name="password-length" id="length20" />
              <label htmlFor="length20">20</label>
            </div>
          </section>
          <section className="substitution__block">
            <section className="include-special-characters substitution__options">
              <input
                type="checkbox"
                id="include-special-characters__option"
                name="include-special-characters__option"
              />
              <label htmlFor="include-special-characters__option">
                Special Characters
              </label>
            </section>
            <section className="substitution__options">
              <input
                type="checkbox"
                id="include-numbers__option"
                name="include-numbers__option"
              />
              <label htmlFor="include-numbers__option">Numbers</label>
            </section>
          </section>
        </section>
        <section id="user-word__block">
          <label htmlFor="userWord">Give me a word! Any word!</label>
          <input
            id="userWord"
            name="userWord"
            type="text"
            className="user-word__input"
            placeholder="placeholder text"
          />
        </section>
        <section id="generate-actions__block">
          <button
            id="generate-password__button"
            className="generator-action__button generator__button"
          >
            Make My Password, Computer!
          </button>
          <button className="generator-action__button generator__button">
            Repeat
          </button>
        </section>
      </form>
    </section>
  );
};

const PasswordIdeaPrompts = () => {
  // this component will need to export the phrase to Generator.js so that Generator can get the right placeholder value to put in the placeholder
  return (
    <>
      <section id="password-ideas__block">
        <p className="password-idea__text">
          Password Idea: Your favorite dog breed
        </p>
        <button
          className="get-password-idea__buton"
          title="Get some password ideas"
        >
          New Idea
        </button>
      </section>
    </>
  );
};

export default function UnforgettablePasswords() {
  const theLetters = getEnglishLetters();
  const ideaPrompts = getIdeaPrompts();

  const [allEnglishLetters, setAllEnglishLetters] = useState([theLetters]);
  const [allIdeaPrompts, setAllIdeaPrompts] = useState([ideaPrompts]);

  useEffect(() => {
    setAllEnglishLetters(theLetters);
    setAllIdeaPrompts(ideaPrompts)
  }, []);
  

  return (
    <>
      <NavBar />
      <h1>this is the Unforgettable Passwords Generator</h1>
      <Generator />

      <Footer />
    </>
  );
}
