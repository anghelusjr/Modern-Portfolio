import * as PricingData from "./pricingData";



export function Pricing() {

  return (
    <>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {PricingData.packages.map((plan, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105"
          >
            <div className={`h-2 ${plan.color}`}></div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              <p className="text-3xl font-bold text-gray-800 mb-6">{plan.price}</p>
              <ul className="text-sm text-gray-700 mb-4 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      className="w-4 h-4 mr-2 text-green-500 flex-shrink-0 mt-1"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeWidth="2"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-500 mb-1">Delivery: {plan.delivery}</p>
              <p className="text-sm text-gray-500 mb-6">{plan.revisions}</p>
              <button className="w-full bg-green-500 text-white rounded-full px-4 py-2 hover:bg-green-700 transition">
                Request a Quote
              </button>
            </div>
          </div>
        ))}
      </div>


      <div className="bg-white p-20 max-w-4xl mx-auto mt-16 px-4 rounded-3xl">
        <h3 className="text-2xl font-bold mb-6 text-center">🎁 Promos</h3>
        <div className="overflow-x-auto">
          <table className="w-full border table-auto border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="p-3 font-semibold">Promo Name</th>
                <th className="p-3 font-semibold">Details</th>
                <th className="p-3 font-semibold">Duration</th>
              </tr>
            </thead>
            <tbody>
              {PricingData.promos.map((promo, index) => (
                <tr key={index} className="border-t">
                  <td className="p-3">{promo.name}</td>
                  <td className="p-3">{promo.details}</td>
                  <td className="p-3">{promo.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>


      <div className="max-w-3xl mx-auto mt-16 px-4">
        <h3 className="text-2xl font-bold mb-6 text-center">💬 Add-ons (Optional)</h3>
        <ul className="space-y-3 text-gray-700">
          {PricingData.addons.map((addon, index) => (
            <li key={index} className="flex justify-between border-b pb-2">
              <span>{addon.name}</span>
              <span className="font-semibold">{addon.price}</span>
            </li>
          ))}
        </ul>
      </div>

    </>
  );
}
