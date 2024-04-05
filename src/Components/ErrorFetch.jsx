// import React from 'react';

// const ErrorFetch = ({ error }) => {
//     return (
//         <div>
//             {error}
//         </div>
//     );
// };

// export default ErrorFetch;


import React from 'react';
import { styled } from '@mui/system'; // Import styled from MUI

const StyledErrorMessage = styled('div')({
  color: '#ff0000', // Set color to red
  fontFamily: 'consolas, monospace', // Use Roboto font family
});

const ErrorFetch = ({ error }) => {
    return (
        <StyledErrorMessage>{error}</StyledErrorMessage>
    );
};

export default ErrorFetch;