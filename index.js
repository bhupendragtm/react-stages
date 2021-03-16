import React from 'react';
import ReactDOM from 'react-dom';
import * as detail from "./App";

ReactDOM.render(
<>
<ol>
<li>Gautam</li>
<li>   {detail.default}</li>
<li>   {detail.perm_address}</li>
<li>   {detail.myName()}</li>
<li>   {detail.myNames()}</li>
</ol>
</>,document.getElementById("root")
);