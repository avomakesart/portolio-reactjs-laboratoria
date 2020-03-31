import React from "react";
import { Button } from "../../components/extras/button";
import { SecondButton } from "../../components/extras/second-button";

export const Home = () => {
  return (
    <div>
      <Button />
      <SecondButton label="click me please" className="button-style" />
    </div>
  );
};
