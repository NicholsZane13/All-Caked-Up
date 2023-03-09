export default function Cake(props) {
  return (
    <div
      id="cards"
      className="p-24 grid grid-cols-5 gap-8 mt-8 justify-items-center justify-center"
    >
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-green text-white">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.name}</div>
          <p className="text-gray-700 text-base">DESCRIPTION / PRICE</p>
        </div>
      </div>
    </div>
  );
}
