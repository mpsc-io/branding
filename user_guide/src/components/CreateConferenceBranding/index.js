import React from 'react';
import CodeBlock from '@theme/CodeBlock';

// import './index.css';

const CreateConferenceBranding=()=>{
    return(
        <CodeBlock className="language-bash">
            {"curl -v -H \"Authorization: $JWT\" \\\n" +
                "        --data @/tmp/create_conf.json -X POST \\\n" +
                "        https://devapi.hoot.mx/v1/create_conference/Kurosawa-Family"}
        </CodeBlock>
    );
}

export default CreateConferenceBranding;