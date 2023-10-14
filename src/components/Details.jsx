import React, { useEffect, useState } from "react";
import data from "../CA.json";
const Details = () => {
  return (
    <div>
      {data.map((accountant) => (
        <div key={accountant.id}>
          <h2>{accountant.name}</h2>
          <img src={accountant.image} alt={accountant.name} />
          <p>{accountant.intro}</p>
          <p>Rating: {accountant.rating}</p>
          <p>Review Count: {accountant.reviewCount}</p>
          <p>Task Complexity: {accountant.taskComplexity}</p>
          <p>Price: {accountant.price}</p>
          <p>Delivery Time: {accountant.deliveryTime}</p>
          <p>Testimonial: {accountant.testimonial.text}</p>
          <p>Author: {accountant.testimonial.author}</p>
          <p>From: {accountant.about.from}</p>
          <p>Partner Since: {accountant.about.partnerSince}</p>
          <p>Average Response Time: {accountant.about.averageResponseTime}</p>
          <p>Description: {accountant.about.description}</p>
          <p>Services: {accountant.about.services.join(", ")}</p>
          <p>Benefits: {accountant.about.benefits.join(", ")}</p>
        </div>
      ))}
    </div>
  );
};

export default Details;
