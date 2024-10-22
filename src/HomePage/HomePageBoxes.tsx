export default function HomePageBoxes() {
  const titles = ["About Me", "Projects", "Contact"];

  return (
    <div className="flex justify-center items-center h-96">
      {titles.map((title, index) => (
        <div
          key={index}
          className="bg-white w-48 h-48 m-4 rounded-lg flex justify-center items-center"
        >
          <h2 className="text-2xl">{title}</h2>
        </div>
      ))}
    </div>
  );
}
