import { useState } from 'react';
import { CATEGORIES } from '../data/defaultSchedule';

export default function CellEditor({ cell, onSave, onClose }) {
  const [category, setCategory] = useState(cell.category);
  const [detail, setDetail] = useState(cell.detail);

  const handleSave = () => {
    onSave({ category, detail });
  };

  return (
    <div className="editor-overlay" onClick={onClose}>
      <div className="editor-modal" onClick={(e) => e.stopPropagation()}>
        <h3>Editar Horário</h3>

        <label>Categoria:</label>
        <div className="category-grid">
          {Object.entries(CATEGORIES).map(([key, cat]) => (
            <button
              key={key}
              className={`cat-btn ${category === key ? 'selected' : ''}`}
              style={{
                backgroundColor: cat.color,
                color: cat.textColor,
                border: category === key ? '2px solid #fff' : '2px solid transparent',
              }}
              onClick={() => setCategory(key)}
            >
              {cat.label || '(vazio)'}
            </button>
          ))}
        </div>

        <label>Detalhe (sala, matéria, etc.):</label>
        <input
          type="text"
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
          placeholder="Ex: HUnovo 311, Pediatria..."
        />

        <div className="editor-actions">
          <button className="btn-cancel" onClick={onClose}>Cancelar</button>
          <button className="btn-save" onClick={handleSave}>Salvar</button>
        </div>
      </div>
    </div>
  );
}
