import { useState } from 'react';
import { Plus, MoreHorizontal, Calendar, MessageCircle } from 'lucide-react';

type Task = {
  id: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  assignee: { name: string; avatar: string } | null;
  dueDate: string | null;
  tags: string[];
  subtasks: { total: number; completed: number };
  comments: number;
};

type Column = {
  id: string;
  title: string;
  color: string;
  tasks: Task[];
};

const initialColumns: Column[] = [
  {
    id: 'todo',
    title: 'To Do',
    color: 'bg-surface-500',
    tasks: [
      {
        id: 't1',
        title: 'Design new landing page',
        description: 'Create mockups for the new marketing landing page',
        priority: 'high',
        assignee: { name: 'Sarah', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop' },
        dueDate: 'Jul 15',
        tags: ['Design', 'Marketing'],
        subtasks: { total: 4, completed: 1 },
        comments: 3,
      },
      {
        id: 't2',
        title: 'API documentation',
        description: 'Write comprehensive API documentation',
        priority: 'medium',
        assignee: { name: 'Alex', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop' },
        dueDate: 'Jul 20',
        tags: ['Backend', 'Docs'],
        subtasks: { total: 6, completed: 0 },
        comments: 2,
      },
    ],
  },
  {
    id: 'progress',
    title: 'In Progress',
    color: 'bg-amber-500',
    tasks: [
      {
        id: 't3',
        title: 'Implement user authentication',
        description: 'Add OAuth and JWT authentication system',
        priority: 'urgent',
        assignee: { name: 'Emily', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop' },
        dueDate: 'Jul 10',
        tags: ['Backend', 'Security'],
        subtasks: { total: 8, completed: 5 },
        comments: 8,
      },
      {
        id: 't4',
        title: 'Mobile responsive layout',
        description: 'Make all pages mobile-friendly',
        priority: 'high',
        assignee: { name: 'Marcus', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop' },
        dueDate: 'Jul 12',
        tags: ['Frontend', 'Mobile'],
        subtasks: { total: 5, completed: 3 },
        comments: 4,
      },
    ],
  },
  {
    id: 'review',
    title: 'In Review',
    color: 'bg-blue-500',
    tasks: [
      {
        id: 't5',
        title: 'Payment integration',
        description: 'Stripe payment gateway integration',
        priority: 'high',
        assignee: { name: 'Sarah', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop' },
        dueDate: 'Jul 8',
        tags: ['Backend', 'Payments'],
        subtasks: { total: 3, completed: 3 },
        comments: 6,
      },
    ],
  },
  {
    id: 'done',
    title: 'Done',
    color: 'bg-emerald-500',
    tasks: [
      {
        id: 't6',
        title: 'Project setup',
        description: 'Initialize React project with TypeScript',
        priority: 'low',
        assignee: { name: 'Alex', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop' },
        dueDate: 'Jul 5',
        tags: ['Setup'],
        subtasks: { total: 2, completed: 2 },
        comments: 1,
      },
      {
        id: 't7',
        title: 'Database schema design',
        description: 'Design PostgreSQL database schema',
        priority: 'medium',
        assignee: { name: 'Emily', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop' },
        dueDate: null,
        tags: ['Database', 'Backend'],
        subtasks: { total: 4, completed: 4 },
        comments: 2,
      },
    ],
  },
];

const priorityColors = {
  low: 'bg-surface-500',
  medium: 'bg-amber-500',
  high: 'bg-orange-500',
  urgent: 'bg-rose-500',
};

export function TaskManagerBoard() {
  const [columns, setColumns] = useState<Column[]>(initialColumns);
  const [draggedTask, setDraggedTask] = useState<{ task: Task; fromColumn: string } | null>(null);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const handleDragStart = (task: Task, columnId: string) => {
    setDraggedTask({ task, fromColumn: columnId });
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (columnId: string) => {
    if (!draggedTask) return;

    setColumns((prev) => {
      const newColumns = prev.map((col) => {
        if (col.id === draggedTask.fromColumn) {
          return { ...col, tasks: col.tasks.filter((t) => t.id !== draggedTask.task.id) };
        }
        if (col.id === columnId) {
          return { ...col, tasks: [...col.tasks, draggedTask.task] };
        }
        return col;
      });
      return newColumns;
    });

    setDraggedTask(null);
  };

  return (
    <div className="pt-16 lg:pt-0 p-4 lg:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Kanban Board</h1>
          <p className="text-surface-400">Drag and drop to organize your tasks</p>
        </div>
        <div className="flex items-center gap-2">
          <select className="px-4 py-2 rounded-lg bg-surface-800 border border-surface-700 text-white text-sm">
            <option>All Projects</option>
            <option>Website Redesign</option>
            <option>Mobile App</option>
          </select>
          <button className="btn-primary bg-gradient-to-r from-amber-500 to-orange-500">
            <Plus className="w-4 h-4" /> Add Task
          </button>
        </div>
      </div>

      {/* Board */}
      <div className="flex gap-4 overflow-x-auto pb-4">
        {columns.map((column) => (
          <div
            key={column.id}
            className="flex-shrink-0 w-80"
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(column.id)}
          >
            {/* Column Header */}
            <div className="flex items-center justify-between p-3 bg-surface-800/50 rounded-t-xl border border-surface-700 border-b-0">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded ${column.color}`} />
                <h3 className="font-semibold text-white">{column.title}</h3>
                <span className="text-sm text-surface-400 px-2 py-0.5 rounded bg-surface-700">
                  {column.tasks.length}
                </span>
              </div>
              <button className="p-1 rounded hover:bg-surface-700 text-surface-400 hover:text-white">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>

            {/* Tasks */}
            <div className="p-2 bg-surface-800/30 rounded-b-xl border border-surface-700 border-t-0 min-h-96 space-y-2">
              {/* Add Task Button */}
              <button className="w-full p-2 rounded-lg border border-dashed border-surface-600 text-surface-400 text-sm flex items-center justify-center gap-2 hover:border-amber-500/50 hover:text-amber-400">
                <Plus className="w-4 h-4" /> Add Task
              </button>

              {/* Task Cards */}
              {column.tasks.map((task) => (
                <div
                  key={task.id}
                  draggable
                  onDragStart={() => handleDragStart(task, column.id)}
                  onClick={() => setSelectedTask(task)}
                  className="p-4 bg-surface-800 rounded-lg border border-surface-700 cursor-grab active:cursor-grabbing hover:border-surface-600 transition-colors"
                >
                  {/* Priority & Menu */}
                  <div className="flex items-center justify-between mb-2">
                    <span className={`flex items-center gap-1 text-xs font-medium ${
                      task.priority === 'urgent' ? 'text-rose-400' :
                      task.priority === 'high' ? 'text-orange-400' :
                      task.priority === 'medium' ? 'text-amber-400' : 'text-surface-400'
                    }`}>
                      <div className={`w-2 h-2 rounded-full ${priorityColors[task.priority]}`} />
                      {task.priority}
                    </span>
                    <button className="p-1 rounded hover:bg-surface-700 text-surface-400">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Title */}
                  <h4 className="font-medium text-white mb-2">{task.title}</h4>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {task.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded bg-surface-700 text-xs text-surface-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Meta */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {task.dueDate && (
                        <span className="flex items-center gap-1 text-xs text-surface-400">
                          <Calendar className="w-3 h-3" /> {task.dueDate}
                        </span>
                      )}
                      <span className="flex items-center gap-1 text-xs text-surface-400">
                        <MessageCircle className="w-3 h-3" /> {task.comments}
                      </span>
                    </div>
                    {task.assignee && (
                      <img src={task.assignee.avatar} alt={task.assignee.name} className="w-6 h-6 rounded-full" />
                    )}
                  </div>

                  {/* Progress */}
                  {task.subtasks.total > 0 && (
                    <div className="mt-3 flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-surface-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-emerald-500 rounded-full"
                          style={{ width: `${(task.subtasks.completed / task.subtasks.total) * 100}%` }}
                        />
                      </div>
                      <span className="text-xs text-surface-400">
                        {task.subtasks.completed}/{task.subtasks.total}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Task Modal */}
      {selectedTask && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setSelectedTask(null)} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-surface-800 rounded-2xl p-6 border border-surface-700">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold text-white">{selectedTask.title}</h2>
                <p className="text-surface-400 text-sm">{selectedTask.description}</p>
              </div>
              <button onClick={() => setSelectedTask(null)} className="p-2 rounded-lg text-surface-400 hover:text-white">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-surface-400 mb-2">Assignee</h4>
                  <div className="flex items-center gap-2">
                    {selectedTask.assignee ? (
                      <>
                        <img src={selectedTask.assignee.avatar} alt="" className="w-8 h-8 rounded-full" />
                        <span className="text-white">{selectedTask.assignee.name}</span>
                      </>
                    ) : (
                      <span className="text-surface-400">Unassigned</span>
                    )}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-surface-400 mb-2">Due Date</h4>
                  <span className="text-white">{selectedTask.dueDate || 'No due date'}</span>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-surface-400 mb-2">Priority</h4>
                  <span className={`px-3 py-1 rounded-full text-sm ${priorityColors[selectedTask.priority]} text-white`}>
                    {selectedTask.priority}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-surface-400 mb-2">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedTask.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-surface-700 text-surface-300 text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-surface-400 mb-2">Progress</h4>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-surface-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-emerald-500 rounded-full"
                        style={{ width: `${(selectedTask.subtasks.completed / selectedTask.subtasks.total) * 100}%` }}
                      />
                    </div>
                    <span className="text-surface-400 text-sm">
                      {selectedTask.subtasks.completed}/{selectedTask.subtasks.total}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
