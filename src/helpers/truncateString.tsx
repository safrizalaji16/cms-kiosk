export function truncateString(inputString: string, maxLength: number): string {
  if (inputString.length <= maxLength) {
    return inputString; // Kembalikan string asli jika panjangnya kurang dari atau sama dengan maxLength
  } else {
    const truncatedString = inputString.substring(0, maxLength - 3) + "...";
    return truncatedString; // Potong string dan tambahkan '...' di akhir
  }
}
