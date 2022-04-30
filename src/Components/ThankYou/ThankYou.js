import React from "react";
import "./ThankYou.css";

const ThankYou = () => {
  return (
    <div className="thank-you">
      <div className="thank-you-msg">
        <h3 className="text-center mb-3">Thank you for registration!</h3>
        <h4>Dear Rakibul Hasan</h4>
        <p>
          Thank you for register on our WMS app. Now you can manage your
          inventory in Fragrance WMS. We have sent a verifoication email to{" "}
          <b className="text-danger">rakib@gmail.com</b>. Please verify your
          email address before start your enventory management. <br /> Regards.
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
