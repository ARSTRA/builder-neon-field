import { ChatOnlyLayout } from "./chat-only-layout";

export function ChatOnlyTest() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              💬 Chat-Only Support Widget Test
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Redesigned support widget positioned at the right end, featuring chat-only functionality 
              without call or video buttons for a cleaner, focused experience.
            </p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left and center columns */}
          <div className="lg:col-span-2 space-y-8">
            {/* Design Features */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="bg-green-100 text-green-600 rounded-full p-2 mr-3">
                  ✨
                </span>
                New Chat-Only Design Features
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 text-blue-600 rounded-full p-1 mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Removed Call & Video Buttons</h3>
                      <p className="text-gray-600 text-sm">Clean header with only essential chat controls</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 text-blue-600 rounded-full p-1 mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Right End Positioning</h3>
                      <p className="text-gray-600 text-sm">Button positioned at the extreme right edge</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 text-blue-600 rounded-full p-1 mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Chat-Focused Interface</h3>
                      <p className="text-gray-600 text-sm">Streamlined for messaging with enhanced UX</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-purple-100 text-purple-600 rounded-full p-1 mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Responsive Design</h3>
                      <p className="text-gray-600 text-sm">Optimized for all screen sizes and devices</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="bg-purple-100 text-purple-600 rounded-full p-1 mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Enhanced Tooltips</h3>
                      <p className="text-gray-600 text-sm">Better user guidance and information display</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="bg-purple-100 text-purple-600 rounded-full p-1 mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Quick Actions</h3>
                      <p className="text-gray-600 text-sm">Smart shortcuts for common support requests</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Positioning Test */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="bg-indigo-100 text-indigo-600 rounded-full p-2 mr-3">
                  📍
                </span>
                Right End Positioning Test
              </h2>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border-l-4 border-indigo-500">
                  <h3 className="font-semibold text-indigo-900 mb-2">Expected Behavior:</h3>
                  <ul className="text-indigo-800 space-y-1 text-sm">
                    <li>• Chat button should be at the extreme right edge of the screen</li>
                    <li>• Button maintains position while scrolling</li>
                    <li>• Widget opens toward the left from the right edge</li>
                    <li>• No horizontal scrolling caused by positioning</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                  <h3 className="font-semibold text-green-900 mb-2">Visual Verification:</h3>
                  <p className="text-green-800 text-sm">
                    Look at the bottom-right corner of your screen. The chat button should be 
                    touching or very close to the right edge of your browser window.
                  </p>
                </div>
              </div>
            </div>

            {/* Features Comparison */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Before vs After Comparison</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-red-600 flex items-center">
                    <span className="mr-2">❌</span>
                    Previous Design
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center"><span className="text-red-500 mr-2">•</span>Call button in header</li>
                    <li className="flex items-center"><span className="text-red-500 mr-2">•</span>Video call button in header</li>
                    <li className="flex items-center"><span className="text-red-500 mr-2">•</span>Cluttered interface</li>
                    <li className="flex items-center"><span className="text-red-500 mr-2">•</span>Standard right positioning</li>
                    <li className="flex items-center"><span className="text-red-500 mr-2">•</span>Multiple action buttons</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-green-600 flex items-center">
                    <span className="mr-2">✅</span>
                    New Chat-Only Design
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center"><span className="text-green-500 mr-2">•</span>Clean chat-only interface</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">•</span>No distracting call buttons</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">•</span>Focused messaging experience</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">•</span>Extreme right end positioning</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">•</span>Streamlined controls only</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-8">
            {/* Test Instructions */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-yellow-100 text-yellow-600 rounded-full p-2 mr-3 text-sm">
                  🧪
                </span>
                Test Instructions
              </h3>
              
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mt-0.5">1</span>
                  <span className="text-sm">Look for the chat button at the extreme right edge of your screen</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mt-0.5">2</span>
                  <span className="text-sm">Click the chat button to open the widget</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mt-0.5">3</span>
                  <span className="text-sm">Verify there are no call or video buttons in the header</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mt-0.5">4</span>
                  <span className="text-sm">Test sending a message in the chat</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mt-0.5">5</span>
                  <span className="text-sm">Try the quick action buttons</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mt-0.5">6</span>
                  <span className="text-sm">Resize browser window to test responsiveness</span>
                </li>
              </ol>
            </div>

            {/* Success Criteria */}
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-lg font-bold text-green-900 mb-4">✅ Success Criteria</h3>
              <ul className="space-y-2 text-green-800 text-sm">
                <li>✓ Chat button at extreme right edge</li>
                <li>✓ No call/video buttons visible</li>
                <li>✓ Clean, chat-focused interface</li>
                <li>✓ Responsive across all devices</li>
                <li>✓ Smooth animations and interactions</li>
                <li>✓ Quick actions working properly</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-lg font-bold text-blue-900 mb-3">💬 Chat Support Only</h3>
              <p className="text-blue-800 text-sm mb-3">
                This widget is now designed exclusively for chat support, providing a cleaner, 
                more focused user experience.
              </p>
              <div className="text-blue-700 text-sm">
                <p><strong>Response Time:</strong> &lt; 2 minutes</p>
                <p><strong>Availability:</strong> 24/7 Chat Support</p>
                <p><strong>Rating:</strong> 4.9/5 stars</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The actual chat widget being tested */}
      <ChatOnlyLayout
        theme={{
          primaryColor: "#2563eb",
          secondaryColor: "#f59e0b",
          backgroundColor: "#ffffff",
          textColor: "#1f2937"
        }}
        showQuickActions={true}
      />
    </div>
  );
}
