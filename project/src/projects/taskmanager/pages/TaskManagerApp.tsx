import { Routes, Route } from 'react-router-dom';
import { TaskManagerHome } from './TaskManagerHome';
import { TaskManagerBoard } from './TaskManagerBoard';
import { TaskManagerSidebar } from '../components/TaskManagerSidebar';

export function TaskManagerApp() {
  return (
    <div className="min-h-screen bg-surface-950 flex">
      <TaskManagerSidebar />
      <div className="flex-1 ml-0 lg:ml-64">
        <Routes>
          <Route index element={<TaskManagerHome />} />
          <Route path="board" element={<TaskManagerBoard />} />
          <Route path="board/:boardId" element={<TaskManagerBoard />} />
        </Routes>
      </div>
    </div>
  );
}
