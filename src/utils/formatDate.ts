export const formatDate = (val: string, type: string) => {
  const formatedDate: Date = new Date(val);
  if (type === "ISO") {
    return formatedDate.toISOString().split("T")[0];
  }
  return formatedDate.toISOString().split("T")[0];
};

export const formatDateDiffInIndonesian = (date: Date) => {
  const now = new Date();
  const diff = now.getTime() - date.getTime();

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (days > 0) {
    return `${days} hari lalu`;
  } else if (hours > 0) {
    return `${hours} jam lalu`;
  } else if (minutes > 0) {
    return `${minutes} menit lalu`;
  } else {
    return `${seconds} detik lalu`;
  }
};

export default { formatDate, formatDateDiffInIndonesian };
