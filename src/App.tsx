import './app.scss';
import DraggableZone from './components/draggable-zone';
import RenderTree from './components/render-tree';
import { getTreeData } from './data/treeData';

function App() {
  const node = getTreeData()

  return (
    <div className="container">
      <DraggableZone>
        <div className="tree">
          <RenderTree node={node} />
        </div>
      </DraggableZone>
    </div>
  )
}

export default App
