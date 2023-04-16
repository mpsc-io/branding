import React from 'react';
import CodeBlock from '@theme/CodeBlock';
// import './index.css';

const FeaturesBranding=()=>{
    return(
        <CodeBlock className="language-json">
            {"# Sample Payload for creating a family conference\n" +
                "{\n" +
                "  \"moderators\": [\n" +
                "    \"takeshi@kurosawa.io\"\n" +
                "  ],\n" +
                "  \"participants\": [\n" +
                "    \"kenji@kurosawa.io\"\n" +
                "  ],\n" +
                "  \"features\": {\n" +
                "    \"message_for_moderator\": \"Family Content\",\n" +
                "    \"documents\": {\n" +
                "      \"pdf_list\": [\n" +
                "        {\n" +
                "          \"name\": \"mydoc.pdf\",\n" +
                "          \"base64_representation\": \"base64-of-pdf\"\n" +
                "        }\n" +
                "      ]\n" +
                "    },\n" +
                "    \"branding_client_title\": \"黒澤家\",\n" +
                "    \"branding_logo_url\": \"https://i1.wp.com/rakuten.today/wp-content/uploads/2018/06/one_logo.jpg\",\n" +
                "    \"branding_skin_color\": \"#FF5733\"\n" +
                "  }\n" +
                "}"}
        </CodeBlock>
    );
}

export default FeaturesBranding;