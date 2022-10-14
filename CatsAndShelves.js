function solution(start, finish){
    return (finish-start) % 3 >= 1 ? Math.round((finish-start)/3) + 1 : Math.round((finish-start)/3);
  }