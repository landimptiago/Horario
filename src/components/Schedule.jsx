import { useState, useEffect } from 'react';
import {
  CATEGORIES,
  DAYS,
  TIME_SLOTS,
  DEFAULT_SCHEDULE,
} from '../data/defaultSchedule';
import CellEditor from './CellEditor';
import WeekSelector from './WeekSelector';

const STORAGE_KEY = 'horario-tiago';

function getMonday() {
  const today = new Date();
  const day = today.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  const monday = new Date(today);
  monday.setDate(today.getDate() + diff);
  return monday.toISOString().split('T')[0];
}

function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export default function Schedule() {
  const [currentWeek, setCurrentWeek] = useState(getMonday);
  const [weekSchedules, setWeekSchedules] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  });
  const [editing, setEditing] = useState(null);
  const [showLegend, setShowLegend] = useState(false);

  const schedule = weekSchedules[currentWeek] || DEFAULT_SCHEDULE;

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(weekSchedules));
  }, [weekSchedules]);

  const handleCellClick = (slotIdx, dayIdx) => {
    setEditing({ slotIdx, dayIdx, cell: schedule[slotIdx][dayIdx] });
  };

  const handleSave = ({ category, detail }) => {
    const newSchedule = deepCopy(schedule);
    newSchedule[editing.slotIdx][editing.dayIdx] = { category, detail };

    setWeekSchedules((prev) => ({
      ...prev,
      [currentWeek]: newSchedule,
    }));
    setEditing(null);
  };

  const handleReset = () => {
    if (window.confirm('Restaurar horário padrão para esta semana?')) {
      setWeekSchedules((prev) => {
        const next = { ...prev };
        delete next[currentWeek];
        return next;
      });
    }
  };

  const handleCopyToWeek = () => {
    const target = prompt('Copiar para qual semana? (dd/mm/yyyy – segunda-feira)');
    if (!target) return;
    const [d, m, y] = target.split('/');
    const dateStr = `${y}-${m.padStart(2, '0')}-${d.padStart(2, '0')}`;
    setWeekSchedules((prev) => ({
      ...prev,
      [dateStr]: deepCopy(schedule),
    }));
    alert(`Horário copiado para a semana de ${target}`);
  };

  const getPeriodLabel = (period) => {
    switch (period) {
      case 'manha': return 'MANHÃ';
      case 'almoco': return '';
      case 'tarde': return 'TARDE';
      case 'noite': return 'NOITE';
      default: return '';
    }
  };

  // Group slots by period for row spanning
  const periods = [];
  let lastPeriod = null;
  TIME_SLOTS.forEach((slot, idx) => {
    if (slot.period !== lastPeriod) {
      periods.push({ period: slot.period, start: idx, count: 1 });
      lastPeriod = slot.period;
    } else {
      periods[periods.length - 1].count++;
    }
  });

  const periodStartSlots = new Set(periods.map((p) => p.start));
  const periodMap = {};
  periods.forEach((p) => {
    periodMap[p.start] = p;
  });

  return (
    <div className="schedule-wrapper">
      <h1>Meu Horário Semanal</h1>
      <p className="subtitle">Medicina - FURG | 1° Semestre 2026</p>

      <WeekSelector currentWeek={currentWeek} onChange={setCurrentWeek} />

      <div className="actions-bar">
        <button onClick={() => setShowLegend(!showLegend)}>
          {showLegend ? 'Ocultar' : 'Legenda'}
        </button>
        <button onClick={handleReset}>Restaurar Padrão</button>
        <button onClick={handleCopyToWeek}>Copiar Semana</button>
      </div>

      {showLegend && (
        <div className="legend">
          {Object.entries(CATEGORIES)
            .filter(([k]) => k !== 'vazio')
            .map(([key, cat]) => (
              <div
                key={key}
                className="legend-item"
                style={{ backgroundColor: cat.color, color: cat.textColor }}
              >
                {cat.label}
              </div>
            ))}
        </div>
      )}

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th className="col-period"></th>
              <th className="col-time">Horário</th>
              {DAYS.map((day, i) => {
                const isToday = (() => {
                  const today = new Date();
                  const weekStart = new Date(currentWeek);
                  const dayDate = new Date(weekStart);
                  dayDate.setDate(weekStart.getDate() + i);
                  return today.toDateString() === dayDate.toDateString();
                })();
                return (
                  <th key={day} className={isToday ? 'today-header' : ''}>
                    {day}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {TIME_SLOTS.map((slot, slotIdx) => (
              <tr key={slotIdx}>
                {periodStartSlots.has(slotIdx) && (
                  <td
                    className="period-label"
                    rowSpan={periodMap[slotIdx].count}
                  >
                    {getPeriodLabel(periodMap[slotIdx].period)}
                  </td>
                )}
                <td className="time-cell">{slot.time}</td>
                {DAYS.map((_, dayIdx) => {
                  const cell = schedule[slotIdx][dayIdx];
                  const cat = CATEGORIES[cell.category] || CATEGORIES.vazio;
                  return (
                    <td
                      key={dayIdx}
                      className="schedule-cell"
                      style={{
                        backgroundColor: cat.color,
                        color: cat.textColor,
                      }}
                      onClick={() => handleCellClick(slotIdx, dayIdx)}
                    >
                      <div className="cell-label">{cat.label}</div>
                      {cell.detail && (
                        <div className="cell-detail">{cell.detail}</div>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="hint">Toque em qualquer célula para editar</p>

      {editing && (
        <CellEditor
          cell={editing.cell}
          onSave={handleSave}
          onClose={() => setEditing(null)}
        />
      )}
    </div>
  );
}
