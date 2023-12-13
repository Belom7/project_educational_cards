export const usePagination = (currentPage: number, lastPage: number, maxLength: number) => {
  const res: Array<number> = []

  if (lastPage <= maxLength) {
    for (let i = 1; i <= lastPage; i++) {
      res.push(i)
    }
  } else {
    const firstPage = 1
    const confirmedPagesCount = 3
    const deductedMaxLength = maxLength - confirmedPagesCount
    const sideLength = deductedMaxLength / 2

    if (currentPage - firstPage < deductedMaxLength) {
      for (let j = 1; j <= deductedMaxLength + firstPage; j++) {
        res.push(j)
      }

      res.push(NaN)
      res.push(lastPage)
    } else if (lastPage - currentPage < deductedMaxLength) {
      res.push(firstPage)
      res.push(NaN)

      for (let k = lastPage - deductedMaxLength; k <= lastPage; k++) {
        res.push(k)
      }
    } else if (currentPage - firstPage >= sideLength && lastPage - currentPage >= sideLength) {
      const deductedSideLength = sideLength - 1

      res.push(1)
      res.push(NaN)

      for (let l = currentPage - deductedSideLength; l <= currentPage + deductedSideLength; l++) {
        res.push(l)
      }

      res.push(NaN)
      res.push(lastPage)
    } else {
      const isNearFirstPage = currentPage - firstPage < lastPage - currentPage
      let remainingLength = maxLength

      if (isNearFirstPage) {
        for (let m = 1; m <= currentPage + 1; m++) {
          res.push(m)
          remainingLength -= 1
        }

        res.push(NaN)
        remainingLength -= 1

        for (let n = lastPage - (remainingLength - 1); n <= lastPage; n++) {
          res.push(n)
        }
      } else {
        for (let o = lastPage; o >= currentPage - 1; o--) {
          res.unshift(o)
          remainingLength -= 1
        }

        res.unshift(NaN)
        remainingLength -= 1

        for (let p = remainingLength; p >= 1; p--) {
          res.unshift(p)
        }
      }
    }
  }

  return res
}