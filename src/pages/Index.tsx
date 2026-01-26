import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Introduction from "@/components/sections/Introduction";
import Motivation from "@/components/sections/Motivation";
import Vision from "@/components/sections/Vision";
import QuickStart from "@/components/sections/QuickStart";
import Demos from "@/components/sections/Demos";
import Community from "@/components/sections/Community";
import CoreTeam from "@/components/sections/CoreTeam";
import Contribute from "@/components/sections/Contribute";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Introduction />
        <Motivation />
        <Vision />
        <QuickStart />
        <Demos />
        <Community />
        <CoreTeam />
        <Contribute />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
