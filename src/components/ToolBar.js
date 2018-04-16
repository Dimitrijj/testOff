import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

 function ToolBar(props) {
    
        return (
            <div>
                <Button onClick={props.sortByName}>Сортировать по имени</Button>
                <Button onClick={props.sortByAge}>Сортировать по возрасту</Button>
            </div>
        );
}
ToolBar.propTypes = {
	onClick: PropTypes.func.isRequired,
	
};

export default ToolBar;