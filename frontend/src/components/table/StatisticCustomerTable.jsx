
export default function StatisticCustomerTable(){

    return(

        <div className="p-6">
            <h2 className="text-2xl font-light mb-4 text-gray-800">Ultime tessere registrate</h2>
            <div className="overflow-x-auto">
                <table className="w-full bg-gray-200 shadow-md rounded-lg overflow-hidden">
                <thead className="bg-rose-900 text-white">
                    <tr>
                    <th className="py-3 px-6 text-left">ID</th>
                    <th className="py-3 px-6 text-left">Nome</th>
                    <th className="py-3 px-6 text-left">Cognome</th>
                    <th className="py-3 px-6 text-left">Anno</th>
                    <th className="py-3 px-6 text-left">Disponibilità</th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-white transition-colors">
                    <td className="py-3 px-6 text-black">1</td>
                    <td className="py-3 px-6 text-black">Il Signore degli Anelli</td>
                    <td className="py-3 px-6 text-black">J.R.R. Tolkien</td>
                    <td className="py-3 px-6 text-black">1954</td>
                    <td className="py-3 px-6 text-black">
                        <span className="text-green-600 font-semibold">Disponibile</span>
                    </td>
                    </tr>
                </tbody>

                </table>
            </div>
        </div>



    );

}