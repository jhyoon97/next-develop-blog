import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.min.css";

// types
import type { CodeBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

interface Props {
  block: CodeBlockObjectResponse;
}

const Code = ({ block }: Props) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <pre>
      <code className={`language-${block.code.language}`}>
        {block.code.rich_text[0].plain_text}
      </code>
    </pre>
  );
};

export default Code;
