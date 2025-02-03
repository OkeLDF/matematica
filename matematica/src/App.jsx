import { JSXGraph } from "jsxgraph"

function App() {
  const board = JSXGraph.initBoard(
    'box',
    {
      boundingbox: []
    }
  )

  return (
    <>
      <h1>Hello World</h1>
      <div
        id="box"
        className="jxgbox border "
        style={{
          width: '600px',
          height: '600px',
          backgroundColor: 'white'
        }}
      />
    </>
  )
}

export default App
