import { ResponsiveChatLayout } from "./responsive-chat-layout";

export function ChatExtremeRightTest() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header with test info */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Chat Button Extreme Right Positioning Test
          </h1>
          <p className="text-gray-600">
            Testing that the chat support button is positioned at the extreme right edge of the screen.
          </p>
        </div>
      </div>

      {/* Main content area */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-semibold mb-4">✅ Expected Behavior</h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 font-bold">•</span>
                  <span>Chat button should be touching the right edge of the browser window</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 font-bold">•</span>
                  <span>No gap between button and right edge of screen</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 font-bold">•</span>
                  <span>Button should not cause horizontal scrolling</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 font-bold">•</span>
                  <span>Chat widget opens towards the left when clicked</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 font-bold">•</span>
                  <span>Positioning consistent across all screen sizes</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">🔍 Visual Test</h3>
              <p className="text-blue-800 mb-4">
                Look at the right edge of your browser window. The chat button should be:
              </p>
              <div className="bg-white rounded p-4 border-l-4 border-blue-500">
                <p className="font-medium text-blue-900">Flush against the right edge</p>
                <p className="text-blue-700 text-sm mt-1">
                  There should be no visible gap between the chat button and the browser&apos;s right border.
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-yellow-900 mb-4">📱 Responsive Test</h3>
              <div className="space-y-3">
                <div className="bg-white rounded p-3 border-l-4 border-yellow-500">
                  <p className="font-medium">Desktop (1024px+)</p>
                  <p className="text-sm text-gray-600">Button at extreme right, minimal transform offset</p>
                </div>
                <div className="bg-white rounded p-3 border-l-4 border-yellow-500">
                  <p className="font-medium">Tablet (768px-1024px)</p>
                  <p className="text-sm text-gray-600">Button at extreme right with small offset</p>
                </div>
                <div className="bg-white rounded p-3 border-l-4 border-yellow-500">
                  <p className="font-medium">Mobile (&lt;768px)</p>
                  <p className="text-sm text-gray-600">Button at extreme right with minimal offset</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-4">Right Edge Content</h3>
              <p className="text-gray-600 mb-4">
                This content is positioned on the right side to demonstrate that the chat button 
                is truly at the extreme right edge.
              </p>
              <div className="h-40 bg-gradient-to-r from-purple-100 to-pink-100 rounded flex items-center justify-center">
                <span className="text-purple-700 font-medium">Right Side Content</span>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-900 mb-4">🎯 Test Instructions</h3>
              <ol className="space-y-2 text-green-800 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="font-bold">1.</span>
                  <span>Scroll to the bottom-right corner of the screen</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="font-bold">2.</span>
                  <span>Verify the chat button is touching the right edge</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="font-bold">3.</span>
                  <span>Click the button to test widget positioning</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="font-bold">4.</span>
                  <span>Resize your browser window to test responsiveness</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="font-bold">5.</span>
                  <span>Check on mobile devices if available</span>
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* Bottom content to show scroll behavior */}
        <div className="mt-16 bg-white rounded-lg shadow p-8">
          <h3 className="text-2xl font-semibold mb-4">Scroll Test Area</h3>
          <p className="text-gray-600 mb-8">
            Scroll down to see the chat button behavior at different scroll positions.
            The button should remain at the extreme right edge regardless of scroll position.
          </p>
          
          {/* Spacer content */}
          <div className="space-y-8">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className="h-32 bg-gray-50 rounded flex items-center justify-center">
                <span className="text-gray-500">Content Block {num}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              End of test content. The chat button should be visible and positioned at the extreme right.
            </p>
          </div>
        </div>
      </div>

      {/* The actual chat widget being tested */}
      <ResponsiveChatLayout
        theme={{
          primaryColor: "#2563eb",
          secondaryColor: "#f59e0b", 
          backgroundColor: "#ffffff",
          textColor: "#1f2937"
        }}
        showQuickActions={true}
        showSettings={false}
      />
    </div>
  );
}
