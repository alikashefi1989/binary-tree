import styled from "@emotion/styled";

interface DigramTreeWrapperProps {
    height: string,
}

const DigramTreeWrapper = styled.div((props: DigramTreeWrapperProps) => ({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '5px',
    boxSizing: 'border-box',
    width: '100%',
    maxWidth: '100%',
    height: props.height,
    overflow: 'auto',
    border: '2px solid #2724ff',
    borderRadius: '8px',
    ':hover': {
        borderColor: '#0400ed',
    },
}))

export default DigramTreeWrapper