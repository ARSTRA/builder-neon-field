import { ResponsiveChatLayout } from "./responsive-chat-layout";

export function ChatRightSideTest() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Chat Widget Right-Side Positioning Test
          </h1>
          <p className="text-gray-600 mb-6">
            This page tests that the chat widget is properly positioned on the right side of the screen.
          </p>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <h2 className="text-lg font-semibold text-green-800 mb-2">✅ Expected Behavior:</h2>
            <ul className="list-disc list-inside text-green-700 space-y-1">
              <li>Chat button appears in the bottom-right corner</li>
              <li>Chat button stays on the right side on all screen sizes</li>
              <li>Widget opens to the right side when clicked</li>
              <li>No horizontal scrolling caused by the widget</li>
              <li>Widget is always accessible and visible</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">📱 Test on Different Devices:</h3>
            <ul className="list-disc list-inside text-blue-700 space-y-1">
              <li>Desktop (wider than 1024px): Should be 24px from right edge</li>
              <li>Tablet (768px-1024px): Should be 16px from right edge</li>
              <li>Mobile (less than 768px): Should be 12px from right edge</li>
              <li>Very small screens (less than 480px): Should remain on right side</li>
            </ul>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4">Content Area</h3>
            <p className="text-gray-600 mb-4">
              This content should not be affected by the chat widget positioning.
              The chat widget should overlay on top without disrupting the layout.
            </p>
            <div className="h-32 bg-gray-100 rounded flex items-center justify-center">
              <span className="text-gray-500">Sample Content Block</span>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4">Right Side Content</h3>
            <p className="text-gray-600 mb-4">
              This content is on the right side to test that the chat widget
              doesn&apos;t interfere with page content.
            </p>
            <div className="h-32 bg-gray-100 rounded flex items-center justify-center">
              <span className="text-gray-500">Right Side Block</span>
            </div>
          </div>
        </div>
        
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-yellow-800 mb-2">🔍 Testing Instructions:</h3>
          <ol className="list-decimal list-inside text-yellow-700 space-y-1">
            <li>Look for the chat button in the bottom-right corner</li>
            <li>Click the chat button to open the widget</li>
            <li>Verify the widget opens on the right side</li>
            <li>Resize your browser window to test responsiveness</li>
            <li>Test on mobile devices if possible</li>
            <li>Ensure no horizontal scrollbars appear</li>
          </ol>
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
