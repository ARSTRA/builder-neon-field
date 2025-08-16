import { ResponsiveChatLayout } from "./responsive-chat-layout";

export function ChatPositionTest() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Chat Widget Position Test
        </h1>
        <p className="text-gray-600 mb-8">
          The chat widget should appear in the bottom-right corner without any blinking animations.
        </p>
        
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Test Instructions:</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>✅ Chat button should be positioned in the bottom-right corner</li>
            <li>✅ No blinking/pulsing animations on the chat button</li>
            <li>✅ Smooth hover effects only (scale up slightly)</li>
            <li>✅ Green online indicator should be solid (no blinking)</li>
            <li>✅ Chat widget should open when clicked</li>
            <li>✅ Widget should be responsive on different screen sizes</li>
          </ul>
        </div>
        
        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Expected Behavior:</h3>
          <p className="text-blue-800">
            The chat widget should have a modern, professional appearance with smooth transitions 
            and no distracting animations. It should be easily accessible from the right side 
            of the screen on all devices.
          </p>
        </div>
      </div>
      
      {/* The actual chat widget */}
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
