//    <div className="w-full bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
//       {/* Flex container changes direction on mobile */}
//       <div className="flex flex-col sm:flex-row">
//         {/* Image - full width on mobile, fixed width on larger screens */}
//         <div className="w-full sm:w-1/3 h-48 sm:h-auto">
//           <img 
//             src={image || 'https://via.placeholder.com/300x200?text=Plant+Image'} 
//             alt={plantName}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Content - full width on mobile, 2/3 on larger screens */}
//         <div className="w-full sm:w-2/3 p-4 sm:p-6">
//           {/* Header with name and category */}
//           <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
//             <h2 className="text-xl font-bold text-gray-800 mb-1 sm:mb-0">{name}</h2>
//             <span className="inline-block px-2 py-1 bg-gray-100 text-gray-800 text-xs sm:text-sm rounded-full">
//               {category}
//             </span>
//           </div>

//           {/* Description with responsive text size */}
//           <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-3">
//             {description}
//           </p>

//           {/* Status badges - stack on mobile, inline on larger screens */}
//           <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
//             <div className="flex items-center">
//               <span className="text-xs sm:text-sm font-medium text-gray-700 mr-2">Care:</span>
//               <span className={`px-2 py-1 text-xs sm:text-sm rounded-full ${
//                 careLevel === 'Easy' ? 'bg-green-100 text-green-800' :
//                 careLevel === 'Moderate' ? 'bg-yellow-100 text-yellow-800' :
//                 'bg-red-100 text-red-800'
//               }`}>
//                 {careLevel}
//               </span>
//             </div>
//             <div className="flex items-center">
//               <span className="text-xs sm:text-sm font-medium text-gray-700 mr-2">Health:</span>
//               <span className={`px-2 py-1 text-xs sm:text-sm rounded-full ${
//                 healthStatus === 'Healthy' ? 'bg-blue-100 text-blue-800' :
//                 'bg-orange-100 text-orange-800'
//               }`}>
//                 {healthStatus}
//               </span>
//             </div>
//           </div>

//           {/* Watering info - grid layout */}
//           <div className="grid grid-cols-2 gap-3 mb-4">
//             <div>
//               <p className="text-xs sm:text-sm font-medium text-gray-700">Last Watered</p>
//               <p className="text-xs sm:text-sm text-gray-600">
//                 {new Date(lastWatered).toLocaleDateString()}
//               </p>
//             </div>
//             <div>
//               <p className="text-xs sm:text-sm font-medium text-gray-700">Next Watering</p>
//               <p className="text-xs sm:text-sm text-gray-600">
//                 {new Date(nextWatering).toLocaleDateString()}
//               </p>
//             </div>
//             <div className="col-span-2">
//               <p className="text-xs sm:text-sm font-medium text-gray-700">Frequency</p>
//               <p className="text-xs sm:text-sm text-gray-600">{wateringFrequency}</p>
//             </div>
//           </div>

//           {/* Added by - smaller text on mobile */}
//           <div className="pt-3 border-t border-gray-100">
//             <p className="text-xs sm:text-sm text-gray-500">
//               Added by <span className="font-medium">{userName}</span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>









// try {
//                         const response = await fetch('http://localhost:3000/plants');
//                         if (!response.ok) {
//                             throw new Error('Network response was not ok');
//                         }
//                         return await response.json();
//                     } catch (error) {
//                         console.error('Fetch error:', error);
//                         // You can return some fallback data here
//                         return []; // Return empty array as fallback
//                     }
//                 },