import { useMemo, useState } from "react";
import AppUi from "./components/AppUi";
import DigramTreeWrapper from "./components/DigramTreeWrapper";
import TextArea from "./components/TextArea";
import Title from "./components/Title";
import Tree from "./components/Tree";
import { nestedObjectGenerator } from "./utils/nestedObjectGenerator";

function App() {
  const [data, setData] = useState<string>('')
  const calculatedData: Array<string> = useMemo(() => { return data.split(' ').filter((item: string) => item !== ''); }, [data])

  return (
    <AppUi>
      <TextArea value={data} onChange={(value: string) => setData(value)} />
      <DigramTreeWrapper>
        <Title>Binary Tree Digram</Title>
        <Tree data={nestedObjectGenerator(calculatedData, 0, 0)} />
      </DigramTreeWrapper>
    </AppUi>
  );
}

export default App;