function getAverage(marks)
{
  let sum = 0;
  for (let i = 0; i < marks.length; i++)
  {
    sum += marks[i];
  }
    return avg = Math.floor(sum/marks.length);
}
getAverage([2,2,2,2]);
console.log(avg)