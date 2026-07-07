import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Settings, Camera, MapPin, Link as LinkIcon, Calendar, Grid, Bookmark, Heart, Image } from 'lucide-react';

const user = {
  name: 'Sarah Chen',
  username: 'sarahchen',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop',
  bio: 'Full Stack Developer | Building cool stuff with React & Node.js | Open Source Enthusiast | Based in San Francisco',
  location: 'San Francisco, CA',
  website: 'sarahchen.dev',
  joinedDate: 'March 2021',
  followers: 12847,
  following: 892,
  posts: 156,
  verified: true,
};

const userPosts = [
  { id: '1', image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&auto=format&fit=crop', likes: 234, comments: 18 },
  { id: '2', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&auto=format&fit=crop', likes: 489, comments: 45 },
  { id: '3', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&auto=format&fit=crop', likes: 312, comments: 28 },
  { id: '4', image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&auto=format&fit=crop', likes: 567, comments: 34 },
  { id: '5', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&auto=format&fit=crop', likes: 189, comments: 12 },
  { id: '6', image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&auto=format&fit=crop', likes: 421, comments: 29 },
];

export function SocialProfile() {
  useParams();
  const [activeTab, setActiveTab] = useState<'posts' | 'saved' | 'liked'>('posts');
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div className="pt-4 sm:pt-20 pb-20 sm:pb-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Profile Header */}
        <div className="pb-6 border-b border-surface-700">
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
            {/* Avatar */}
            <div className="relative">
              <img src={user.avatar} alt={user.name} className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover" />
              <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-surface-700 border-2 border-surface-800 flex items-center justify-center text-surface-300 hover:text-white">
                <Camera className="w-4 h-4" />
              </button>
            </div>

            {/* Info */}
            <div className="flex-1 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row items-center gap-3 mb-2">
                <h1 className="text-xl font-bold text-white">{user.name}</h1>
                {user.verified && (
                  <span className="w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs">✓</span>
                )}
              </div>
              <p className="text-sm text-surface-400 mb-4">@{user.username}</p>

              <div className="flex justify-center sm:justify-start gap-3 mb-4">
                {isFollowing ? (
                  <>
                    <button
                      onClick={() => setIsFollowing(false)}
                      className="px-6 py-2 rounded-lg bg-surface-700 text-white font-medium hover:bg-surface-600"
                    >
                      Following
                    </button>
                    <button className="px-4 py-2 rounded-lg bg-surface-700 text-surface-300 hover:text-white">
                      <Settings className="w-5 h-5" />
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => setIsFollowing(true)}
                      className="px-6 py-2 rounded-lg bg-emerald-500 text-white font-medium hover:bg-emerald-600"
                    >
                      Follow
                    </button>
                    <button className="px-4 py-2 rounded-lg bg-surface-700 text-white hover:bg-surface-600">
                      Message
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Bio */}
          <p className="text-surface-300 text-sm mb-4 text-center sm:text-left">{user.bio}</p>

          {/* Meta */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-sm text-surface-400 mb-4">
            {user.location && (
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" /> {user.location}
              </div>
            )}
            {user.website && (
              <a href="#" className="flex items-center gap-1 text-emerald-400 hover:underline">
                <LinkIcon className="w-4 h-4" /> {user.website}
              </a>
            )}
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" /> Joined {user.joinedDate}
            </div>
          </div>

          {/* Stats */}
          <div className="flex justify-center sm:justify-start gap-6 text-sm">
            <span><strong className="text-white">{user.posts}</strong> <span className="text-surface-400">posts</span></span>
            <span><strong className="text-white">{user.followers.toLocaleString()}</strong> <span className="text-surface-400">followers</span></span>
            <span><strong className="text-white">{user.following}</strong> <span className="text-surface-400">following</span></span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-8 py-4 border-b border-surface-700">
          {[
            { id: 'posts', label: 'Posts', icon: Grid },
            { id: 'saved', label: 'Saved', icon: Bookmark },
            { id: 'liked', label: 'Liked', icon: Heart },
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id as typeof activeTab)}
              className={`flex items-center gap-2 py-2 px-4 transition-colors ${
                activeTab === id
                  ? 'text-white border-b-2 border-white -mb-[2px]'
                  : 'text-surface-400 hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4" /> <span className="hidden sm:inline">{label}</span>
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="py-4">
          {activeTab === 'posts' && (
            <div className="grid grid-cols-3 gap-1 sm:gap-4">
              {userPosts.map((post) => (
                <div key={post.id} className="aspect-square relative group cursor-pointer overflow-hidden">
                  <img src={post.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6 text-white">
                    <span className="flex items-center gap-1">
                      <Heart className="w-5 h-5" /> {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <Image className="w-5 h-5" /> {post.comments}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {(activeTab === 'saved' || activeTab === 'liked') && (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto rounded-full bg-surface-800 flex items-center justify-center mb-4">
                {activeTab === 'saved' ? <Bookmark className="w-8 h-8 text-surface-600" /> : <Heart className="w-8 h-8 text-surface-600" />}
              </div>
              <p className="text-white font-medium mb-1">No {activeTab} posts yet</p>
              <p className="text-surface-400 text-sm">
                {activeTab === 'saved' ? 'Save posts to see them here' : 'Posts you like will appear here'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
