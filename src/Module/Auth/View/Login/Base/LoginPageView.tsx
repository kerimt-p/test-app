import React from 'react';
import {$api} from "@producter/Module/Auth/Store/Login";

const LoginPageView: React.FC = () => {
    const feedback = $api.getAllFeedbacks({
        first: 10
    })

    return (
        <div>
            <Header/>
            <Form />
        </div>
    );
};

export default LoginPageView;
