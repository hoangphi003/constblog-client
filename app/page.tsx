import Card from "./components/Card";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <div className="min-h-screen">
        <div className="flex justify-center my-24 ">
          <Card />
        </div>
      </div>
    </div>
  );
}
