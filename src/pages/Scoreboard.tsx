import React from 'react';
import Container from '../components/ui/Container';
import { Trophy, Clock, Calendar, User } from 'lucide-react';

interface SpeedrunEntry {
  rank: number;
  username: string;
  time: string;
  date: string;
}

const speedruns: SpeedrunEntry[] = [
  { rank: 1, username: "SpeedDemon", time: "12:45", date: "15/03/2025" },
  { rank: 2, username: "NinjaRunner", time: "13:20", date: "14/03/2025" },
  { rank: 3, username: "QuickSilver", time: "13:55", date: "13/03/2025" },
  { rank: 4, username: "TimeWarp", time: "14:30", date: "12/03/2025" },
  { rank: 5, username: "RushMaster", time: "15:15", date: "11/03/2025" },
  { rank: 6, username: "BlitzKing", time: "15:45", date: "10/03/2025" },
  { rank: 7, username: "SpeedStar", time: "16:20", date: "09/03/2025" },
  { rank: 8, username: "FastTrack", time: "16:55", date: "08/03/2025" },
  { rank: 9, username: "RapidRun", time: "17:30", date: "07/03/2025" },
  { rank: 10, username: "SwiftBlade", time: "18:15", date: "06/03/2025" },
];

const Scoreboard: React.FC = () => {
  return (
    <div className="pt-20">
      <Container className="py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Top Speedruns
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Los mejores tiempos de Campus Zero
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                      <div className="flex items-center">
                        <Trophy className="w-5 h-5 mr-2 text-primary" />
                        Posición
                      </div>
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                      <div className="flex items-center">
                        <User className="w-5 h-5 mr-2 text-primary" />
                        Jugador
                      </div>
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 mr-2 text-primary" />
                        Tiempo
                      </div>
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                      <div className="flex items-center">
                        <Calendar className="w-5 h-5 mr-2 text-primary" />
                        Fecha
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                  {speedruns.map((entry) => (
                    <tr
                      key={entry.rank}
                      className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <span className={`
                            inline-flex items-center justify-center w-8 h-8 rounded-full
                            ${entry.rank === 1 ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                              entry.rank === 2 ? 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200' :
                              entry.rank === 3 ? 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200' :
                              'bg-gray-50 text-gray-600 dark:bg-gray-800 dark:text-gray-400'}
                          `}>
                            {entry.rank}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-900 dark:text-white">
                        {entry.username}
                      </td>
                      <td className="px-6 py-4 text-gray-900 dark:text-white font-mono">
                        {entry.time}
                      </td>
                      <td className="px-6 py-4 text-gray-500 dark:text-gray-400">
                        {entry.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Scoreboard;