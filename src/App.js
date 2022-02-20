import './App.css'

function App() {
  const dragStartHandler = (event) => {
    event.dataTransfer.setData('text/html', event.target.nodeName)
    event.dataTransfer.dropEffect = 'copy'
  }

  const dropHandler = (event) => {
    const data = event.dataTransfer.getData('text/html')
    const child = document.createElement(data)
    const attribute = document.createAttribute('contenteditable')
    const newContent = document.createTextNode('Start adding text here...')
    attribute.value = 'true'
    child.appendChild(newContent)
    child.setAttributeNode(attribute)
    event.target.appendChild(child)
  }

  const dragOverHandler = (event) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'copy'
  }

  return (
    <div className='App'>
      <section className='art_board_container'>
        <div className='browser_bar'></div>
        <div
          onDrop={dropHandler}
          onDragOver={dragOverHandler}
          className='art_board'
        ></div>
      </section>
      <aside className='controller_container'>
        <h2>Blocks</h2>
        <details>
          <summary>Heading</summary>
          <h1 className='block' draggable={true} onDragStart={dragStartHandler}>
            Heading 1
          </h1>
          <h2 className='block' draggable={true} onDragStart={dragStartHandler}>
            Heading 2
          </h2>
          <h3 className='block' draggable={true} onDragStart={dragStartHandler}>
            Heading 3
          </h3>
          <h4 className='block' draggable={true} onDragStart={dragStartHandler}>
            Heading 4
          </h4>
          <h5 className='block' draggable={true} onDragStart={dragStartHandler}>
            Heading 5
          </h5>
          <h6 className='block' draggable={true} onDragStart={dragStartHandler}>
            Heading 6
          </h6>
        </details>
      </aside>
    </div>
  )
}

export default App
