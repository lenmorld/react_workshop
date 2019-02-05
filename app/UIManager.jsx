import React from 'react';
import data from './data';

import Header from './Header';

 console.log(data);

 class UIManager extends React.Component {
    render() {
        return(
					<div>
						<Header />
						<div>List goes here...</div>
					</div>

        );
    }
}

 export default UIManager;
 