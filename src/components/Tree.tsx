import styled from "@emotion/styled"
import { Fragment, useState } from "react"
import { NestedObjectModel } from "../utils/nestedObjectGenerator"
import { routeOfIndexFounder } from "../utils/routeOfIndexFounder"

interface TreeProps {
    data: NestedObjectModel
}

const Tree: React.FC<TreeProps> = (props) => {
    const [hover, setHover] = useState<boolean>(false)
    return <>
        <FirstNodeTitle>
            {
                props.data.nodeTitle === ''
                    ? 'Node Not Found'
                    : <CircleTitle
                        style={{
                            backgroundColor: hover ? 'blue' : 'white',
                            color: hover ? 'red' : 'black',
                        }}
                    >
                        {props.data.nodeTitle}
                    </CircleTitle>
            }
        </FirstNodeTitle>
        <TreeWrapper>
            <NestedTree data={props.data} setHover={setHover} />
        </TreeWrapper>
    </>
}

export default Tree

const NestedTree: React.FC<TreeProps & { setHover?: React.Dispatch<React.SetStateAction<boolean>> }> = (props) => {
    const [activeIndexes, setActiveIndexes] = useState<Array<number>>([])
    return <NodesWrapper>
        {
            props.data.children && props.data.children.length && props.data.children.map((item: NestedObjectModel, i: number) => {
                return <Fragment key={item.nodeIndexInArray.toString()}>
                    <NodesWrapperVLine />
                    <NodesWrapperHLine />
                    <NodeItem
                        key={(i + 1).toString()}
                        onMouseEnter={() => {
                            setActiveIndexes(routeOfIndexFounder(item.nodeIndexInArray));
                            props.setHover && props.setHover(true);
                        }}
                        onMouseLeave={() => {
                            setActiveIndexes([])
                            props.setHover && props.setHover(false);
                        }}
                    >
                        <NodeTitle>
                            <CircleTitle
                                style={{
                                    backgroundColor: activeIndexes.includes(item.nodeIndexInArray) === true ? 'blue' : 'white',
                                    color: activeIndexes.includes(item.nodeIndexInArray) === true ? 'red' : 'black',
                                }}
                            >
                                {item.nodeTitle}
                                <CircleTitleLine />
                            </CircleTitle>
                        </NodeTitle>
                        {item.children && item.children.length && <NestedTree data={item} />}
                    </NodeItem>
                </Fragment>
            })
        }
    </NodesWrapper>
}

const TreeWrapper = styled.div(() => ({
    width: 'max-content',
    height: 'max-content',
    minWidth: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
}))

const FirstNodeTitle = styled.div(() => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5px',
}))

const NodeTitle = styled.div(() => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '5px',
}))

const NodesWrapper = styled.div(() => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '30px',
    margin: '5px',
    position: 'relative',
}))

const NodeItem = styled.div(() => ({
    width: '50%',
    display: 'flex',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
}))

const CircleTitle = styled.span(() => ({
    width: '60px',
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    border: '1px solid black',
    position: 'relative',
    fontWeight: 600,
    cursor: 'pointer',
    ':hover': {
        backgroundColor: 'blue !important',
        color: 'red !important',
    }
}))

const CircleTitleLine = styled.div(() => ({
    display: 'inline-block',
    width: '1px',
    height: '10px',
    margin: 'auto',
    backgroundColor: 'black',
    top: '-10px',
    position: 'absolute',
}))

const NodesWrapperHLine = styled.div(() => ({
    display: 'inline-block',
    width: '50%',
    height: '1px',
    left: 0,
    right: 0,
    margin: 'auto',
    backgroundColor: 'black',
    top: '-5px',
    position: 'absolute',
}))

const NodesWrapperVLine = styled.div(() => ({
    display: 'inline-block',
    width: '1px',
    height: '5px',
    left: 0,
    right: 0,
    margin: 'auto',
    backgroundColor: 'black',
    top: '-10px',
    position: 'absolute',
}))