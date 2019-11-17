import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Async } from "../tab-tab/components";

import { useParams, useRouteMatch } from "react-router";
function Topic() {
  let { topicId } = useParams();

  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}

const ReduxTpics = () => {
  return (
    <div>
      <h2>Topics</h2>
        <Async />
    </div>
  );
};

export default ReduxTpics;
