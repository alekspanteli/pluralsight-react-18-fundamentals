const houses = [
  {
    id: 1,
    address: "12 Valley of Kings, Geneva",
    country: "Switzerland",
    price: 900000,
  },
  {
    id: 2,
    address: "89 Road of Forks, Bern",
    country: "Switzerland",
    price: 500000,
  },
];

const HouseList = () => {
  return (
    <>
      <div className="mb-2">
        <h5 className="themeFontColor text-center">
          Houses currently on the market
        </h5>
      </div>
      <table class="border-collapse border border-slate-500 ...">
        <thead>
          <tr>
            <th class="border border-slate-600">Address</th>
            <th class="border border-slate-600">Country</th>
            <th class="border border-slate-600">Asking Price</th>
          </tr>
        </thead>
        <tbody>
          {houses.map((h) => (
            <tr>
              <td class="border border-slate-700">{h.address}</td>
              <td class="border border-slate-700">{h.country}</td>
              <td class="border border-slate-700">{h.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default HouseList;
