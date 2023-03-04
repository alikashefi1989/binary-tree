import { createContext, useRef, useState } from "react";
import AppUi from "./components/AppUi";
import DigramTreeWrapper from "./components/DigramTreeWrapper";
import TextArea from "./components/TextArea";
import Title from "./components/Title";

export const DataContext = createContext<{
  data: string,
  setData: React.Dispatch<React.SetStateAction<string>>
} | null>(null)

function App() {
  const [data, setData] = useState<string>('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  return (
    <DataContext.Provider value={{ data, setData }}>
      <AppUi>
        <TextArea
          ref={textareaRef}
          value={data}
          onChange={(value: string) => setData(value)}
        />
        <DigramTreeWrapper
          height={textareaRef.current === null
            ? '88vh'
            : `calc(98vh - ${textareaRef.current.clientHeight})`
          }
        >
          <Title>Binary Tree Digram</Title>
        </DigramTreeWrapper>
      </AppUi>
    </DataContext.Provider>
  );
}

export default App;