export interface NestedObjectModel {
    layer: number;
    nodeTitle: string;
    nodeIndexInArray: number;
    hasChild: boolean;
    children?: Array<NestedObjectModel>;
}

export const nestedObjectGenerator = (array: Array<string>, nodeIndex: number, layer: number = 0): NestedObjectModel => {
    if (!array.length) return {
        layer: layer,
        nodeTitle: '',
        nodeIndexInArray: 0,
        hasChild: false,
    }
    return {
        layer: layer,
        nodeTitle: array[nodeIndex],
        nodeIndexInArray: nodeIndex,
        hasChild: abilityToHaveChildren(array.length, nodeIndex),
        children: !abilityToHaveChildren(array.length, nodeIndex)
            ? undefined
            : validIndexesOfNodeChildren(array.length, indexesOfNodeChildren(nodeIndex)).map((indexOfChild: number) => {
                return nestedObjectGenerator(array, indexOfChild, (layer + 1))
            })
    }
}

const abilityToHaveChildren = (arrayLength: number, nodeIndex: number): boolean => {
    if (nodeIndex >= (arrayLength - 1)) return false;
    const childrenIndexes: [number, number] = indexesOfNodeChildren(nodeIndex)
    let abilityToHaveChildren: boolean = false;
    if (childrenIndexes.length) {
        for (let i = 0; i < childrenIndexes.length; i++) {
            if (childrenIndexes[i] <= (arrayLength - 1)) {
                abilityToHaveChildren = true;
                break;
            }
        }
    }
    return abilityToHaveChildren;
}

const indexesOfNodeChildren = (nodeIndex: number): [number, number] => {
    const indexesOfNodeChildren: [number, number] = [((2 * nodeIndex) + 1), ((2 * nodeIndex) + 2)];
    return indexesOfNodeChildren;
}

const validIndexesOfNodeChildren = (arrayLength: number, indexesOfNodeChildren: [number, number]): Array<number> => {
    const validIndexesOfNodeChildren: Array<number> = indexesOfNodeChildren.filter((item: number) => item <= (arrayLength - 1));
    return validIndexesOfNodeChildren;
}