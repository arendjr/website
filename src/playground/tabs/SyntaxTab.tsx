import type { ReactCodeMirrorRef } from "@uiw/react-codemirror";
import { romeAst as biomeAst } from "codemirror-lang-rome-ast";
import React from "react";
import CodeMirror from "@/playground/CodeMirror";
import Collapsible from "@/playground/Collapsible";

interface Props {
	ast: string;
	cst: string;
}

const biomeAstCodeMirrorExtension = [biomeAst()];

export default React.forwardRef<ReactCodeMirrorRef, Props>(function SyntaxTab(
	{ ast, cst },
	ref,
) {
	return (
		<>
			<Collapsible heading="AST">
				<CodeMirror
					value={ast}
					ref={ref}
					extensions={biomeAstCodeMirrorExtension}
					readOnly={true}
					data-testid="ast-output"
				/>
			</Collapsible>
			<Collapsible heading="CST">
				<CodeMirror value={cst} readOnly={true} data-testid="cst-output" />
			</Collapsible>
		</>
	);
});
