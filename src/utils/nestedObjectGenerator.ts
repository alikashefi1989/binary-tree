export const nestedObjectGenerator = (array: Array<string>, initNode: number = 0): NestedObjectModel => {
    if (!array.length) return {
        nodeTitle: 'Not Found Node',
        nodeIndexInArray: 0,
        hasChild: false,
    }
    return {
        nodeTitle: array[initNode],
        nodeIndexInArray: initNode,
        hasChild: (initNode >= (array.length - 1)) ? false : true,
        children: (initNode >= (array.length - 1)) ? undefined : []
    }
}

export interface NestedObjectModel {
    nodeTitle: string;
    nodeIndexInArray: number;
    hasChild: boolean;
    children?: Array<NestedObjectModel>;
}