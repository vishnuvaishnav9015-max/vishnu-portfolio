import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Send, Image, MoreHorizontal, Check, CheckCheck, Phone, Video, ArrowLeft } from 'lucide-react';

const conversations = [
  {
    id: '1',
    user: {
      name: 'Sarah Chen',
      username: 'sarahchen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop',
      online: true,
    },
    lastMessage: 'That sounds great! Let me know when you\'re free to discuss.',
    time: '2m',
    unread: 3,
    messages: [
      { id: 1, text: 'Hey! I saw your latest project - it looks amazing!', sent: false, time: '10:30 AM' },
      { id: 2, text: 'Thanks! I worked really hard on it.', sent: true, time: '10:32 AM', read: true },
      { id: 3, text: 'Would you be interested in collaborating on something similar?', sent: false, time: '10:35 AM' },
      { id: 4, text: 'That sounds great! Let me know when you\'re free to discuss.', sent: true, time: '10:40 AM', read: false },
    ],
  },
  {
    id: '2',
    user: {
      name: 'Alex Rivera',
      username: 'alexrivera',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop',
      online: false,
    },
    lastMessage: 'Just pushed the changes to the repo',
    time: '1h',
    unread: 0,
    messages: [
      { id: 1, text: 'How\'s the feature coming along?', sent: true, time: '9:00 AM', read: true },
      { id: 2, text: 'Almost done! Just finishing up the tests.', sent: false, time: '9:15 AM' },
      { id: 3, text: 'Just pushed the changes to the repo', sent: false, time: '9:30 AM' },
    ],
  },
  {
    id: '3',
    user: {
      name: 'Emily Zhang',
      username: 'emilyzhang',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop',
      online: true,
    },
    lastMessage: 'See you at the meetup tomorrow!',
    time: '3h',
    unread: 0,
    messages: [
      { id: 1, text: 'Are you going to the React meetup?', sent: false, time: '2:00 PM' },
      { id: 2, text: 'Yes! I\'ll be there. Will you be presenting?', sent: true, time: '2:05 PM', read: true },
      { id: 3, text: 'No, just attending this time. See you at the meetup tomorrow!', sent: false, time: '2:10 PM' },
    ],
  },
];

export function SocialMessages() {
  const [selectedChat, setSelectedChat] = useState(conversations[0]);
  const [message, setMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredConversations = conversations.filter(c =>
    c.user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sendMessage = () => {
    if (!message.trim()) return;
    setMessage('');
  };

  return (
    <div className="pt-4 sm:pt-20 pb-20 sm:pb-8 h-screen">
      <div className="max-w-5xl mx-auto px-4">
        <div className="h-[calc(100vh-8rem)] sm:h-[calc(100vh-7rem)] flex overflow-hidden rounded-xl bg-surface-800/50 border border-surface-700">
          {/* Conversations List */}
          <div className={`w-full sm:w-80 flex-shrink-0 border-r border-surface-700 ${
            selectedChat ? 'hidden sm:block' : 'block'
          }`}>
            {/* Header */}
            <div className="p-4 border-b border-surface-700">
              <h1 className="text-xl font-bold text-white mb-4">Messages</h1>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400" />
                <input
                  type="text"
                  placeholder="Search messages..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-surface-700/50 text-white text-sm placeholder-surface-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Conversations */}
            <div className="overflow-y-auto">
              {filteredConversations.map((chat) => (
                <button
                  key={chat.id}
                  onClick={() => setSelectedChat(chat)}
                  className={`w-full p-4 flex items-center gap-3 hover:bg-surface-700/50 transition-colors ${
                    selectedChat.id === chat.id ? 'bg-surface-700/50' : ''
                  }`}
                >
                  <div className="relative">
                    <img src={chat.user.avatar} alt={chat.user.name} className="w-12 h-12 rounded-full" />
                    {chat.user.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-surface-800" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0 text-left">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="font-medium text-white">{chat.user.name}</span>
                      <span className="text-xs text-surface-400">{chat.time}</span>
                    </div>
                    <p className="text-sm text-surface-400 truncate">{chat.lastMessage}</p>
                  </div>
                  {chat.unread > 0 && (
                    <div className="w-5 h-5 rounded-full bg-emerald-500 text-white text-xs flex items-center justify-center">
                      {chat.unread}
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Chat View */}
          {selectedChat ? (
            <div className={`flex-1 flex flex-col ${selectedChat ? 'block' : 'hidden sm:block'}`}>
              {/* Chat Header */}
              <div className="p-4 border-b border-surface-700 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSelectedChat(null as any)}
                    className="sm:hidden p-2 text-surface-400 hover:text-white"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <Link to={`/projects/social/profile/${selectedChat.user.username}`}>
                    <img src={selectedChat.user.avatar} alt={selectedChat.user.name} className="w-10 h-10 rounded-full" />
                  </Link>
                  <div>
                    <p className="font-semibold text-white">{selectedChat.user.name}</p>
                    <p className="text-xs text-emerald-400">
                      {selectedChat.user.online ? 'Active now' : 'Offline'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 rounded-full text-surface-400 hover:text-white hover:bg-surface-700">
                    <Phone className="w-5 h-5" />
                  </button>
                  <button className="p-2 rounded-full text-surface-400 hover:text-white hover:bg-surface-700">
                    <Video className="w-5 h-5" />
                  </button>
                  <button className="p-2 rounded-full text-surface-400 hover:text-white hover:bg-surface-700">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {selectedChat.messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sent ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[75%] px-4 py-2.5 rounded-2xl ${
                        msg.sent
                          ? 'bg-emerald-500 text-white rounded-br-sm'
                          : 'bg-surface-700 text-white rounded-bl-sm'
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                      <div className="flex items-center justify-end gap-1 mt-1">
                        <span className="text-xs opacity-70">{msg.time}</span>
                        {msg.sent && msg.read !== undefined && (
                          msg.read ? (
                            <CheckCheck className="w-4 h-4 opacity-70" />
                          ) : (
                            <Check className="w-4 h-4 opacity-70" />
                          )
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-surface-700">
                <div className="flex items-center gap-3">
                  <button className="p-2 rounded-full text-surface-400 hover:text-white hover:bg-surface-700">
                    <Image className="w-5 h-5" />
                  </button>
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="Type a message..."
                    className="flex-1 px-4 py-2.5 rounded-full bg-surface-700/50 text-white text-sm placeholder-surface-400 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                  <button
                    onClick={sendMessage}
                    disabled={!message.trim()}
                    className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center disabled:opacity-50"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="hidden sm:flex flex-1 items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-surface-700 flex items-center justify-center mb-4">
                  <Send className="w-8 h-8 text-surface-500" />
                </div>
                <p className="text-white font-medium mb-1">Your messages</p>
                <p className="text-surface-400 text-sm">Select a conversation to start chatting</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
