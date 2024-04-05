// import React from 'react';

// const Loading = () => {
//     return (
//         <p>Loading...</p>
//     );
// };

// export default Loading;

import React from 'react';
import { CircularProgress } from '@mui/material'; // Import CircularProgress from MUI

const Loading = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <CircularProgress color="primary" /> {/* Use CircularProgress from MUI */}
        </div>
    );
};

export default Loading;