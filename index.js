import React from 'react';
import ReactDOM from 'react-dom';
import myfav, {perm_address, myName, myNames} from "./App";

ReactDOM.render(
<>
<ol>
<li>Gautam</li>
<li>{myfav}</li>
<li>{perm_address}</li>
<li>{myName()}</li>
<li>{myNames()}</li>
</ol>
</>,document.getElementById("root")
);