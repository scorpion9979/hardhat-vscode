import { CustomErrorDefinition, FinderType, Node } from "@common/types";

export class CustomErrorDefinitionNode extends Node {
    astNode: CustomErrorDefinition;

    constructor (customErrorDefinition: CustomErrorDefinition, uri: string, rootPath: string) {
        super(customErrorDefinition, uri, rootPath);
        this.astNode = customErrorDefinition;
        // TO-DO: Implement name location for rename
    }

    accept(find: FinderType, orphanNodes: Node[], parent?: Node, expression?: Node): Node {
        this.setExpressionNode(expression);
        // TO-DO: Method not implemented
        return this;
    }
}
