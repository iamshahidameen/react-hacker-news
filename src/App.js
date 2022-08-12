import React from 'react';
import SearchForm from './SearchForm';
import Stories from './Stories';
import Buttons from './Buttons';
function App() {
  return (
    <>
      <form className="search-form">
        <h2>search hacker news</h2>
        <input type="text" className="form-input" />
      </form>
      <div className="btn-container">
        <button>prev</button>
        <p>1 of 50</p>
        <button>next</button>
      </div>
      <section className="stories">
        <article className="story">
          <h4 className="title">
            Relicensing React, Jest, Flow, and Immutable.js
          </h4>
          <p className="info">
            2280 points by <span>dwwoelfel | </span> 498 comments
          </p>
          <div>
            <a
              href="https://code.facebook.com/posts/300798627056246"
              className="read-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              read more
            </a>
            <button className="remove-btn">remove</button>
          </div>
        </article>
      </section>
    </>
  );
}

export default App;
