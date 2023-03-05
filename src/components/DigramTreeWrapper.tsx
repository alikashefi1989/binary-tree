import styled from "@emotion/styled";

const DigramTreeWrapper = styled.div(() => ({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '5px',
    boxSizing: 'border-box',
    width: '100%',
    height: '63vh',
    overflow: 'auto',
    border: '2px solid #2724ff',
    borderRadius: '8px',
    ':hover': {
        borderColor: '#0400ed',
    },
}))

export default DigramTreeWrapper