import React from 'react';
import CodeBlock from '@theme/CodeBlock';

import './index.css';

const CreateConferenceBranding=()=>{
    return(
        <CodeBlock className="language-bash">
            {"curl -v -H \"Authorization: $JWT\" \\\n" +
                "        --data @/tmp/create_conf.json -X POST \\\n" +
                "        https://devapi.hoot.mx/v1/create_conference/Kurosawa-Family"}
        </CodeBlock>
        // <code className="language-bash">
        //     {"curl -v -H \"Authorization: $JWT\" \\\n" +
        //         "        --data @/tmp/create_conf.json -X POST \\\n" +
        //         "        https://devapi.hoot.mx/v1/create_conference/Kurosawa-Family"}
        // </code>
      //   <div className="code-container">
      //   <code className="code">
      //     {"curl -v -H \"Authorization: $JWT\" \\\n" +
      //           "        --data @/tmp/create_conf.json -X POST \\\n" +
      //           "        https://devapi.hoot.mx/v1/create_conference/Kurosawa-Family"}
      //   </code>
      // </div>
    );
}

export default CreateConferenceBranding;