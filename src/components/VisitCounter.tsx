
import { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';

const VisitCounter = () => {
  const [visitCount, setVisitCount] = useState(0);
  const [todayVisits, setTodayVisits] = useState(0);

  useEffect(() => {
    // Récupérer les données existantes
    const storedVisits = localStorage.getItem('abalo-visit-count');
    const storedTodayVisits = localStorage.getItem('abalo-today-visits');
    const lastVisitDate = localStorage.getItem('abalo-last-visit-date');
    const today = new Date().toDateString();

    let totalVisits = storedVisits ? parseInt(storedVisits) : 0;
    let dailyVisits = 0;

    // Vérifier si c'est une nouvelle journée
    if (lastVisitDate !== today) {
      // Nouvelle journée, réinitialiser le compteur quotidien
      dailyVisits = 1;
      localStorage.setItem('abalo-today-visits', '1');
      localStorage.setItem('abalo-last-visit-date', today);
    } else {
      // Même journée, incrémenter le compteur quotidien
      dailyVisits = storedTodayVisits ? parseInt(storedTodayVisits) + 1 : 1;
      localStorage.setItem('abalo-today-visits', dailyVisits.toString());
    }

    // Incrémenter le compteur total
    totalVisits += 1;
    localStorage.setItem('abalo-visit-count', totalVisits.toString());

    setVisitCount(totalVisits);
    setTodayVisits(dailyVisits);

    console.log(`Visite enregistrée: ${totalVisits} total, ${dailyVisits} aujourd'hui`);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 bg-white shadow-lg rounded-lg p-4 border border-gray-200 z-50">
      <div className="flex items-center space-x-2 text-sm">
        <Eye size={16} className="text-blue-500" />
        <div className="text-gray-700">
          <div className="font-semibold">Visites: {visitCount.toLocaleString()}</div>
          <div className="text-xs text-gray-500">Aujourd'hui: {todayVisits}</div>
        </div>
      </div>
    </div>
  );
};

export default VisitCounter;
