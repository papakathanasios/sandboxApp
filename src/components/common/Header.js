import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
    return(
        <nav>
            <IndexLink to ="/" activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="/CreateSandbox" activeClassName="active">CreateSandbox</Link>
            {" | "}
            <Link to="/GetSandbox" activeClassName="active">GetSandbox</Link>
        </nav>
    );
};
export default Header;