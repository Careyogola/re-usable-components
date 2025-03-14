import { useState } from 'react';
import { FaUserFriends, FaCalendarAlt, FaCheckCircle, FaFolder, FaChartBar, FaShieldAlt, FaWallet, FaPlus } from 'react-icons/fa';

const Sidebar = () => {
  const [selectedApproval, setSelectedApproval] = useState(null);

  const approvals = [
    { id: 1, title: 'Business Loan 1', status: 'Pending', startDate: '10 Feb 2025', endDate: '04 Feb 2027', votes: 3 },
    { id: 2, title: 'Business Loan', status: 'Pending', startDate: '07 Feb 2025', endDate: '04 Feb 2027', votes: 3 },
    { id: 3, title: 'Education Loan', status: 'Approved', startDate: '05 Feb 2025', endDate: '12 Feb 2025', votes: 3 },
  ];

  return (
    <div className="flex h-screen">
      {/* Main Sidebar */}
      <div className="w-20 bg-gray-900 text-white flex flex-col items-center py-4">
        <FaUserFriends className="mb-6 text-2xl" />
        <FaCalendarAlt className="mb-6 text-2xl" />
        <FaCheckCircle className="mb-6 text-2xl" />
        <FaFolder className="mb-6 text-2xl" />
        <FaChartBar className="mb-6 text-2xl" />
        <FaShieldAlt className="mb-6 text-2xl" />
        <FaWallet className="text-2xl" />
      </div>

      {/* Second Sidebar */}
      <div className="w-64 bg-gray-100 border-r h-screen p-4">
        <h2 className="text-xl font-bold mb-4">Compliance</h2>
        <input 
          type="text" 
          placeholder="Search approval..." 
          className="w-full mb-4 p-2 border rounded"
        />
        <div>
          {approvals.map((approval) => (
            <div 
              key={approval.id} 
              className="p-3 bg-white mb-2 rounded shadow cursor-pointer hover:bg-gray-200"
              onClick={() => setSelectedApproval(approval)}
            >
              <h3 className="font-semibold">{approval.title}</h3>
              <p className={approval.status === 'Pending' ? 'text-yellow-500' : 'text-green-500'}>
                {approval.status}
              </p>
              <p className="text-sm">{approval.startDate} - {approval.endDate}</p>
              <p className="text-xs">{approval.votes} votes required</p>
            </div>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-6">
        {selectedApproval ? (
          <div>
            <h1 className="text-2xl font-bold mb-4">{selectedApproval.title}</h1>
            <p>Status: {selectedApproval.status}</p>
            <p>Start Date: {selectedApproval.startDate}</p>
            <p>End Date: {selectedApproval.endDate}</p>
            <p>Votes Required: {selectedApproval.votes}</p>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            <p>Select an approval to view details</p>
          </div>
        )}
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg">
        <FaPlus className="text-2xl" />
      </button>
    </div>
  );
};

export default Sidebar;
