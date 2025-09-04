'use client';

import { useState } from 'react';
import { useAuth, FREE_TIER_LIMITS } from '@/context/AuthContext';
import { mockVideos, mockSongs, mockGames, Video, Song, Game } from '@/lib/mockData';

type ContentType = 'videos' | 'music' | 'games';

export default function ContentTabs() {
  const [activeTab, setActiveTab] = useState<ContentType>('videos');
  const { user, canAccessContent, updateUsage, upgradeSubscription } = useAuth();

  const tabs = [
    { id: 'videos' as ContentType, label: 'Videos', icon: '🎥' },
    { id: 'music' as ContentType, label: 'Music', icon: '🎵' },
    { id: 'games' as ContentType, label: 'Games', icon: '🎮' },
  ];

  const renderContent = () => {
    if (!user) return null;

    switch (activeTab) {
      case 'videos':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockVideos.map((video) => {
              const canAccess = canAccessContent('video');
              const remainingViews = FREE_TIER_LIMITS.videos - user.freeTierLimits.videosWatched;

              return (
                <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                    <span className="text-white text-4xl">{video.thumbnail.split('/').pop()?.split('.')[0]}</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{video.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{video.category} • {video.duration}</p>
                    <p className="text-gray-500 text-sm mb-4">{video.description}</p>

                    {canAccess ? (
                      <button
                        onClick={() => updateUsage('video')}
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                      >
                        Watch Video
                      </button>
                    ) : (
                      <div className="space-y-2">
                        <div className="text-sm text-orange-600 font-medium">
                          Free tier limit reached ({remainingViews} remaining)
                        </div>
                        <button
                          onClick={upgradeSubscription}
                          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-md hover:from-purple-700 hover:to-blue-700 transition-colors"
                        >
                          Upgrade to Premium
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        );

      case 'music':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockSongs.map((song) => {
              const canAccess = canAccessContent('music');
              const remainingPlays = FREE_TIER_LIMITS.songs - user.freeTierLimits.songsPlayed;

              return (
                <div key={song.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="aspect-square bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                    <span className="text-white text-4xl">{song.cover.split('/').pop()?.split('.')[0]}</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1">{song.title}</h3>
                    <p className="text-gray-600 text-sm mb-1">{song.artist}</p>
                    <p className="text-gray-500 text-sm mb-2">{song.album} • {song.genre} • {song.duration}</p>

                    {canAccess ? (
                      <button
                        onClick={() => updateUsage('music')}
                        className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
                      >
                        Play Song
                      </button>
                    ) : (
                      <div className="space-y-2">
                        <div className="text-sm text-orange-600 font-medium">
                          Free tier limit reached ({remainingPlays} remaining)
                        </div>
                        <button
                          onClick={upgradeSubscription}
                          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-md hover:from-purple-700 hover:to-blue-700 transition-colors"
                        >
                          Upgrade to Premium
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        );

      case 'games':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockGames.map((game) => {
              const canAccess = canAccessContent('game');
              const remainingGames = FREE_TIER_LIMITS.games - user.freeTierLimits.gamesPlayed;

              return (
                <div key={game.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-red-400 to-pink-500 flex items-center justify-center">
                    <span className="text-white text-4xl">{game.thumbnail.split('/').pop()?.split('.')[0]}</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1">{game.title}</h3>
                    <p className="text-gray-600 text-sm mb-1">{game.genre} • {game.platform}</p>
                    <div className="flex items-center mb-2">
                      <span className="text-yellow-500 text-sm">{'⭐'.repeat(Math.floor(game.rating))}</span>
                      <span className="text-gray-500 text-sm ml-1">({game.rating})</span>
                    </div>
                    <p className="text-gray-500 text-sm mb-4">{game.description}</p>

                    {canAccess ? (
                      <button
                        onClick={() => updateUsage('game')}
                        className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
                      >
                        Play Game
                      </button>
                    ) : (
                      <div className="space-y-2">
                        <div className="text-sm text-orange-600 font-medium">
                          Free tier limit reached ({remainingGames} remaining)
                        </div>
                        <button
                          onClick={upgradeSubscription}
                          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-md hover:from-purple-700 hover:to-blue-700 transition-colors"
                        >
                          Upgrade to Premium
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900">AI Entertainment Hub</h1>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                Welcome, {user?.email}
              </div>
              <div className="text-sm">
                <span className={`px-2 py-1 rounded-full ${user?.subscription === 'premium' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'}`}>
                  {user?.subscription === 'premium' ? 'Premium' : 'Free'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Usage Stats */}
      {user?.subscription === 'free' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-900">
                  {FREE_TIER_LIMITS.videos - user.freeTierLimits.videosWatched}
                </div>
                <div className="text-sm text-blue-700">Videos Left</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-900">
                  {FREE_TIER_LIMITS.songs - user.freeTierLimits.songsPlayed}
                </div>
                <div className="text-sm text-blue-700">Songs Left</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-900">
                  {FREE_TIER_LIMITS.games - user.freeTierLimits.gamesPlayed}
                </div>
                <div className="text-sm text-blue-700">Games Left</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        {renderContent()}
      </div>
    </div>
  );
}
