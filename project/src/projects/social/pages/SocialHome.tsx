import { useState } from 'react';
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal, Image, Smile, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const posts = [
  {
    id: '1',
    user: {
      name: 'Sarah Chen',
      username: 'sarahchen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop',
      verified: true,
    },
    content: 'Just launched my new portfolio website! Check it out and let me know what you think. Built with React, TypeScript and some amazing animations. #webdev #portfolio',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&auto=format&fit=crop',
    likes: 234,
    comments: 18,
    shares: 12,
    time: '2h ago',
    isLiked: false,
  },
  {
    id: '2',
    user: {
      name: 'Alex Rivera',
      username: 'alexrivera',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop',
      verified: false,
    },
    content: 'Coding at 3 AM hits different. Just shipped a full-stack app in one sitting. Coffee is my best friend right now.',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&auto=format&fit=crop',
    likes: 156,
    comments: 32,
    shares: 5,
    time: '4h ago',
    isLiked: true,
  },
  {
    id: '3',
    user: {
      name: 'Emily Zhang',
      username: 'emilyzhang',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop',
      verified: true,
    },
    content: 'New blog post: 10 React patterns every developer should know. Link in bio!',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop',
    likes: 489,
    comments: 45,
    shares: 87,
    time: '6h ago',
    isLiked: false,
  },
  {
    id: '4',
    user: {
      name: 'Marcus Johnson',
      username: 'marcusj',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop',
      verified: false,
    },
    content: 'Finally finished the design system for our new product. 120+ components, fully accessible, dark mode support. Feeling accomplished!',
    image: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=800&auto=format&fit=crop',
    likes: 312,
    comments: 28,
    shares: 15,
    time: '8h ago',
    isLiked: false,
  },
];

const stories = [
  { name: 'Your Story', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop', isOwn: true },
  { name: 'Sarah', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop', isOwn: false },
  { name: 'Emily', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop', isOwn: false },
  { name: 'Marcus', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop', isOwn: false },
  { name: 'Lisa', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a67da9b?w=100&auto=format&fit=crop', isOwn: false },
];

const trendingTopics = [
  { name: '#WebDev', posts: '12.3K' },
  { name: '#ReactJS', posts: '8.7K' },
  { name: '#TypeScript', posts: '6.2K' },
  { name: '#AI', posts: '15.1K' },
  { name: '#OpenSource', posts: '4.9K' },
];

const suggestedUsers = [
  { name: 'David Park', username: 'davidpark', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop', followers: '5.2K' },
  { name: 'Maya Singh', username: 'mayasingh', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop', followers: '3.8K' },
];

export function SocialHome() {
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set(posts.filter(p => p.isLiked).map(p => p.id)));
  const [newPost, setNewPost] = useState('');

  const toggleLike = (postId: string) => {
    setLikedPosts(prev => {
      const next = new Set(prev);
      if (next.has(postId)) next.delete(postId);
      else next.add(postId);
      return next;
    });
  };

  return (
    <div className="pt-4 sm:pt-20 pb-20 sm:pb-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-4">
            {/* Stories */}
            <div className="p-4 rounded-xl bg-surface-800/50 border border-surface-700 overflow-x-auto">
              <div className="flex gap-4">
                {stories.map((story, i) => (
                  <button key={i} className="flex flex-col items-center gap-2 flex-shrink-0">
                    <div className={`relative w-16 h-16 rounded-full p-0.5 ${
                      story.isOwn ? 'bg-surface-600' : 'bg-gradient-to-br from-green-500 to-emerald-400'
                    }`}>
                      <img src={story.avatar} alt={story.name} className="w-full h-full rounded-full object-cover border-2 border-surface-800" />
                      {story.isOwn && (
                        <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full bg-emerald-500 border-2 border-surface-800 flex items-center justify-center">
                          <span className="text-white text-xs">+</span>
                        </div>
                      )}
                    </div>
                    <span className="text-xs text-surface-400">{story.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Create Post */}
            <div className="p-4 rounded-xl bg-surface-800/50 border border-surface-700">
              <div className="flex gap-3">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop"
                  alt="You"
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1">
                  <input
                    type="text"
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    placeholder="What's on your mind?"
                    className="w-full px-4 py-2.5 rounded-xl bg-surface-700/50 text-white placeholder-surface-400 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex gap-2">
                      <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-700/50 text-emerald-400 text-sm">
                        <Image className="w-4 h-4" /> Photo
                      </button>
                      <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-700/50 text-amber-400 text-sm">
                        <Smile className="w-4 h-4" /> Feeling
                      </button>
                    </div>
                    <button
                      disabled={!newPost.trim()}
                      className="px-4 py-1.5 rounded-lg bg-emerald-500 text-white text-sm font-medium disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Feed Posts */}
            {posts.map((post) => (
              <div key={post.id} className="p-4 rounded-xl bg-surface-800/50 border border-surface-700">
                {/* Post Header */}
                <div className="flex items-center justify-between mb-3">
                  <Link to={`/projects/social/profile/${post.user.username}`} className="flex items-center gap-3">
                    <img src={post.user.avatar} alt={post.user.name} className="w-10 h-10 rounded-full" />
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="text-sm font-semibold text-white">{post.user.name}</span>
                        {post.user.verified && (
                          <span className="w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs">✓</span>
                        )}
                      </div>
                      <p className="text-xs text-surface-400">@{post.user.username} · {post.time}</p>
                    </div>
                  </Link>
                  <button className="p-2 rounded-full text-surface-400 hover:text-white hover:bg-surface-700">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>

                {/* Content */}
                <p className="text-surface-200 text-sm mb-3 leading-relaxed">{post.content}</p>

                {/* Image */}
                {post.image && (
                  <div className="rounded-xl overflow-hidden mb-3">
                    <img src={post.image} alt="" className="w-full h-64 object-cover" />
                  </div>
                )}

                {/* Actions */}
                <div className="flex items-center justify-between pt-2 border-t border-surface-700">
                  <button
                    onClick={() => toggleLike(post.id)}
                    className={`flex items-center gap-1.5 text-sm transition-colors ${
                      likedPosts.has(post.id) ? 'text-rose-400' : 'text-surface-400 hover:text-rose-400'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${likedPosts.has(post.id) ? 'fill-current' : ''}`} />
                    {post.likes + (likedPosts.has(post.id) && !post.isLiked ? 1 : 0)}
                  </button>
                  <button className="flex items-center gap-1.5 text-surface-400 hover:text-blue-400 text-sm">
                    <MessageCircle className="w-5 h-5" /> {post.comments}
                  </button>
                  <button className="flex items-center gap-1.5 text-surface-400 hover:text-emerald-400 text-sm">
                    <Share2 className="w-5 h-5" /> {post.shares}
                  </button>
                  <button className="text-surface-400 hover:text-amber-400">
                    <Bookmark className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="hidden lg:block space-y-4">
            {/* Trending */}
            <div className="p-4 rounded-xl bg-surface-800/50 border border-surface-700">
              <h3 className="font-semibold text-white mb-4">Trending Topics</h3>
              <div className="space-y-3">
                {trendingTopics.map((topic) => (
                  <div key={topic.name} className="cursor-pointer hover:bg-surface-700/30 p-2 rounded-lg transition-colors">
                    <p className="text-sm text-white font-medium">{topic.name}</p>
                    <p className="text-xs text-surface-400">{topic.posts} posts</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Suggested Users */}
            <div className="p-4 rounded-xl bg-surface-800/50 border border-surface-700">
              <h3 className="font-semibold text-white mb-4">People to Follow</h3>
              <div className="space-y-3">
                {suggestedUsers.map((user) => (
                  <div key={user.username} className="flex items-center gap-3">
                    <Link to={`/projects/social/profile/${user.username}`}>
                      <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" />
                    </Link>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white truncate">{user.name}</p>
                      <p className="text-xs text-surface-400">{user.followers} followers</p>
                    </div>
                    <button className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20 hover:bg-emerald-500/20">
                      Follow
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
