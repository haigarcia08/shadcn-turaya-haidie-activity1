import { ChatMain } from "./components/chat-main";
import { ChatSidebar } from "./components/chat-sidebar";

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-100">
      <ChatSidebar />
      <ChatMain />
    </div>
  );
}
