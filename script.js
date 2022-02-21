
/*
  (1), 2, 3, 4, 5, ..., 12
  1, (2), 3, 4, 5, ..., 12
  1, 2, (3), 4, 5, ..., 12
  1, ..., 3, (4), 5, ..., 12
  1, ..., 4, (5), 6, ..., 12
  1, ..., 5, (6), 7, ..., 12
  1, ..., 6, (7), 8, ..., 12
  1, ..., 7, (8), 9, ..., 12
  1, ..., 8, (9), 10, ..., 12
  1, ..., 8, 9, (10), 11, 12
  1, ..., 8, 9, 10, (11), 12
  1, ..., 8, 9, 10, 11, (12)
  
  1, ...,4,5,(6),7,8
*/

export function getPages(currentPage, pageCount) {
  const maxPages = 7;
  let pages = null;

  if (currentPage <= pageCount && pageCount <= maxPages) {
    pages = [];
    for (let k = 0; k < pageCount; k++) {
      const value = currentPage === k ? `(${k + 1})` : k + 1;
      pages.push(value);
    }
  } else {
    
    pages = Array(maxPages).fill(null);
    if ((currentPage > 3) && (currentPage < (pageCount - 2))) {
      pages[0] = 1;
      pages[1] = "...";
      pages[2] = currentPage - 1;
      pages[3] = `(${currentPage})`;
      pages[4] = currentPage + 1;
      pages[5] = "...";
      pages[6] = pageCount;
    } else if (currentPage > 3) {
      pages[0] = 1;
      pages[1] = "...";
      
      let n = 1;
      let p = pageCount;
      while(n <= 5) {
        pages[maxPages - n] = p === currentPage ? `(${p})` : p;
        n = n + 1;
        p = p - 1;
      }
    } else if (currentPage < (pageCount - 2)) {
      pages[maxPages - 1] = pageCount;
      pages[maxPages - 2] = "...";

      let n = 0;
      let p = 1;
      while(n < maxPages - 2) {
        pages[n] = p === currentPage ? `(${p})` : p;
        n = n + 1;
        p = p + 1;
      }
    } 
  }
  return pages;
}
