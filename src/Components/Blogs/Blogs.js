import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="container qna-section">
      <h1 className="text-center my-4">Blogs</h1>
      <div className="qna">
        <h3 className="question">Which perfume lasts the longest?</h3>
        <p>
          Oakmoss and Vetiver are one of the most long-lasting base notes. These
          fragrances slowly evaporate in comparison to others. So you will smell
          them even many hours after the fading of heart and top notes. They
          also keep the blend of the whole perfume.
        </p>
      </div>
      <div className="qna">
        <h3 className="question">What smell do guys like on a girl?</h3>
        <p>
          Boys love when girls around them wear fruity perfumes with citrusy
          aroma especially oranges and lemons. They have an enchanting effect on
          one's mood with a rare kind of freshness. The moment guys take a whiff
          of this perfume they immediately feel relaxed.
        </p>
      </div>
      <div className="qna">
        <h3 className="question">How do I find my signature scent?</h3>
        <p>
          Giving yourself time to really understand if you are going to enjoy
          the fragrance is the key to finding your signature scent. “Allow
          yourself time to really experience the whole fragrance, from the top
          notes that you immediately smell, right through to the deeper, longer
          lasting base notes.
        </p>
      </div>
      <div className="qna">
        <h3 className="question">Do perfumes expire?</h3>
        <p>
          Many perfumes don't have a set expiry date and can last anywhere
          between 1-10 years. However, three to five years is often the average
          shelf life of a fragrance and most of Shay & Blue's fragrances will
          still perform for the length of time. According to experts, perfumes
          with heavier base notes will last the longest.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
