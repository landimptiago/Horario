export default function WeekSelector({ currentWeek, onChange }) {
  const getWeekLabel = (dateStr) => {
    const d = new Date(dateStr);
    const endOfWeek = new Date(d);
    endOfWeek.setDate(d.getDate() + 5);

    const fmt = (date) =>
      `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}`;

    return `${fmt(d)} – ${fmt(endOfWeek)}`;
  };

  const shiftWeek = (direction) => {
    const d = new Date(currentWeek);
    d.setDate(d.getDate() + direction * 7);
    onChange(d.toISOString().split('T')[0]);
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
