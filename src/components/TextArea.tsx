import styled from '@emotion/styled'

interface TextAreaProps {
    value: string,
    ref: React.RefObject<HTMLTextAreaElement>,
    onChange: (value: string) => void
}

const TextArea: React.FC<TextAreaProps> = (props) => {
    return <TextAreaUi
        ref={props.ref}
        value={props.value}
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => props.onChange(event.target.value)}
    />
}

export default TextArea

const TextAreaUi = styled.textarea(() => ({
    boxSizing: 'border-box',
    width: '100%',
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '10vh',
    maxHeight: '35vh',
    outline: 'none',
    fontSize: '18px',
    fontWeight: 600,
    color: '#333333',
    border: '2px solid grey',
    borderRadius: '8px',
    wordBreak: 'break-word',
    wordWrap: 'break-word',
    padding: '10px',
    overflowY: 'auto',
    marginBottom: '15px',
    ':hover': {
        borderColor: 'black',
        color: 'black',
        fontWeight: 700,
    },
    ':focus': {
        borderColor: 'black',
        color: 'black',
        fontWeight: 700,
    },
}))