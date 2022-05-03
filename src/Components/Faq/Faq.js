import React from "react";
import { Accordion } from "react-bootstrap";

const Faq = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Why this website?</Accordion.Header>
        <Accordion.Body>
          This website will help you to manage inventory of your perfume's
          business.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How to add product?</Accordion.Header>
        <Accordion.Body>
          At first you have to login or register in this website. Then you can
          see add item link in the navbar. Click on the Add item link to get the
          product upload page. There have a add item button in the Manage items
          page. It will take you to the product upload page as well.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          How to update product quantity or Deliver product?
        </Accordion.Header>
        <Accordion.Body>
          You can see an UPDATE button at the bottom of every card in homepage,
          Also you can see a pencil icon in action column of the Manage items/My
          items page. Each button will take you to the quantity update page. You
          have to put a quantity and press the update button to update the
          product quantity. Also you can see a delivered button in the update
          page. Each click on the delivered button will deliver 1 product.
          Authentication is required to access the update page.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Faq;
