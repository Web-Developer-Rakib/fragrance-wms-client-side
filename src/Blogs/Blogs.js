import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="container qna-section">
      <h1 className="text-center my-4">Question and Answer</h1>
      <div className="qna">
        <h3 className="question">
          <b>Question: </b>Difference between javascript and nodejs.
        </h3>
        <p>
          <b>Answer: </b>
          <br />
          <u>
            <i>Javascript: </i>
          </u>
          It is a scripting language, but JS is basically the ECMA script’s
          updated version. Javascript is mainly utilised in making the HTML web
          pages more dynamic and interactive. It is a high-level language, and
          it makes use of the Oops concept. Yet, it is based primarily on the
          concept of prototype inheritance. <br />
          <br />
          <u>
            <i>Node JS: </i>
          </u>
          It is a JS runtime environment that lets Javascript to be run on the
          server-side. It is cross-platform, and it thus allows the JS code to
          run outside any browser easily. There are various modules in NodeJS,
          and it is mainly utilised in the process of web development.
        </p>
      </div>
      <div className="qna">
        <h3 className="question">
          <b>Question: </b>When should you use nodejs and when should you use
          mongodb?
        </h3>
        <p>
          <b>Answer: </b>We should use Node.js, When we have to create server
          side. And, We should use mongoBD, When we need to store data in
          database.
        </p>
      </div>
      <div className="qna">
        <h3 className="question">
          <b>Question: </b>Differences between sql and nosql databases.
        </h3>
        <p>
          <b>Answer: </b>
          <br />
          <u>
            {" "}
            <i>SQL: </i>
          </u>
          Structured Query Language or SQL is a table-based relational database.
          By applying the SQL programming language, users can now search,
          insert, modify and delete data from the database records. This in no
          way limits the use of SQL. The services it supports are also not
          limited to the optimization or administration of the database. <br />
          <br />
          <u>
            <i>NoSQL: </i>
          </u>
          NoSQL is a non-relational database or DMS without any fixed schema,
          while it is easy to scale. Distributed data stores that require a
          large quantity of data storage needs have a call for NoSQL. Big Data
          and real-time web apps make use of NoSQL.
        </p>
      </div>
      <div className="qna">
        <h3 className="question">
          <b>Question: </b>What is the purpose of jwt and how does it work?
        </h3>
        <p>
          <b>Answer: </b>The purpose of JWT is to secure API. Instead of storing
          information on the server after authentication, JWT creates a JSON web
          token and encodes, sterilizes, and adds a signature with a secret key
          that cannot be tampered with. This key is then sent back to the
          browser. Each time a request is sent, it verifies and sends the
          response back.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
