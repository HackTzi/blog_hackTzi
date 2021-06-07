export default (date) => {
  if (!date) return `Indefinido`;
  const day = new Intl.DateTimeFormat('es-ES', { day: '2-digit' }).format(date);
  const month = new Intl.DateTimeFormat('es-ES', { month: 'long' }).format(date);
  const year = new Intl.DateTimeFormat('es-ES', { year: 'numeric' }).format(date);

  return `${month.charAt(0).toLocaleUpperCase() + month.slice(1)}, ${day} ${year}`;
}