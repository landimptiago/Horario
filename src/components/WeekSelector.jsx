export default function WeekSelector({ currentWeek, onChange }) {
  const parseLocal = (dateStr) => {
    const [y, m, d] = dateStr.split('-').map(Number);
    return new Date(y, m - 1, d);
  };

  const toDateStr = (date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  };

  const getWeekLabel = (dateStr) => {
    const d = parseLocal(dateStr);
    const endOfWeek = new Date(d);
    endOfWeek.setDate(d.getDate() + 6);

    const fmt = (date) =>
      `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}`;

    return `${fmt(d)} – ${fmt(endOfWeek)}`;
  };

  const shiftWeek = (direction) => {
    const d = parseLocal(currentWeek);
    d.setDate(d.getDate() + direction * 7);
    onChange(toDateStr(d));
  };

  const goToThisWeek = () => {
    const today = new Date();
    const day = today.getDay();
    const diff = day === 0 ? -6 : 1 - day;
    const monday = new Date(today);
    monday.setDate(today.getDate() + diff);
    onChange(monday.toISOString().split('T')[0]);
  };

  return (
    <div className="week-selector">
      <button onClick={() => shiftWeek(-1)} title="Semana anterior">◀</button>
      <span className="week-label">{getWeekLabel(currentWeek)}</span>
      <button onClick={() => shiftWeek(1)} title="Próxima semana">▶</button>
      <button className="btn-today" onClick={goToThisWeek}>Hoje</button>
    </div>
  );
}
